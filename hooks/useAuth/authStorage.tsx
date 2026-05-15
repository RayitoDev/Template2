const TOKEN_KEY = 'auth_token';
const EXPIRES_KEY = 'auth_expires_at';

const isBrowser = () => typeof window !== 'undefined';

export const saveSession = (token: string, expiresAt: string) => {
    if (!isBrowser()) return;

    sessionStorage.setItem(TOKEN_KEY, token);
    sessionStorage.setItem(EXPIRES_KEY, expiresAt);
};

export const clearSession = () => {
    if (!isBrowser()) return;

    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(EXPIRES_KEY);
};

export const getToken = (): string | null => {
    if (!isBrowser()) return null;
    return sessionStorage.getItem(TOKEN_KEY);
};

export const getExpiresAt = (): Date | null => {
    if (!isBrowser()) return null;

    const value = sessionStorage.getItem(EXPIRES_KEY);
    if (!value) return null;

    return new Date(value.replace(' ', 'T'));
};

export const isSessionValid = (): boolean => {
    const expiresAt = getExpiresAt();
    if (!expiresAt) return false;

    return new Date() < expiresAt;
};