/***
 * axios 封装
 */
import axios from "axios";
class HttpRequest {
  constructor() {
    this.timeout = 10 * 1000; // 定义请求超时时间
    this.headers = { "Content-Type": "application/json;charset=utf8" };
  }
  request = options => {
    console.log(this);
    const instance = axios.create();
    const config = {
      ...options,
      headers: this.headers,
      timeout: this.timeout
    };
    this.setInterceptors(instance, options.url); //根据不同的url匹配不同的拦截器
    return instance(config);
  };
  setInterceptors = (instance, url) => {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        // 在这里添加loading
        // 配置token
        config.headers.AuthorizationToken =
          localStorage.getItem("AuthorizationToken") || "";
        return config;
      },
      err => Promise.reject(err)
    );
    // 响应拦截
    instance.interceptors.response.use(
      response => {
        // 在这里移除loading
        // todo: 想根据业务需要，对响应结果预先处理的，都放在这里
        return response;
      },
      err => {
        if (err.response) {
          // 响应错误码处理
          switch (err.response.status) {
            case "403":
              // todo: handler server forbidden error
              break;
            // todo: handler other status code
            default:
              break;
          }
          return Promise.reject(err.response);
        }
        if (!window.navigator.online) {
          // 断网处理
          // todo: jump to offline page
          return -1;
        }
        return Promise.reject(err);
      }
    );
  };
}
const httpRequest = new HttpRequest();
const instance = httpRequest.request;

export const getMethodRequest = (url, params = {}, headers = {}) => {
  return instance({
    url,
    params,
    headers,
    method: "get"
  });
};

export const postMethodRequest = (url, data = {}, headers = {}) => {
  return instance({
    url,
    data,
    headers,
    method: "post"
  });
};

export default instance;
