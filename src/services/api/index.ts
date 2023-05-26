import fs from 'fs';
import type { IApi, IApiOptions } from './types';
import download from 'download';
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';

export default class Api implements IApiOptions, IApi {
  basePath: string;
  private axios: AxiosInstance;

  constructor(options: IApiOptions) {
    this.basePath = options.basePath;
    this.axios = axios.create({
      baseURL: this.basePath,
    });
  }

  async get<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    // if (path.trim().length !== 0 && this.basePath.trim().length !== 0)
    //   path = this.basePath!.concat(path);

    try {
      const { data } = await this.axios.get<T>(path, config);
      return data;
    } catch (err) {
      throw err;
    }
  }

  async put<T>(path: string, body: T, config?: AxiosRequestConfig): Promise<T> {
    // if (path.trim().length !== 0 && this.basePath.trim().length !== 0)
    //   path = this.basePath.concat(path);

    // const res = await fetch(path, {
    //   method: 'PUT',
    //   body: JSON.stringify(body),
    // });

    try {
      const { data } = await this.axios.put<T>(path, body, config);
      return data;
    } catch (err) {
      throw err;
    }
  }

  async post<T>(path: string, body: T, config?: AxiosRequestConfig): Promise<T> {
    // if (path.trim().length !== 0 && this.basePath.trim().length !== 0)
    //   path = this.basePath.concat(path);

    // const res = await fetch(path, {
    //   method: 'POST',
    //   body: JSON.stringify(body),
    // });
    // return (await res.json()) as T;

    try {
      const { data } = await this.axios.post<T>(path, body, config);
      return data;
    } catch (err) {
      throw err;
    }
  }

  async delete<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    // if (path.trim().length !== 0 && this.basePath.trim().length !== 0)
    //   path = this.basePath.concat(path);

    // const res = await fetch(path, {
    //   method: 'POST',
    //   body: JSON.stringify(body),
    // });
    // return (await res.json()) as T;

    try {
      const res = await this.axios.delete<T>(path, config);
      return res;
    } catch (err) {
      throw err;
    }
  }
}
