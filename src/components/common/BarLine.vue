<template>
  <ve-histogram :width="width" :height="height" :data="chartData" :settings="chartSettings" :grid="vChartOptions.grid" :tooltip="vChartOptions.tooltip" :legend="vChartOptions.legend" :xAxis="vChartOptions.xAxis" :yAxis="vChartOptions.yAxis" :title="vChartOptions.title" :toolbox="vChartOptions.toolbox" :colors="vChartOptions.colors"></ve-histogram>
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      showLine: ['下单用户']
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      width: '100%',
      height: '100%',
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
          type: 'plain',
          orient: 'horizontal',
          bottom: 20,
          textStyle: {
            color: '#00aeff'
          },
          // data: this.chartData.columns,
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
          data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日'],
          name: '日期',
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
            inside: false,
            rotate: 45
          },
          axisPointer: {
            type: 'shadow'
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
        visualMap: {
          min: 0,
          max: 100,
          splitNumber: 5,
          color: ['#d94e5d', '#eac736', '#50a3ba'],
          textStyle: {
            color: '#00aeff'
          },
          right: 0,
          bottom: 0
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            lineStyle: {
              color: '#ccc',
              type: 'dashed',
              width: 1,
              opacity: 0.8

            }
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
