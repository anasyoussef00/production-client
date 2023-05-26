import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export declare interface IApiOptions {
  basePath: string;
}

export declare interface IApi {
  get<T>(path: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(path: string, body: T, config?: AxiosRequestConfig): Promise<T>;
  put<T>(path: string, body: T, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}
