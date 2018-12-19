/* eslint-disable */
import request from '../tools/request'

//使用
export function test(params) {
    return request({
      url: '/login',
      method: 'post',
      params
    });
  }