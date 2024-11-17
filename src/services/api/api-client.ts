import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/notas",
  headers: {
    "Content-Type": "application/json",
  },
});

type HttpClientParams = {
  endpoint: string;
  config?: AxiosRequestConfig;
};

export const httpClient = async ({
  endpoint,
  config,
}: HttpClientParams): Promise<AxiosResponse> => {
  try {
    const response = await axiosInstance(endpoint, config);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
