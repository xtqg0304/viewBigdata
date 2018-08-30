<template>
  <ve-gauge :loading="loading" :data-empty="dataEmpty" :title="vChartOptions.title" :width="width" :height="height" :data="chartData" :settings="chartSettings"></ve-gauge>
</template>

<script>
export default {
  props: ['useFieldData'],
  data () {
    this.chartSettings = {
      dataType: {
        '其它状态': 'value'
      },
      seriesMap: {
        '其它状态': {
          min: 0,
          max: 100,
          radius: '100%',
          startAngle: 155,
          endAngle: 25,
          splitNumber: 5,
          axisLine: {
            lineStyle: {
              color: [[0.5, '#10c1d7'], [1, '#2087d7']],
              width: 15
            }
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'normal',
              color: '#26f3ff'
            },
            formatter: function (v) {
              switch (v + '') {
                case '0': return '0%';
                case '50': return '50%';
                case '100': return '100%';
              }
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          title: {
            show: false
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
          bottom: '20%',
          textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 16
          }
        }
      }
    }
  },
  methods: {
    getData () {
      this.loading = true;
      if (this.useFieldData.otherField) {
        this.vChartOptions.title.text = this.useFieldData.otherField.vChartOptions.title.text;
        this.chartData = this.useFieldData.otherField.chartData.rows.length ? Object.assign({}, this.useFieldData.otherField.chartData) : Object.assign({}, this.chartData);
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
