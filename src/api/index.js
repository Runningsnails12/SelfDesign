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
  async login(params) {
    return request({
      url: '/user/login',
      method: 'POST',
      data: params
    });
  },
  async register(params) {
    return request({
      url: '/user/register',
      method: 'POST',
      data: params
    });
  },
  async getUserProject(){
    return request({
      url:'/project/getUserProject',
      method:'GET'
    });
  },
  async getUserInfo(){
    return request({
      url:'/user/getUserInfo',
      method:'GET'
    });
  },
  async modifyUsername(params){
    return request({
      url:'/user/modifyUsername',
      method:'POST',
      data: params
    });
  }
};