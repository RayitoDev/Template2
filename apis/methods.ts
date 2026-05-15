import { client } from '@/apis';
import { AxiosRequestConfig, AxiosError } from 'axios';

const TIMEOUT_ERROR = 'timeout of 60000ms exceeded';

const handleError = async <T>(
    fn: () => Promise<T>,
    retries?: number
): Promise<T> => {
    try {
        return await fn();
    } catch (error) {
        const err = error as AxiosError<unknown>;
        const errorMessage = err.message;
        const responseMessage = (err.response?.data as { message?: string })?.message;

        const shouldRetry = errorMessage === TIMEOUT_ERROR || responseMessage === 'Unauthenticated.';

        if (shouldRetry && (retries === undefined || retries > 0)) {
            return await handleError(fn, retries === undefined ? undefined : retries - 1);
        }

        throw error;
    }
};

const get = async <T>(
    url: string,
    token?: string,
    retries?: number,
    params?: object,
): Promise<T> => {
    const config: AxiosRequestConfig = {
        params,
        headers: {},
    };

    if (token) {
        config.headers!['Authorization'] = `Bearer ${token}`;
    }

    return await handleError(() => client.get<T>(url, config).then(res => res.data), retries);
};

const post = async <T, B = unknown>(
    url: string,
    body: B,
    token?: string,
    retries?: number
): Promise<T> => {
    const config: AxiosRequestConfig = {
        headers: {},
    };

    if (token) {
        config.headers!['Authorization'] = `Bearer ${token}`;
    }

    return await handleError(() => client.post<T>(url, body, config).then(res => res.data), retries);
};

export { get, post };