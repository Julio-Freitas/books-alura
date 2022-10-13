import axios, { AxiosError, AxiosRequestConfig } from "axios";

const baseURL = "http://localhost:8000";
const defaultHeaders = {
  Accept: "aplication/json",
  Content: "aplication/json",
};

const API = axios.create({
  baseURL,
  headers: { ...defaultHeaders },
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const sessionToken = sessionStorage.getItem("token");
  const { headers } = config;

  if (sessionToken && headers) {
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };
  }

  return config;
};

const onError = (error: AxiosError) => Promise.reject(error);

API.interceptors.request.use(onRequest, onError);

export { API };
