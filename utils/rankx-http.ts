import axios from "axios";

const http = axios.create({
  baseURL:
    "https://rankx.bkt.studio/api/",
  timeout: 1000,
});


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
