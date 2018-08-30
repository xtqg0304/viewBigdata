<template>
  <ve-sankey :data="chartData" :settings="chartSettings" :events="chartEvents" :legend="vChartOptions.legend" :title="vChartOptions.title" :toolbox="vChartOptions.toolbox" :colors="vChartOptions.colors"></ve-sankey>
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      links: [
        { source: '首页', target: '列表页a', value: 0.5 },
        { source: '首页', target: '列表页b', value: 0.5 },
        { source: '列表页a', target: '内容页a-1', value: 0.1 },
        { source: '列表页a', target: '内容页a-2', value: 0.4 },
        { source: '列表页b', target: '内容页b-1', value: 0.2 },
        { source: '列表页b', target: '内容页b-2', value: 0.3 }
      ],
      dataType: ['KMB', 'percent']
    }
    return {
      cityName: '',
      chartData: {
        columns: ['页面', '访问量'],
        rows: [
          { '页面': '首页', '访问量': 100000 },
          { '页面': '列表页a', '访问量': 20000 },
          { '页面': '列表页b', '访问量': 80000 },
          { '页面': '内容页a-1', '访问量': 10000 },
          { '页面': '内容页a-2', '访问量': 10000 },
          { '页面': '内容页b-1', '访问量': 60000 },
          { '页面': '内容页b-2', '访问量': 20000 }
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
