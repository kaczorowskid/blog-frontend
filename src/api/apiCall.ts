import { AxiosResponse } from 'axios';
import { axiosInstance } from 'libs';

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    Promise.reject(error);
  }
);

export const apiCall = async <RequestData, ResponseData>(
  url: string,
  method: HttpMethod,
  data?: RequestData
): Promise<AxiosResponse<ResponseData>> =>
  axiosInstance({
    url,
    method,
    ...(method === HttpMethod.GET ? { params: data } : { data })
  });
