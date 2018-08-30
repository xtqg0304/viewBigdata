import request from '@/utils/request';
import { vehicleSys } from '@/api/api.js';
export default {
  vehicleLineData (param) {
    return request({
      url: vehicleSys + '/index/vehicleLineData',
      method: 'post',
      data: param
    });
  },
  rateVehicle (param) {
    return request({
      url: vehicleSys + '/index/rateVehicle',
      method: 'post',
      data: param
    });
  },
  trendVehicleLine (param) {
    return request({
      url: vehicleSys + '/vehicle/trendVehicleLine',
      method: 'post',
      data: param
    });
  },
  vehicleFunnel (param) {
    return request({
      url: vehicleSys + '/vehicle/vehicleFunnel',
      method: 'post',
      data: param
    });
  }
};
