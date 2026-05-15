'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

type Props = {
    children: React.ReactNode;
};

//AuthGuard proteje la pagina (sin token regresa a login)
export default function AuthGuard({ children }: Props) {

    const { isAuthenticated } = useAuth();
    const router = useRouter();

    const [mounted, setMounted] = useState(false);

    // esperar hidratación
    useEffect(() => {
        setMounted(true);
    }, []);

    // redirección
    useEffect(() => {

        if (mounted && !isAuthenticated) {
            router.replace('/login');
        }

    }, [mounted, isAuthenticated, router]);

    // evitar render server/client mismatch
    if (!mounted) return null;

    // mientras redirige
    if (!isAuthenticated) return null;

    return <>{children}</>;
}