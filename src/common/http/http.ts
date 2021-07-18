import axios from 'axios';
import type { AxiosResponse } from 'axios';

export function get(url: string, id?: number, params?: any): Promise<AxiosResponse<any>> {
    return axios.get(url, {
        params: {
            id,
            ...params
        }
    });
}


export function post(url: string, body: string, params?: any): Promise<AxiosResponse<any>> {
    return axios.post(url, body, {
        params
    });
}
