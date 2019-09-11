import axios from "axios";
import cookie from "../utils/cookie";
import toLogin from "../libs/login";
import { VUE_APP_API_URL } from "../utils/index";

const instance = axios.create({
  baseURL: VUE_APP_API_URL,
  timeout: 3000
});

const defaultOpt = { login: true };

function baseRequest(options) {
  const token = cookie.get("token");
  const headers = options.headers || {};

  headers["token"] = token;
  options.headers = headers;
  if (!token) {
    toLogin();
    return Promise.reject({ msg: "未登录", toLogin: true });
  }
  return instance(options).then(res => {
    const data = res.data || {};
    if (res.status !== 200) {
      return Promise.reject({ msg: "请求失败", res, data });
    } else if (data.code === 0) {
      return Promise.resolve(data.data, res);
    } else {
      return Promise.reject({ msg: data.message, res, data });
    }
  });
}

/**
 * http 请求基础类
 * 参考文档 https://www.kancloud.cn/yunye/axios/234845
 *
 */
const request = ["post", "put", "patch"].reduce((request, method) => {
  /**
   *
   * @param url string 接口地址
   * @param data object get参数
   * @param options object axios 配置项
   * @returns {AxiosPromise}
   */
  request[method] = (url, data = {}, options = {}) => {
    return baseRequest(
      Object.assign({ url, data, method }, defaultOpt, options)
    );
  };
  return request;
}, {});

["get", "delete", "head"].forEach(method => {
  /**
   *
   * @param url string 接口地址
   * @param params object get参数
   * @param options object axios 配置项
   * @returns {AxiosPromise}
   */
  request[method] = (url, params = {}, options = {}) => {
    return baseRequest(
      Object.assign({ url, params, method }, defaultOpt, options)
    );
  };
});

export default request;
