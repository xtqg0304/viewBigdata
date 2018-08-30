<template>
  <ve-funnel :data="chartData" :settings="chartSettings" :legend="vChartOptions.legend" :title="vChartOptions.title" :toolbox="vChartOptions.toolbox" :colors="vChartOptions.colors"></ve-funnel>
</template>

<script>
export default {
  props: ['vehicleFunnelData'],
  data () {
    this.chartSettings = {
      ascending: false,
      useDefaultOrder: true,
      filterZero: true
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
          show: true,
          type: 'plain',
          orient: 'horizontal',
          left: 'center',
          bottom: 0,
          textStyle: {
            color: '#00aeff'
          },
          pageTextStyle: '#00aeff'
        },
        colors: [
          '#10c1d7', '#2087d7', '#fe2c54',
          '#7564fc', '#a74cf3', '#3e4382'
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
      if (this.vehicleFunnelData.chartData) {
        this.chartData = this.vehicleFunnelData.chartData.rows.length ? Object.assign({}, this.vehicleFunnelData.chartData) : Object.assign({}, this.chartData);
        this.dataEmpty = !this.chartData.rows.length;
        this.loading = false;
      }
    }
  },
  created () {
    this.getData()
  },
  watch: {
    vehicleFunnelData (oldValue, newValue) {
      this.getData();
    }
  }
}
</script>
