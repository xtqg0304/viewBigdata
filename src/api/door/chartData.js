import request from '@/utils/request';
import { doorSys } from '@/api/api.js';
export default {
  rateToScholl (param) {
    return request({
      url: doorSys + '/index/rateToScholl',
      method: 'get',
      data: param
    });
  },
  attendanceDoorLine (param) {
    return request({
      url: doorSys + '/door/attendanceDoorLine',
      method: 'get',
      data: param
    });
  },
  abnormalDormitoryPie (param) {
    return request({
      url: doorSys + '/door/abnormalDormitoryPie',
      method: 'get',
      data: param
    });
  },
  trendDoorHistogram (param) {
    return request({
      url: doorSys + '/door/trendDoorHistogram',
      method: 'get',
      data: param
    });
  },
  abnormalDoorTable (param) {
    return request({
      url: doorSys + '/door/abnormalDoorTable',
      method: 'get',
      data: param
    });
  },
  getSystems (param) {
    return request({
      url: '/index/getSystems',
      method: 'get',
      data: param
    });
  }
};
