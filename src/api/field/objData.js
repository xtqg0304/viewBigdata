import request from '@/utils/request';
import { fieldSys } from '@/api/api.js';
export default {
  // percentToField (param) {
  //   return request({
  //     url: '/index/percentToField',
  //     method: 'get',
  //     data: param
  //   });
  // }
  percentToField (param) {
    return request({
      url: fieldSys + '/admin/jsondataPercentToField.do',
      method: 'get',
      data: param
    });
  }
};
