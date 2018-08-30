import request from '@/utils/request';
import { dormitorySys } from '@/api/api.js';
export default {
  dormitoryLineData (param) {
    return request({
      url: dormitorySys + '/index/dormitoryLineData',
      method: 'get',
      data: param
    });
  },
  dormitoryLine (param) {
    return request({
      url: dormitorySys + '/dormitory/dormitoryLine',
      method: 'get',
      data: param
    });
  },
  dormitoryBar (param) {
    return request({
      url: dormitorySys + '/dormitory/dormitoryBar',
      method: 'get',
      data: param
    });
  },
  dormitoryTable (param) {
    return request({
      url: dormitorySys + '/dormitory/dormitoryTable',
      method: 'get',
      data: param
    });
  },
  dormitoryObj (param) {
    return request({
      url: dormitorySys + '/dormitory/expCount',
      method: 'get',
      data: param
    });
  }
};
