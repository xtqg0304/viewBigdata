<template>
  <ve-ring :loading="loading" :data-empty="dataEmpty" :width="width" :height="height" :data="chartData" :settings="chartSettings" :legend="vChartOptions.legend" :title="vChartOptions.title" :toolbox="vChartOptions.toolbox" :colors="vChartOptions.colors"></ve-ring>
</template>

<script>
export default {
  props: ['fieldRingData'],
  data () {
    this.chartSettings = {
      // dimension: '场地',
      // metrics: '场地数',
      roseType: 'radius',
      limitShowNum: 1,
      dataType: 'KMB',
      radius: [30, 80],
      offsetY: 80
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
          '#3e4382', '#7564fc', '#12bcd7', '#2087d7'
        ],
        grid: {
          show: false,
          top: 65,
          backgroundColor: 'transparent',
          containLabel: true,
          borderWidth: 0,
          borderColor: '#00aeff'
        },
        toolbox: {
          show: false,
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
      if (this.fieldRingData) {
        this.chartData = this.fieldRingData.chartData.rows.length ? Object.assign({}, this.fieldRingData.chartData) : Object.assign({}, this.chartData);
        this.dataEmpty = !this.chartData.rows.length;
        this.loading = false;
      }
    }
  },
  created () {
    // this.getData()
  },
  watch: {
    fieldRingData (oldValue, newValue) {
      this.getData();
    }
  }
}
</script>
