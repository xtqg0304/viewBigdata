import request from '@/utils/request';
import { vehicleSys } from '@/api/api.js';
export default {
  percentToVehicle (param) {
    return request({
      url: vehicleSys + '/index/percentToVehicle',
      method: 'post',
      data: param
    });
  },
  vehicleObjData (param) {
    return request({
      url: vehicleSys + '/vehicle/vehicleObjData',
      method: 'post',
      data: param
    });
  }
};
