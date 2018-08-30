<template>
  <div>
    <button @click="getData">get Data</button>
    <ve-histogram :series="vChartOptions.series" :data="chartData" :loading="loading" :data-empty="dataEmpty" :grid="vChartOptions.grid" :tooltip="vChartOptions.tooltip" :legend="vChartOptions.legend" :xAxis="vChartOptions.xAxis" :yAxis="vChartOptions.yAxis" :title="vChartOptions.title" :toolbox="vChartOptions.toolbox" :colors="vChartOptions.colors">
    </ve-histogram>
  </div>
</template>

<script>

export default {

  data () {
    this.chartSettings = {
      metrics: ['访问用户', '下单用户', '下单率'],
      dimension: ['日期'],
      xAxisType: 'category',
      axisSite: { right: ['下单率'], left: ['访问用户', '下单用户'] },
      yAxisType: ['KMB', 'percent'],
      yAxisName: ['数值', '比率']
    }
    return {
      chartData: {
        columns: [],
        rows: []
      },
      loading: false,
      dataEmpty: false,
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
        yAxis: [{
          show: true,
          type: 'value',
          name: '金额',
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
            formatter: '{value} ml'
          }
        },
        {
          show: true,
          type: 'value',
          name: '下单率',
          position: 'right',
          nameLocation: 'end',
          min: 0,
          max: 1,
          interval: 0.1,
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
            formatter: '{value} %'
          }
        }
        ],
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
        },
        series: [{
          name: '访问用户',
          type: 'bar',
          yAxisIndex: 0,
          data: [1393, 3530, 2923, 1723, 3792, 4593]
        },
        {
          name: '下单用户',
          type: 'bar',
          yAxisIndex: 0,
          data: [1093, 3230, 2623, 3492, 3492, 4293]
        },
        {
          name: '下单率',
          type: 'line',
          yAxisIndex: 1,
          data: [0.32, 0.26, 0.76, 0.49, 0.323, 0.78]
        }
        ]
      }

    }
  },
  methods: {
    getData () {
      this.loading = true
      // ajax get data ....
      setTimeout(() => {
        const DATA_FROM_BACKEND = {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1月1日', '访问用户': 1393, '下单用户': 1093 },
            { '日期': '1月2日', '访问用户': 3530, '下单用户': 3230 },
            { '日期': '1月3日', '访问用户': 2923, '下单用户': 2623 },
            { '日期': '1月4日', '访问用户': 1723, '下单用户': 1423 },
            { '日期': '1月5日', '访问用户': 3792, '下单用户': 3492 },
            { '日期': '1月6日', '访问用户': 4593, '下单用户': 4293 }
          ]
        };
        const EMPTY_DATA = {
          columns: [],
          rows: []
        };
        this.chartData = this.chartData.rows.length
          ? EMPTY_DATA
          : DATA_FROM_BACKEND
        this.dataEmpty = !this.chartData.rows.length
        this.loading = false
      }, 1000)
    }
  },
  created () {
    this.getData()
  }
}
</script>
