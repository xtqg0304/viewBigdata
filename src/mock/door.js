export default {
  attendanceDoorLine (config) {
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
            text: '考勤趋势（上月）'
          }
        }
      }
    };
  },
  abnormalDormitoryPie (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        chartData: {
          columns: ['类型', '学生人数'],
          rows: [
            { 类型: '请假', 学生人数: 30 },
            { 类型: '迟到', 学生人数: 40 },
            { 类型: '早退', 学生人数: 50 },
            { 类型: '旷课', 学生人数: 60 },
            { 类型: '其他', 学生人数: 30 }
          ]
        }
      }
    };
  },
  trendDoorHistogram (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        chartData: {
          columns: ['date', '正常学生', '异常学生'],
          rows: [
            { date: '第一周', 正常学生: 1393, 异常学生: 1093 },
            { date: '第二周', 正常学生: 3530, 异常学生: 3230 },
            { date: '第三周', 正常学生: 2923, 异常学生: 2623 },
            { date: '第四周', 正常学生: 1723, 异常学生: 1423 },
            { date: '第五周', 正常学生: 3792, 异常学生: 3492 }
          ]
        },
        vChartOptions: {
          title: {
            text: '上个月考勤'
          },
          xAxis: {
            data: ['第一周', '第二周', '第三周', '第四周', '第五周']
          }
        }
      }
    };
  },
  abnormalDoorTable (config) {
    console.log(config);
    return {
      status: 200,
      message: '',
      data: {
        tableData: [
          {
            sort: '1',
            name: '王小虎',
            gradeClass: '1号楼202宿舍',
            reason: '晚归',
            tel: '188******2230'
          },
          {
            sort: '2',
            name: '王小虎',
            gradeClass: '1号楼202宿舍',
            reason: '晚归',
            tel: '188******2230'
          },
          {
            sort: '3',
            name: '王小虎',
            gradeClass: '1号楼202宿舍',
            reason: '晚归',
            tel: '188******2230'
          },
          {
            sort: '4',
            name: '王小虎',
            gradeClass: '1号楼202宿舍',
            reason: '晚归',
            tel: '188******2230'
          },
          {
            sort: '5',
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
