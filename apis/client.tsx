import axios, { AxiosInstance } from 'axios';

const client: AxiosInstance = axios.create({
    //baseURL: `${process.env.NEXT_PUBLIC_API_URL}/apis/`,
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/`,
    timeout: 60000
});

export default client;
