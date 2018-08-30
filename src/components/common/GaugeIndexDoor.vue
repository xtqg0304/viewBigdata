<template>
  <ve-gauge :loading="loading" :data-empty="dataEmpty" :title="vChartOptions.title" :width="width" :height="height" :data="chartData" :settings="chartSettings"></ve-gauge>
</template>

<script>
export default {
  props: ['doorGuageData'],
  data () {
    this.chartSettings = {
      dataType: {
        '实际到校率': 'value'
      },
      seriesMap: {
        '实际到校率': {
          min: 0,
          max: 100,
          radius: '100%',
          axisLine: {
            lineStyle: {
              color: [[0.2, '#10c1d7'], [0.8, '#2087d7'], [1, '#ff2e56']],
              width: 15
            }
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'normal',
              color: '#26f3ff'
            }
          },
          axisTick: {
            length: 5,
            lineStyle: {
              color: '#12224c'
            }
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 2,
              color: '#12224c'
            }
          }
        }
      }
    }
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
          left: 'center',
          top: 'bottom',
          textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 20
          }
        }
      }
    }
  },
  methods: {
    getData () {
      this.loading = true;
      if (this.doorGuageData) {
        this.vChartOptions.title.text = this.doorGuageData.vChartOptions.title.text;
        this.chartData = this.doorGuageData.chartData.rows.length ? Object.assign({}, this.doorGuageData.chartData) : Object.assign({}, this.chartData);
        this.dataEmpty = !this.chartData.rows.length;
        this.loading = false;
      }
    }
  },
  created () {
    // this.getData()
  },
  watch: {
    doorGuageData (oldValue, newValue) {
      this.getData();
    }
  }
}
</script>
