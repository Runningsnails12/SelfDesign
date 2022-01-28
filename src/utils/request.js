/**
 * axiox二次封装
 */
import axiox from 'axios';
import config from '../config';

//axiox实例
const service = axiox.create({
  baseUrl: config.baseApi,
  timeout: 8000
});

//请求拦截
// service.interceptors.request.use((req) => {

// })

//响应拦截
service.interceptors.response.use((res) => {
  // const { code, data, msg } = res.data;
  // if (code === 200) {
  //     return data;
  // }
  return res.data;
});

const request = (options) => {
  options.method = options.method || 'get';
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data;
  }
  let isMock = config.mock;
  if (typeof options.mock != 'undefined') {
    isMock = options.mock;
  }
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;
  }
  return service(options);
};

['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options
    });
  };
});

export default request;