import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/notas",
  headers: {
    "Content-Type": "application/json",
  },
});

export const httpClient = ({ endpoint, config }: any) => {
  return axiosInstance(endpoint, config);
};
