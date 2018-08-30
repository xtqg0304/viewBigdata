<template>
  <ve-pie :data="chartData" :settings="chartSettings" :legend="vChartOptions.legend" :title="vChartOptions.title" :toolbox="vChartOptions.toolbox" :colors="vChartOptions.colors"></ve-pie>
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      roseType: 'radius',
      radius: 100,
      offsetY: 200
    }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
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
