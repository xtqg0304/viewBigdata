<template>
  <ve-heatmap :data="chartData" :settings="chartSettings" :events="chartEvents" :legend="vChartOptions.legend" :title="vChartOptions.title" :toolbox="vChartOptions.toolbox" :colors="vChartOptions.colors"></ve-heatmap>
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      position: 'china',
      type: 'map',
      geo: {
        label: {
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#323c48',
            borderColor: '#111'
          },
          emphasis: {
            areaColor: '#2a333d'
          }
        }
      }
    }
    return {
      chartData: {
        columns: ['lat', 'lng', '人数'],
        rows: [
          { 'lat': 115.892151, 'lng': 28.676493, '人数': 1000 },
          { 'lat': 117.000923, 'lng': 36.675807, '人数': 400 },
          { 'lat': 113.665412, 'lng': 34.757975, '人数': 800 },
          { 'lat': 114.298572, 'lng': 30.584355, '人数': 200 },
          { 'lat': 112.982279, 'lng': 28.19409, '人数': 100 },
          { 'lat': 113.280637, 'lng': 23.125178, '人数': 300 },
          { 'lat': 110.33119, 'lng': 20.031971, '人数': 800 },
          { 'lat': 104.065735, 'lng': 30.659462, '人数': 700 },
          { 'lat': 108.948024, 'lng': 34.263161, '人数': 300 },
          { 'lat': 103.823557, 'lng': 36.058039, '人数': 500 }
        ]
      },
      vChartOptions: {// 设置图标的基本样式
        title: {
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
          bottom: 20,
          textStyle: {
            color: '#00aeff'
          },
          pageTextStyle: '#00aeff'
        },
        colors: [
          '#c23531', '#61a0a8', '#6e7074',
          '#d48265', '#91c7ae', '#749f83',
          '#ca8622', '#bda29a', '#2f4554',
          '#546570', '#c4ccd3'
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
  }
}
</script>
