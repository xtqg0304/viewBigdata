<template>
  <ve-scatter :xAxis="vChartOptions.xAxis" :yAxis="vChartOptions.yAxis" :data="chartData" :settings="chartSettings" :events="chartEvents" :legend="vChartOptions.legend" :title="vChartOptions.title" :toolbox="vChartOptions.toolbox" :colors="vChartOptions.colors"></ve-scatter>
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      legendName: {
        '上海': '上海1'
      },
      labelMap: {
        '访问用户': 'PV'
      },
      symbol: 'rect',
      symbolSizeMax: 30,
      symbolRotate: 45,
      symbolOffset: [10, 10],
      // tooltipTrigger: 'axis',
      scale: true,
      max: 10000
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '年龄'],
        rows: {
          '上海': [
            { '日期': '1/1', '访问用户': 1230, '年龄': 3, '下单用户': 1244 },
            { '日期': '1/2', '访问用户': 1223, '年龄': 6, '下单用户': 2344 },
            { '日期': '1/3', '访问用户': 7123, '年龄': 9, '下单用户': 3245 },
            { '日期': '1/4', '访问用户': 4123, '年龄': 12, '下单用户': 4355 },
            { '日期': '1/5', '访问用户': 3123, '年龄': 15, '下单用户': 4564 },
            { '日期': '1/6', '访问用户': 2323, '年龄': 20, '下单用户': 6537 }
          ],
          '北京': [
            { '日期': '1/1', '访问用户': 1230, '年龄': 3, '下单用户': 1244 },
            { '日期': '1/2', '访问用户': 1273, '年龄': 6, '下单用户': 2344 },
            { '日期': '1/3', '访问用户': 3123, '年龄': 15, '下单用户': 4564 },
            { '日期': '1/4', '访问用户': 2123, '年龄': 9, '下单用户': 3245 },
            { '日期': '1/5', '访问用户': 4103, '年龄': 12, '下单用户': 4355 },
            { '日期': '1/6', '访问用户': 7123, '年龄': 10, '下单用户': 3567 }
          ],
          '广州': [
            { '日期': '1/1', '访问用户': 1230, '年龄': 3, '下单用户': 1244 },
            { '日期': '1/2', '访问用户': 1223, '年龄': 6, '下单用户': 2344 },
            { '日期': '1/3', '访问用户': 2123, '年龄': 30, '下单用户': 3245 },
            { '日期': '1/5', '访问用户': 4123, '年龄': 12, '下单用户': 4355 },
            { '日期': '1/4', '访问用户': 5123, '年龄': 18, '下单用户': 4564 },
            { '日期': '1/6', '访问用户': 3843, '年龄': 30, '下单用户': 4850 }
          ]
        }
      },
      vChartOptions: {// 设置图标的基本样式
        title: {
          text: '表格数据',
          subtext: '纯属虚构',
          left: 'center',
          textStyle: {
            color: '#00aeff',
            fontWeight: 'normal',
            fontSize: 20
          }
        },
        legend: {
          show: true,
          type: 'plain',
          orient: 'horizontal',
          bottom: 20,
          textStyle: {
            color: '#00aeff'
          },
          pageTextStyle: '#00aeff'
        },
        colors: [
          '#c23531', '#61a0a8', '#6e7074',
          '#d48265', '#91c7ae', '#749f83',
          '#ca8622', '#bda29a', '#2f4554',
          '#546570', '#c4ccd3'
        ],
        grid: {
          show: true,
          top: 65,
          backgroundColor: 'transparent',
          containLabel: true,
          borderWidth: 0,
          borderColor: '#00aeff'
        },
        xAxis: {
          show: true,
          type: 'category',
          data: ['1/1', '1/2', '1/3', '1/4', '1/5', '1/6'],
          name: '',
          position: 'bottom',
          nameLocation: 'center',
          nameGap: 45,
          nameRotate: null,
          inverse: false,
          nameTextStyle: {
            color: '#00aeff',
            fontSize: 14
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
            length: 1,
            inside: false,
            lineStyle: {
              color: '#00aeff',
              width: 1,
              type: 'solid'
            }
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            onZero: true,
            lineStyle: {
              color: '#00aeff',
              width: 1
            }
          },
          axisLabel: {
            show: true,
            inside: false
          }
        },
        yAxis: {
          show: true,
          type: 'value',
          name: '',
          position: 'left',
          nameLocation: 'end',
          nameGap: 25,
          nameRotate: null,
          inverse: false,
          nameTextStyle: {
            color: '#00aeff',
            fontSize: 14
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
            length: 1,
            inside: false,
            lineStyle: {
              color: '#00aeff',
              width: 1,
              type: 'solid'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#2f4554',
              width: 1,
              type: 'solid',
              opacity: 0.8
            }
          },
          axisLine: {
            show: true,
            onZero: true,
            lineStyle: {
              color: '#00aeff',
              width: 1
            }
          },
          axisLabel: {
            show: true,
            inside: false,
            formatter: '{value} '
          }
        },
        toolbox: {
          show: true,
          orient: 'horizontal',
          feature: {
            saveAsImage: { show: true, iconStyle: { borderColor: '#fff' } }
          },
          color: '#00aeff'
        }
      }
    }
  }
}
</script>
