<template>
  <ve-gauge :loading="loading" :data-empty="dataEmpty" :title="vChartOptions.title" :width="width" :height="height" :data="chartData" :settings="chartSettings"></ve-gauge>
</template>

<script>
export default {
  props: ['useFieldData'],
  data () {
    this.chartSettings = {
      dataType: {
        '场地使用率': 'value'
      },
      seriesMap: {
        '场地使用率': {
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
      width: '100%',
      height: '100%',
      loading: false,
      dataEmpty: false,
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
      if (this.useFieldData.useFieldPercent) {
        this.vChartOptions.title.text = this.useFieldData.useFieldPercent.vChartOptions.title.text;
        this.chartData = this.useFieldData.useFieldPercent.chartData.rows.length ? Object.assign({}, this.useFieldData.useFieldPercent.chartData) : Object.assign({}, this.chartData);
        this.dataEmpty = !this.chartData.rows.length;
        this.loading = false;
      }
    }
  },
  created () {
    this.getData()
  },
  watch: {
    useFieldData (oldValue, newValue) {
      this.getData();
    }
  }
}
</script>
