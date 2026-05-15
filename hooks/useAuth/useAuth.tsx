'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { login as apiLogin, logout as apiLogout, getUser } from '@/apis/api/auth';
import { saveSession, clearSession, getToken, getExpiresAt, isSessionValid } from '@/hooks/useAuth/authStorage';
import useToast from '@/hooks/useToast';
import UserResponseProps from '@/apis/api/auth/types/userResponseProps';
import SCOPE_REDIRECT_PRIORITY from '@/utils/scopeRedirect';
import { useSpinnerContext } from '@/components/spinner/contexts/index';
import Scope from '@/apis/api/auth/types/scope';

const MINUTOS_GRACIA = 10;

export const resolveRedirectByScopes = (scopes: Scope[]): string => {
    const match = SCOPE_REDIRECT_PRIORITY.find(item => {
        return scopes.includes(item.scope);
    });
    return match?.path ?? '/home';
};

export const useAuth = () => {
    const router = useRouter();
    const showToast = useToast();
    const { setOpen } = useSpinnerContext();
    const [token, setToken] = useState<string | null>(getToken());
    const [user, setUser] = useState<UserResponseProps | null>(null);


    const scheduleAutoLogout = () => {
        const expiresAt = getExpiresAt();
        if (!expiresAt) return;

        const logoutTime = new Date(expiresAt);
        logoutTime.setMinutes(logoutTime.getMinutes() - MINUTOS_GRACIA);

        const msUntilLogout = logoutTime.getTime() - Date.now();

        if (msUntilLogout <= 0) {
            handleLogout();
            return;
        }

        setTimeout(() => {
            showToast({
                message: 'Tu sesión expiró. Cerrando sesión...',
                type: 'warning',
                position: 'top-right'
            });
            handleLogout();
        }, msUntilLogout);
    };

    const login = async (email: string, password: string) => {
        try {
            setOpen(true);
            const data = await apiLogin(email, password);

            if (!data.success) {
                showToast({
                    message: data.message ?? 'Error al iniciar sesión',
                    type: 'error',
                    position: 'top-right',
                });
                return;
            }
            
            const { token, expires_at } = data.data;

            // Guardamos sesión 
            saveSession(token, expires_at);
            setToken(token);

            // Obtenemos usuario
            const userRes = await getUser(token);
            if (userRes.success) {
                setUser(userRes);
            }
            
            // Programamos logout
            scheduleAutoLogout();

            const scopes = userRes.data.scopes as Scope[];

            // Redirección
            const targetPath = resolveRedirectByScopes(scopes);
            router.replace(targetPath);
            
            if (!scopes || scopes.length === 0) {
                showToast({
                    message: 'Ingreso exitoso, pero no se detectaron permisos.',
                    position: 'top-right',
                    type: 'warning',
                });
                router.replace('/home');
                return;
            }

            showToast({ 
                message: data.message, 
                type: 'success', 
                position: 'top-right'
            });

        } catch {
            showToast({
                message: 'Ocurrió un error al iniciar sesión',
                position: 'top-right',
                type: 'error',
            });
        } finally {
            setOpen(false);
        }
    };

    const handleLogout = async () => {
        try {
            const t = getToken();
            if (t) await apiLogout(t);
        } catch {
            //vacio para cerrar sesion de cualquir manera
        }

        clearSession();
        setToken(null);
        setUser(null);
        router.push('/login');
    };

    useEffect(() => {
        //Comentar si se esta trabajando sin apis login y user
        if (!isSessionValid()) {
            clearSession();
            router.push('/login');
            return;
        }

        const t = getToken();
        if (t) {
            getUser(t).then(res => {
                if (res.success) {
                    setUser(res);
                } else {
                    handleLogout();
                }
            });

            scheduleAutoLogout();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        user,
        token,
        login,
        logout: handleLogout,
        isAuthenticated: !!token && isSessionValid(),
    };
};
