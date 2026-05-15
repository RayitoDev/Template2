import { endpoints, post, get } from '@/apis';
import { LoginResponseProps, UserResponseProps, LogoutResponseProps } from '@/apis/api/auth/types';

const login = async (
    email: string,
    password: string
): Promise<LoginResponseProps> => {
    const data = { email, password };
    return await post<LoginResponseProps>(endpoints.auth.login, data);
};

const getUser = async (token: string): Promise<UserResponseProps> => {
    return await get<UserResponseProps>(endpoints.auth.user, token, 0);
};

const logout = async (token: string): Promise<LogoutResponseProps> => {
    return await get<LogoutResponseProps>(endpoints.auth.logout, token);
};

export { login, getUser, logout };