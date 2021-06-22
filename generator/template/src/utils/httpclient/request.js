import axios from "axios";
import { Toast } from "vant";
import ServiceError from "./error";

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  timeout: 25000,
});

request.interceptors.request.use((config) => {
  const options = config.options || {};
  if (typeof (options.loading) === "undefined") {
    options.loading = false;
  }
  if (options.loading) {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
  }
  config = Object.assign(config, { options });
  return config;
}, (err) => Promise.reject(err));

request.interceptors.response.use((res) => {
  const { options } = res.config;
  if (options.loading) {
    Toast.clear();
  }
  // 响应数据
  const result = res.data;
  if (result.code !== 200) {
    return Promise.reject(new ServiceError(JSON.stringify(result)));
  }
  return result.data;
}, (err) => {
  Toast.clear();
  Toast("服务器异常");
  return Promise.reject(err);
});

export default request;
