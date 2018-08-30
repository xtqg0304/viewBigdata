export default {
  rateToScholl (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        chartData: {
          columns: ['type', 'value'],
          rows: [{ type: '实际到校率', value: 80 }]
        },
        vChartOptions: {
          title: {
            text: '实际到校率'
          }
        }
      }
    };
  },
  rateVehicle (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        chartData: {
          columns: ['type', 'value'],
          rows: [{ type: '空余车位预警', value: 1 }]
        },
        vChartOptions: {
          title: {
            text: '空余车位预警'
          }
        }
      }
    };
  },
  dormitoryLineData (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        chartData: {
          columns: ['date', '已进人数', '未进人数'],
          rows: [
            { date: '一号楼', 已进人数: 32, 未进人数: 981 },
            { date: '二号楼', 已进人数: 123, 未进人数: 438 },
            { date: '三号楼', 已进人数: 923, 未进人数: 527 },
            { date: '四号楼', 已进人数: 923, 未进人数: 527 }
          ]
        },
        vChartOptions: {
          title: {
            text: '宿舍进出信息'
          }
        }
      }
    };
  },
  vehicleLineData (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        chartData: {
          columns: ['date', '驶入车辆', '驶出车辆'],
          rows: [
            { date: '12:00', 驶入车辆: 32, 驶出车辆: 81 },
            { date: '14:00', 驶入车辆: 23, 驶出车辆: 38 },
            { date: '16:00', 驶入车辆: 93, 驶出车辆: 27 },
            { date: '18:00', 驶入车辆: 53, 驶出车辆: 27 }
          ]
        },
        vChartOptions: {
          title: {
            text: '出入车辆'
          }
        }
      }
    };
  },
  fieldRingData (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        chartData: {
          columns: ['场地', '场地数'],
          rows: [
            { 场地: '其它', 场地数: 13 },
            { 场地: '使用', 场地数: 22 },
            { 场地: '未使用', 场地数: 0 }
          ]
        }
      }
    };
  },
  percentToScholl (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        percentObjData: {
          total: {
            text: '目标到校人数：',
            data: 1000
          },
          real: {
            text: '实时到校人数：',
            data: 100
          },
          percent: {
            text: '同比昨天',
            data: '+10%'
          }
        }
      }
    };
  },
  percentToField (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        percentObjData: {
          available: {
            text: '今日可用场地：',
            data: 555
          },
          percent: {
            text: '同比昨天',
            data: '+10%'
          }
        }
      }
    };
  },
  percentToVehicle (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        percentObjData: {
          inVehicle: {
            text: '进车流(辆车)',
            data: 555
          },
          percentInVehicle: {
            text: '同比昨天',
            data: '-10%'
          },
          outVehicle: {
            text: '出车流(辆车)',
            data: 555
          },
          percentOutVehicle: {
            text: '同比昨天',
            data: '-10%'
          },
          retention: {
            text: '滞留车流(辆车)',
            data: 555
          },
          percentRetention: {
            text: '同比昨天',
            data: '-10%'
          },
          surplusPark: {
            text: '剩余车位：',
            data: 555
          },
          inOutVehicle: {
            text: '驶入/驶离：',
            data: '40/80'
          },
          percentInOutVehicle: {
            text: '同比昨天',
            data: '-10%'
          }
        }
      }
    };
  },
  doorTableData (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        tableData: [
          {
            date: '2016-05-04',
            name: '王小虎',
            gradeClass: '五年级二班',
            reason: '请假'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            gradeClass: '五年级二班',
            reason: '请假'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            gradeClass: '五年级二班',
            reason: '请假'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            gradeClass: '五年级二班',
            reason: '请假'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            gradeClass: '五年级二班',
            reason: '请假'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            gradeClass: '五年级二班',
            reason: '请假'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            gradeClass: '五年级二班',
            reason: '请假'
          }
        ]
      }
    };
  },
  getSystems (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        sysList: [
          {
            icon: 'http://10.18.73.83:18888/statics/images/ordericon.png',
            serverLink: 'http://10.18.73.96:8080/admin/orderindex.do',
            serverName: '场地预约',
            sysTag: 'SiteReservation',
            authority: 'false'
          },
          {
            icon: 'http://10.18.73.83:8080/resources/images/person.png',
            serverLink: 'http://127.0.0.1:80/basic/index',
            serverName: '基础信息',
            sysTag: 'BASIC_SYSTEM',
            authority: 'false'
          }
        ]
      }
    };
  }
};
