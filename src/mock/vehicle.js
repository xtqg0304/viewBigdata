export default {
  trendVehicleLine (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        chartData: {
          columns: ['date', '驶入车辆', '驶出车辆'],
          rows: [
            { date: '2:00', 驶入车辆: 32, 驶出车辆: 81 },
            { date: '4:00', 驶入车辆: 23, 驶出车辆: 38 },
            { date: '6:00', 驶入车辆: 93, 驶出车辆: 27 },
            { date: '8:00', 驶入车辆: 53, 驶出车辆: 27 },
            { date: '10:00', 驶入车辆: 32, 驶出车辆: 81 },
            { date: '12:00', 驶入车辆: 23, 驶出车辆: 38 },
            { date: '14:00', 驶入车辆: 93, 驶出车辆: 27 },
            { date: '16:00', 驶入车辆: 53, 驶出车辆: 27 },
            { date: '18:00', 驶入车辆: 32, 驶出车辆: 81 },
            { date: '20:00', 驶入车辆: 23, 驶出车辆: 38 },
            { date: '22:00', 驶入车辆: 93, 驶出车辆: 27 },
            { date: '24:00', 驶入车辆: 53, 驶出车辆: 27 }
          ]
        },
        vChartOptions: {
          title: {
            text: '车辆进出趋势(昨天)'
          }
        }
      }
    };
  },
  vehicleFunnel (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        chartData: {
          columns: ['状态', '数值'],
          rows: [
            { 状态: '车辆警戒值', 数值: 900 },
            { 状态: '停车位总数', 数值: 600 },
            { 状态: '剩余停车位', 数值: 300 },
            { 状态: '历史平均值', 数值: 100 },
            { 状态: '平均值差值', 数值: 300 },
            { 状态: '总出校车辆', 数值: 100 }
          ]
        }
      }
    };
  },
  vehicleObjData (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        totalVehicle: {
          text: '总车辆(辆车)',
          data: 555
        },
        percentTotalVehicle: {
          text: '同比昨天',
          data: '-10%'
        },
        teacherVehicle: {
          text: '教职工车辆',
          data: 555
        },
        percentTeacherVehicle: {
          text: '同比昨天',
          data: '-10%'
        },
        schoolVehicle: {
          text: '校聘车辆',
          data: 555
        },
        percentSchoolVehicle: {
          text: '同比昨天',
          data: '-10%'
        },
        publicVehicle: {
          text: '公务车辆',
          data: 555
        },
        percentPublicVehicle: {
          text: '同比昨天',
          data: '-10%'
        },
        otherVehicle: {
          text: '其他车辆',
          data: '40/80'
        },
        percentOtherVehicle: {
          text: '同比昨天',
          data: '-10%'
        }
      }
    };
  }
};
