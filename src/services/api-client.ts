import axios, { AxiosRequestConfig } from "axios";
import FetchResponse from "../interfaces/FetchResponse";

const axiosInstance = axios.create({
  baseURL: "http://api.alquran.cloud/v1/",
});

class APIClient<T> {
  getAll = async (
    endpoint: string,
    config?: AxiosRequestConfig,
  ): Promise<FetchResponse<T[]>> => {
    const res = await axiosInstance.get<FetchResponse<T[]>>(endpoint, config);
    return res.data;
  };

  get = async (
    endpoint: string,
    id: string,
    config?: AxiosRequestConfig,
  ): Promise<FetchResponse<T>> => {
    const res = await axiosInstance.get<FetchResponse<T>>(
      `${endpoint}/${id}`,
      config,
    );
    return res.data;
  };
}

export default APIClient;
