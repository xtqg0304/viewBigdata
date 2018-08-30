<template>
  <ve-gauge :loading="loading" :data-empty="dataEmpty" :title="vChartOptions.title" :width="width" :height="height" :data="chartData" :settings="chartSettings"></ve-gauge>
</template>

<script>
export default {
  props: ['vehicleGuageData'],
  data () {
    this.chartSettings = {
      dataType: {
        '空余车位预警': 'value'
      },
      seriesMap: {
        '空余车位预警': {
          min: 0,
          max: 2,
          radius: '100%',
          startAngle: 155,
          endAngle: 25,
          splitNumber: 5,
          axisLine: {
            lineStyle: {
              color: [[0.2, '#10c1d7'], [1, '#2087d7']],
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
                case '0': return '高';
                case '1': return '中';
                case '2': return '低';
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
        rows: [
        ]
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
      if (this.vehicleGuageData) {
        this.vChartOptions.title.text = this.vehicleGuageData.vChartOptions.title.text;
        this.chartData = this.vehicleGuageData.chartData.rows.length ? Object.assign({}, this.vehicleGuageData.chartData) : Object.assign({}, this.chartData);
        this.dataEmpty = !this.chartData.rows.length;
        this.loading = false;
      }
    }
  },
  created () {
    // this.getData()
  },
  watch: {
    vehicleGuageData (oldValue, newValue) {
      this.getData();
    }
  }
}
</script>
