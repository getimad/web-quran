import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.quran.com/api/v4",
});

class APIClient<T> {
  getAll = async (
    endpoint: string,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const res = await axiosInstance.get<T>(endpoint, config);
    return res.data;
  };

  get = async (
    endpoint: string,
    id: string,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    const res = await axiosInstance.get<T>(`${endpoint}/${id}`, config);
    return res.data;
  };
}

export default APIClient;
