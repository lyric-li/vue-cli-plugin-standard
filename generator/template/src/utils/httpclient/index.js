import request from "./request";

// http 请求客户端
const httpclient = {
  // GET 请求
  get(url, params, options) {
    return new Promise((resolve, reject) => {
      request.get(url, {
        params,
        options,
      }).then((data) => {
        console.log("┏---------------------------------------------┓");
        console.log(" 请求地址:", url);
        console.log(" 请求方式:", "GET");
        console.log(" 请求参数:", params);
        console.log(" 响应结果:", data);
        console.log("┗---------------------------------------------┛");
        resolve(data);
      }).catch((err) => {
        console.log("┏---------------------------------------------┓");
        console.log(" 请求地址:", url);
        console.log(" 请求方式:", "GET");
        console.log(" 请求参数:", params);
        console.error(" 请求异常:", err);
        console.log("┗---------------------------------------------┛");
        reject(err);
      });
    });
  },
  // POST 请求
  post(url, params, options) {
    return new Promise((resolve, reject) => {
      request.post(url, params, {
        options,
      }).then((data) => {
        console.log("┏---------------------------------------------┓");
        console.log(" 请求地址:", url);
        console.log(" 请求方式:", "POST");
        console.log(" 请求参数:", params);
        console.log(" 响应结果:", data);
        console.log("┗---------------------------------------------┛");
        resolve(data);
      }).catch((err) => {
        console.log("┏---------------------------------------------┓");
        console.log(" 请求地址:", url);
        console.log(" 请求方式:", "POST");
        console.log(" 请求参数:", params);
        console.error(" 请求异常:", err);
        console.log("┗---------------------------------------------┛");
        reject(err);
      });
    });
  },
};

export default httpclient;
