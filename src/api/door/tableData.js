import request from '@/utils/request';
import { doorSys } from '@/api/api.js';
export default {
  // gaugeData (param) {
  //   return request({
  //     url: '/accessControl/gauge',
  //     method: 'get',
  //     data: param
  //   });
  // },
  doorTableData (param) {
    return request({
      url: doorSys + '/index/doorTableData',
      method: 'get',
      data: param
    });
  }
};
