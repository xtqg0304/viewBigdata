import request from '@/utils/request';
import { doorSys } from '@/api/api.js';
export default {
  percentToScholl (param) {
    return request({
      url: doorSys + '/index/percentToScholl',
      method: 'get',
      data: param
    });
  }
};
