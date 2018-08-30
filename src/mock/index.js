import Mock from 'mockjs';
import dataReturn from '@/mock/home.js';
import fieldReturn from '@/mock/field.js';
import vehicleReturn from '@/mock/vehicle.js';
import dormitoryReturn from '@/mock/dormitory.js';
import doorReturn from '@/mock/door.js';
// index获取数据
// Mock.mock('/index/getSystems', 'get', dataReturn.getSystems);
Mock.mock('/index/rateToScholl', 'get', dataReturn.rateToScholl);
Mock.mock('/index/percentToScholl', 'get', dataReturn.percentToScholl);
Mock.mock('/index/percentToField', 'get', dataReturn.percentToField);
Mock.mock('/index/percentToVehicle', 'get', dataReturn.percentToVehicle);
Mock.mock('/index/rateVehicle', 'get', dataReturn.rateVehicle);
Mock.mock('/index/dormitoryLineData', 'get', dataReturn.dormitoryLineData);
Mock.mock('/index/vehicleLineData', 'get', dataReturn.vehicleLineData);
Mock.mock('/index/fieldRingData', 'get', dataReturn.fieldRingData);
Mock.mock('/index/doorTableData', 'get', dataReturn.doorTableData);
// field获取数据
Mock.mock('/field/useField', 'get', fieldReturn.useFieldData);
Mock.mock('/field/useTrendFieldLine', 'get', fieldReturn.useTrendFieldLine);
Mock.mock('/field/orderTrendFieldLine', 'get', fieldReturn.orderTrendFieldLine);
// vehicle获取数据
Mock.mock('/vehicle/trendVehicleLine', 'get', vehicleReturn.trendVehicleLine);
// Mock.mock('/vehicle/vehicleFunnel', 'get', vehicleReturn.vehicleFunnel);
Mock.mock('/vehicle/vehicleObjData', 'get', vehicleReturn.vehicleObjData);
// dormitory获取数据
Mock.mock(
  '/dormitory/dormitoryLine',
  'get',
  dormitoryReturn.trendDormitoryLine
);
Mock.mock(
  '/dormitory/dormitoryBar',
  'get',
  dormitoryReturn.abnormalDormitoryBar
);
Mock.mock(
  '/dormitory/dormitoryTable',
  'get',
  dormitoryReturn.dormitoryTableData
);
// door获取数据
Mock.mock('/door/attendanceDoorLine', 'get', doorReturn.attendanceDoorLine);
Mock.mock('/door/abnormalDormitoryPie', 'get', doorReturn.abnormalDormitoryPie);
Mock.mock('/door/trendDoorHistogram', 'get', doorReturn.trendDoorHistogram);
Mock.mock('/door/abnormalDoorTable', 'get', doorReturn.abnormalDoorTable);
export default Mock;
