<template>
  <ve-waterfall :xAxis="vChartOptions.xAxis" :yAxis="vChartOptions.yAxis" :data="chartData" :settings="chartSettings" :legend="vChartOptions.legend" :title="vChartOptions.title" :toolbox="vChartOptions.toolbox" :colors="vChartOptions.colors"></ve-waterfall>
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      totalNum: 24,
      totalName: '总时间',
      remainName: '剩余时间'
    }
    return {
      chartData: {
        columns: ['活动', '时间'],
        rows: [
          { '活动': '吃饭', '时间': 4 },
          { '活动': '睡觉', '时间': 10 },
          { '活动': '打豆豆', '时间': 5 }
        ]
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
          show: false,
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
          name: '',
          data: ['总计', '吃饭', '睡觉', '打豆豆'],
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
