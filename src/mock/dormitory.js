export default {
  trendDormitoryLine (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        chartData: {
          columns: ['date', '正常人数', '异常人数'],
          rows: [
            { date: '1', 正常人数: 32, 异常人数: 81 },
            { date: '2', 正常人数: 23, 异常人数: 38 },
            { date: '3', 正常人数: 93, 异常人数: 27 },
            { date: '4', 正常人数: 53, 异常人数: 27 },
            { date: '5', 正常人数: 32, 异常人数: 81 },
            { date: '6', 正常人数: 23, 异常人数: 38 },
            { date: '7', 正常人数: 93, 异常人数: 27 },
            { date: '8', 正常人数: 53, 异常人数: 27 },
            { date: '9', 正常人数: 32, 异常人数: 81 },
            { date: '10', 正常人数: 23, 异常人数: 38 },
            { date: '11', 正常人数: 93, 异常人数: 27 },
            { date: '12', 正常人数: 53, 异常人数: 27 },
            { date: '13', 正常人数: 32, 异常人数: 81 },
            { date: '14', 正常人数: 23, 异常人数: 38 },
            { date: '15', 正常人数: 93, 异常人数: 27 }
          ]
        },
        vChartOptions: {
          title: {
            text: '宿舍进出趋势（上月）'
          }
        }
      }
    };
  },
  abnormalDormitoryBar (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        chartData: {
          columns: ['楼', '未按时进入', '未按时离开', '正常进出'],
          rows: [
            { 楼: '一号楼', 未按时进入: 1393, 未按时离开: 1093, 正常进出: 300 },
            { 楼: '二号楼', 未按时进入: 3530, 未按时离开: 3230, 正常进出: 150 },
            { 楼: '三号楼', 未按时进入: 2923, 未按时离开: 2623, 正常进出: 450 },
            { 楼: '四号楼', 未按时进入: 1723, 未按时离开: 1423, 正常进出: 360 }
          ]
        },
        vChartOptions: {
          title: {
            text: '宿舍进出异常'
          }
        }
      }
    };
  },
  dormitoryTableData (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        tableData: [
          {
            date: '2018-08-03',
            name: '王小虎',
            gradeClass: '1号楼202宿舍',
            reason: '晚归',
            tel: '188******2230'
          },
          {
            date: '2018-08-03',
            name: '王小虎',
            gradeClass: '1号楼202宿舍',
            reason: '晚归',
            tel: '188******2230'
          },
          {
            date: '2018-08-03',
            name: '王小虎',
            gradeClass: '1号楼202宿舍',
            reason: '晚归',
            tel: '188******2230'
          },
          {
            date: '2018-08-03',
            name: '王小虎',
            gradeClass: '1号楼202宿舍',
            reason: '晚归',
            tel: '188******2230'
          },
          {
            date: '2018-08-03',
            name: '王小虎',
            gradeClass: '1号楼202宿舍',
            reason: '晚归',
            tel: '188******2230'
          },
          {
            date: '2018-08-03',
            name: '王小虎',
            gradeClass: '1号楼202宿舍',
            reason: '晚归',
            tel: '188******2230'
          },
          {
            date: '2018-08-03',
            name: '王小虎',
            gradeClass: '1号楼202宿舍',
            reason: '晚归',
            tel: '188******2230'
          }
        ]
      }
    };
  }
};
