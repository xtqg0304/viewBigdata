<template>
  <ve-histogram :loading="loading" :data-empty="dataEmpty" :title="vChartOptions.title" :legend="vChartOptions.legend" :colors="vChartOptions.colors" :yAxis="vChartOptions.yAxis" :xAxis="vChartOptions.xAxis" :width="width" :height="height" :data="chartData" :settings="chartSettings"></ve-histogram>
</template>

<script>
export default {
  props: ['trendDoorHistogramData'],
  data () {
    this.chartSettings = {
      stack: { '学生': ['正常学生', '异常学生'] }
    }
    return {
      chartData: {
        columns: [],
        rows: []
      },
      width: '100%',
      height: '100%',
      loading: false,
      dataEmpty: false,
      vChartOptions: {// 设置图标的基本样式
        title: {
          text: '',
          left: 'left',
          textStyle: {
            color: '#00aeff',
            fontWeight: 'normal',
            fontSize: 20
          }
        },
        legend: {
          type: 'plain',
          orient: 'horizontal',
          bottom: 10,
          left: 'center',
          textStyle: {
            color: '#00aeff'
          },
          // data: this.chartData.columns,
          pageTextStyle: '#00aeff'
        },
        colors: [
          '#0fc2d6', '#2087d7'
        ],
        xAxis: {
          show: true,
          type: 'category',
          data: [],
          inverse: false,
          axisTick: {
            show: true,
            alignWithLabel: true,
            length: 1,
            inside: false,
            lineStyle: {
              color: '#448bcb',
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
              color: '#448bcb',
              width: 1
            }
          },
          axisLabel: {
            show: true,
            inside: false,
            color: '#fff'
          }
        },
        yAxis: {
          show: true,
          type: 'value',
          nameRotate: null,
          inverse: false,
          nameTextStyle: {
            color: '#448bcb',
            fontSize: 14
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
            length: 1,
            inside: false,
            lineStyle: {
              color: '#448bcb',
              width: 1,
              type: 'solid'
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#448bcb',
              width: 1,
              type: 'solid',
              opacity: 0.8
            }
          },
          axisLine: {
            show: true,
            onZero: true,
            lineStyle: {
              color: '#448bcb',
              width: 1
            }
          },
          axisLabel: {
            show: true,
            inside: false,
            color: '#fff'
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
  },
  methods: {
    getData () {
      this.loading = true;
      if (this.trendDoorHistogramData.chartData) {
        this.vChartOptions.title.text = this.trendDoorHistogramData.vChartOptions.title.text;
        this.vChartOptions.xAxis.data = this.trendDoorHistogramData.vChartOptions.xAxis.data;
        this.chartData = this.trendDoorHistogramData.chartData.rows.length ? Object.assign({}, this.trendDoorHistogramData.chartData) : Object.assign({}, this.chartData);
        this.dataEmpty = !this.chartData.rows.length;
        this.loading = false;
      }
    }
  },
  created () {
    // this.getData()
  },
  watch: {
    trendDoorHistogramData (oldValue, newValue) {
      this.getData();
    }
  }
}
</script>
