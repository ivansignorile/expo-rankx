import axios from "axios";

import { remove, save } from "./store";
import { logout, refreshToken, silentLogout } from "./service";
const http = axios.create({
  baseURL:
    "https://acamir.westeurope.cloudapp.azure.com/arte-integration-app-web/api/",
  timeout: 1000,
});

// inject headers to all requests
http.interceptors.request.use(async (config) => {
  config.headers["Content-Type"] = "application/json";
  config.headers[
    "licenseKey"
  ] = `CCAR34W4YR4YB846ERA4TVREW4684T9ASD798AS7DF7AS98FD`;
  config.headers["module"] = "6";
  config.headers["lang"] = "IT";
  return config;
});

// global catch for all requests
http.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("STATUS",error.status);
    console.log("Error from http request", error);

    // if (error.status === 401) {
    //   await silentLogout();
    //   const _response = await refreshToken();
    //   await save("account", _response?.data?.view?.account);
    //   await save("authToken", _response?.data?.view?.token);

    //   // redo the request
    //   return http.request(error.config);
    // }

    return Promise.reject(error);
  }
);

// // convert to curl interceptor (if post, retrieve also the data)
// http.interceptors.request.use((config) => {
//   const { method, url, data, headers } = config;
//   const curl = `curl -X ${
//     method?.toUpperCase() || "GET"
//   } ${url} -H ${JSON.stringify(headers)} -d ${JSON.stringify(data)}`;
//   console.log(curl);
//   return config;
// });

const get = async (url: string, config = {}) => {
  const response = await http.get(url, config);
  return response.data;
};

const post = async (url: string, data: any, config = {}) => {
  const response = await http.post(url, data, config);
  return response;
};

const put = async (url: string, data: any, config = {}) => {
  const response = await http.put(url, data, config);
  return response.data;
};
const patch = async (url: string, data: any, config = {}) => {
  const response = await http.patch(url, data, config);
  return response.data;
};

const destroy = async (url: string, config = {}) => {
  const response = await http.delete(url, config);
  return response.data;
};

export { get, post, put, destroy, patch };
