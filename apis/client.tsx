import axios, { AxiosInstance } from 'axios';

const client: AxiosInstance = axios.create({
    //baseURL: `${process.env.NEXT_PUBLIC_API_URL}/apis/`,
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/`,
    timeout: 60000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default client;
