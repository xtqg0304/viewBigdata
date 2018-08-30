import request from '@/utils/request';
import { basicSys } from '@/api/api.js';
// import qs from 'qs';
export default {
  getSystems (param) {
    return request({
      url: basicSys + '/inside/login',
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: param
    });
  }
};
