<template>
  <ve-line :width="width" :height="height" :data="chartData" :loading="loading" :data-empty="dataEmpty" :grid="vChartOptions.grid" :tooltip="vChartOptions.tooltip" :legend="vChartOptions.legend" :xAxis="vChartOptions.xAxis" :yAxis="vChartOptions.yAxis" :title="vChartOptions.title" :toolbox="vChartOptions.toolbox" :colors="vChartOptions.colors">
  </ve-line>
</template>

<script>

export default {
  props: ['vehicleLineData'],
  data () {
    return {
      chartData: {
        columns: [],
        rows: []
      },
      loading: false,
      dataEmpty: false,
      width: '100%',
      height: '100%',
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
          '#ff2e56', '#2087d7'
        ],
        grid: {
          show: false,
          top: 65,
          backgroundColor: 'transparent',
          containLabel: true,
          borderWidth: 0,
          borderColor: '#00aeff'
        },
        xAxis: {
          show: true,
          type: 'category',
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
    getData1 () {
      this.loading = true;
      this.$httpApi.vehicleSysApi.chartData.vehicleLineData().then((res) => {
        if (res.data.status === 200) {
          this.vChartOptions.title.text = res.data.data.vChartOptions.title.text;
          this.chartData = res.data.data.chartData.rows.length ? Object.assign({}, res.data.data.chartData) : Object.assign({}, this.chartData);
          this.dataEmpty = !this.chartData.rows.length;
          this.loading = false;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    getData () {
      this.loading = true;
      if (this.vehicleLineData) {
        this.vChartOptions.title.text = this.vehicleLineData.vChartOptions.title.text;
        this.chartData = this.vehicleLineData.chartData.rows.length ? Object.assign({}, this.vehicleLineData.chartData) : Object.assign({}, this.chartData);
        this.dataEmpty = !this.chartData.rows.length;
        this.loading = false;
      }
    }
  },
  created () {
    // this.getData()
  },
  watch: {
    vehicleLineData (oldValue, newValue) {
      this.getData();
    }
  }
}
</script>
