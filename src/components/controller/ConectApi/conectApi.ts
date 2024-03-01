import axios, { AxiosInstance } from "axios";

export const createHttp = (): AxiosInstance => {
    
    const http = axios.create({
        baseURL: `https://api.brla.digital:4567/v1/business`,
    });

    return http;
};





