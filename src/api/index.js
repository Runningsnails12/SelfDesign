/**
 * 例如
 * login(params) {
        return request({
            url: '/users/login',
            method: 'POST',
            data: params,         //传输的数据
            mock: true            //是否开启mock,默认(没有写)是不开启
        })
    },
 */
import request from '../utils/request';
export default {
  login(params) {
    return request({
      url: '/user/login',
      method: 'POST',
      data: params,
    });
  },
  register(params) {
    return request({
      url: '/user/register',
      method: 'POST',
      data: params,
    });
  },
};