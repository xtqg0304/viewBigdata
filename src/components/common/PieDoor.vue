<template>
  <ve-pie :data="chartData" :settings="chartSettings" :legend="vChartOptions.legend" :title="vChartOptions.title" :toolbox="vChartOptions.toolbox" :colors="vChartOptions.colors"></ve-pie>
</template>

<script>
export default {
  props: ['abnormalDormitoryPieData'],
  data () {
    this.chartSettings = {
      roseType: 'radius',
      radius: 100,
      offsetY: 200
    }
    return {
      chartData: {
        columns: [],
        rows: []
      },
      vChartOptions: {// 设置图标的基本样式
        title: {
          show: false,
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
          top: 20,
          textStyle: {
            color: '#00aeff'
          },
          // data: this.chartData.columns,
          pageTextStyle: '#00aeff'
        },
        colors: [
          '#2289d6', '#5750da', '#5821d6',
          '#2158d6', '#7941ac'
        ],
        grid: {
          show: true,
          top: 65,
          backgroundColor: 'transparent',
          containLabel: true,
          borderWidth: 0,
          borderColor: '#00aeff'
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
      if (this.abnormalDormitoryPieData.chartData) {
        this.chartData = this.abnormalDormitoryPieData.chartData.rows.length ? Object.assign({}, this.abnormalDormitoryPieData.chartData) : Object.assign({}, this.chartData);
        this.dataEmpty = !this.chartData.rows.length;
        this.loading = false;
      }
    }
  },
  created () {
    this.getData()
  },
  watch: {
    abnormalDormitoryPieData (oldValue, newValue) {
      this.getData();
    }
  }
}
</script>
