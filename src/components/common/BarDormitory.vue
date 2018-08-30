<template>
  <ve-histogram :width="width" :height="height" :data="chartData" :loading="loading" :data-empty="dataEmpty" :grid="vChartOptions.grid" :tooltip="vChartOptions.tooltip" :legend="vChartOptions.legend" :xAxis="vChartOptions.xAxis" :yAxis="vChartOptions.yAxis" :title="vChartOptions.title" :toolbox="vChartOptions.toolbox" :colors="vChartOptions.colors">
  </ve-histogram>
</template>

<script>

export default {
  props: ['dormitoryBarData'],
  data () {
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
          // subtext: '纯属虚构',
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
          bottom: 20,
          textStyle: {
            color: '#00aeff'
          },
          // data: this.chartData.columns,
          pageTextStyle: '#00aeff'
        },
        colors: [
          '#105bd8', '#0f94d9', '#780fce'
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
          data: ['1号楼', '2号楼', '3号楼', '4号楼'],
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
            show: true,
            lineStyle: {
              color: '#32436f',
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
            color: '#fff',
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
  },
  methods: {
    getData () {
      this.loading = true;
      if (this.dormitoryBarData.chartData) {
        this.vChartOptions.title.text = this.dormitoryBarData.vChartOptions.title.text;
        this.chartData = this.dormitoryBarData.chartData.rows.length ? Object.assign({}, this.dormitoryBarData.chartData) : Object.assign({}, this.chartData);
        this.dataEmpty = !this.chartData.rows.length;
        this.loading = false;
      }
    }
  },
  created () {
    this.getData()
  },
  watch: {
    dormitoryBarData (oldValue, newValue) {
      this.getData();
    }
  }
}
</script>
