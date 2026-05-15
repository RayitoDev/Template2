/* eslint-disable @typescript-eslint/no-unused-vars */
import { endpoints, get, post } from '@/apis';
import { getToken } from '@/hooks/useAuth/authStorage';
import { IndexResponseProps, ShowResponseProps } from './types';


const getIndex = async (folio?:string, tramite_id?:string): Promise<IndexResponseProps> => {
    const token = getToken() || '';
    const params = new URLSearchParams();

    
    if (folio) params.append('folio', folio);
    if (tramite_id) params.append('tramite_id', tramite_id);
    return await get<IndexResponseProps>(`${endpoints.example.index}?${params.toString()}`,token);
};

const getShow = async (folio:string): Promise<ShowResponseProps> => {
    const token = getToken() || '';
    return await get<ShowResponseProps>(`${endpoints.example.show}/${folio}`,token);
};

export { getIndex, getShow};