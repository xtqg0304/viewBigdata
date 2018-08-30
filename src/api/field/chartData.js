import request from '@/utils/request';
import { fieldSys } from '@/api/api.js';
export default {
  // fieldRingData (param) {
  //   return request({
  //     url: '/index/fieldRingData',
  //     method: 'get',
  //     data: param
  //   });
  // },
  // useField (param) {
  //   return request({
  //     url: '/field/useField',
  //     method: 'get',
  //     data: param
  //   });
  // },
  // useTrendFieldLine (param) {
  //   return request({
  //     url: '/field/useTrendFieldLine',
  //     method: 'get',
  //     data: param
  //   });
  // },
  // orderTrendFieldLine (param) {
  //   return request({
  //     url: '/field/orderTrendFieldLine',
  //     method: 'get',
  //     data: param
  //   });
  // }

  fieldRingData (param) {
    return request({
      url: fieldSys + '/admin/jsondataFieldRingData.do',
      method: 'get',
      data: param
    });
  },
  useField (param) {
    return request({
      url: fieldSys + '/admin/jsondataUseField.do',
      method: 'get',
      data: param
    });
  },
  useTrendFieldLine (param) {
    return request({
      url: fieldSys + '/admin/jsondataUseTrendFieldLine.do',
      method: 'get',
      data: param
    });
  },
  orderTrendFieldLine (param) {
    return request({
      url: fieldSys + '/admin/jsondataOrderTrendFieldLine.do',
      method: 'get',
      data: param
    });
  }
};
