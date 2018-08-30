export default {
  useFieldData (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        useFieldPercent: {
          chartData: {
            columns: ['type', 'value'],
            rows: [{ type: '场地使用率', value: 80 }]
          },
          vChartOptions: {
            title: {
              text: '场地使用率'
            }
          }
        },
        useField: {
          chartData: {
            columns: ['type', 'value'],
            rows: [{ type: '使用场地', value: 60 }]
          },
          vChartOptions: {
            title: {
              text: '使用场地'
            }
          }
        },
        orderField: {
          chartData: {
            columns: ['type', 'value'],
            rows: [{ type: '预约场地', value: 60 }]
          },
          vChartOptions: {
            title: {
              text: '预约场地'
            }
          }
        },
        otherField: {
          chartData: {
            columns: ['type', 'value'],
            rows: [{ type: '其它状态', value: 60 }]
          },
          vChartOptions: {
            title: {
              text: '其它状态'
            }
          }
        }
      }
    };
  },
  useTrendFieldLine (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        chartData: {
          columns: ['date', '场地总数', '使用率'],
          rows: [
            { date: '周1', 场地总数: 0, 使用率: 1 },
            { date: '周2', 场地总数: 0, 使用率: 1 },
            { date: '周3', 场地总数: 0, 使用率: 1 },
            { date: '周4', 场地总数: 0, 使用率: 1 },
            { date: '周5', 场地总数: 0, 使用率: 1 },
            { date: '周6', 场地总数: 0, 使用率: 1 },
            { date: '周7', 场地总数: 0, 使用率: 1 }
          ]
        },
        vChartOptions: {
          title: {
            text: '使用趋势（上周）'
          }
        }
      }
    };
  },
  orderTrendFieldLine (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        chartData: {
          columns: ['date', '使用场地数', '预约场地数', '其它状态'],
          rows: [
            { date: '周一', 使用场地数: 32, 预约场地数: 981, 其它状态: 981 },
            { date: '周二', 使用场地数: 123, 预约场地数: 438, 其它状态: 581 },
            { date: '周三', 使用场地数: 923, 预约场地数: 527, 其它状态: 681 },
            { date: '周四', 使用场地数: 923, 预约场地数: 527, 其它状态: 381 },
            { date: '周五', 使用场地数: 123, 预约场地数: 438, 其它状态: 181 },
            { date: '周六', 使用场地数: 923, 预约场地数: 527, 其它状态: 481 },
            { date: '周日', 使用场地数: 923, 预约场地数: 527, 其它状态: 281 }
          ]
        },
        vChartOptions: {
          title: {
            text: '预约趋势（上周）'
          }
        }
      }
    };
  }
};
