import axios, { AxiosInstance, AxiosResponse } from "axios";

// const host = "http://apollo-portal.test.shopee.io";
const url = "/apps/chatbot-api";

export const fetch: AxiosInstance = axios.create({
  baseURL: url,
  withCredentials: true,
});

const errorHandler = function (error: any) {
  if (error.response) {
  } else if (error.request) {
  } else {
    return Promise.reject(error);
  }
};

fetch.interceptors.request.use((config) => config, errorHandler);
fetch.interceptors.response.use(
  (response: AxiosResponse<any>) => response.data,
  errorHandler
);
