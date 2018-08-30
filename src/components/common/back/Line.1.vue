<template>
  <ve-line :xAxis="xAxis" :title="title" :grid="grid" :extend="extend" :settings="chartSettings" :toolbox="toolbox" :data="chartData" :colors="colors" :mark-line="markLine" :mark-point="markPoint">
  </ve-line>
</template>

<script>
export default {
  data () {
    // 设置标题
    this.title = {
      id: '',
      show: true,
      text: 'XXX表格',
      link: '',
      target: 'blank',
      textAlign: 'left',
      textStyle: {
        color: '#fff'
        //   fontStyle: 'normal',
        //   fontWeight: 'normal',
        //   fontFamily: 'sans-serif',
        //   fontSize: 12,
        //   align: 'center',
        //   verticalAlign: 'top',
        //   lineHeight: 56,
        //   width: 'auto',
        //   height: 'auto',
        //   textBorderColor: 'transparent',
        //   textBorderWidth: 0,
        //   textShadowColor: 'transparent',
        //   textShadowBlur: 0,
        //   textShadowOffsetX: 0,
        //   textShadowOffsetY: 0,
        //   rich: {
        //     a: {
        //       color: 'red',
        //       lineHeight: 10
        //     },
        //     x: {
        //       fontSize: 18,
        //       fontFamily: 'Microsoft YaHei',
        //       borderColor: '#449933',
        //       borderRadius: 4
        //     }
        //   }

      },
      subtext: '121212',
      sublink: '',
      subtarget: 'blank',
      // subtextStyle: {// 与textStyle一样

      // },
      padding: 5,
      itemGap: 10,
      zlevel: 0,
      // left: 'auto',
      // top: 'auto',
      // right: 'auto',
      // bottom: 'auto',
      backgroundColor: 'transparent',
      borderColor: '#ccc',
      borderWidth: 0,
      borderRadius: 0,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowBlur: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0

    }
    // 设置坐标轴
    this.xAxis = {
      name: '日期',
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        lineStyle: {
          color: '#fff'
        }
      }
    }
    // 设置坐标轴
    this.yAxis = {
      name: 'calcium',
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        lineStyle: {
          color: '#fff'
        }
      }
    }
    // 设置图表容器样式
    this.grid = {
      show: true,
      top: 50,
      left: 10,
      backgroundColor: 'transparent'
    }
    // 设置图表标线
    this.markLine = {
      data: [
        {
          name: '平均线',
          type: 'average'
        }
      ]
    }
    // 设置图表标点
    this.markPoint = {
      data: [
        {
          name: '最大值',
          type: 'max'
        }
      ]
    }
    // 设置视觉映射组件
    this.visualMap = [
      {
        type: 'piecewise',
        splitNumber: 5,
        min: 0,
        max: 60,
        right: 0,
        top: '50%'
      }
    ]
    // 设置区域缩放组件
    this.dataZoom = [
      {
        type: 'slider',
        start: 0,
        end: 20
      }
    ]
    // 设置工具箱
    this.toolbox = {
      feature: {
        magicType: { type: ['line', 'bar'] },
        saveAsImage: {}
      }
    }
    // 修改颜色列表
    this.colors = ['#c23531', '#2f4554', '#61a0a8',
      '#d48265', '#91c7ae', '#749f83',
      '#ca8622', '#bda29a', '#6e7074',
      '#546570', '#c4ccd3']
    // 设置显示的指标维度
    this.chartSettings = {
      metrics: ['成本', '利润', '利率'],
      dimension: ['日期'],
      axisSite: { right: ['利率'], lineStyle: { color: '#fff' }, textStyle: { color: '#fff' } },
      yAxisType: ['normal', 'percent'],
      yAxisName: ['数值', '利率'],
      xAxisType: 'category',
      labelMap: {
        '成本': '成本价',
        '利润': '盈利',
        '利率': '盈利率'
      },
      legendName: {
        '成本': '总成本',
        '利润': '盈利',
        '利率': '盈利率'
      }
    }
    // 横坐标倾斜
    this.extend = {
      'xAxis.0.axisLabel.rotate': 45
    }
    return {
      chartData: {
        columns: ['日期', '成本', '利润', '利率'],
        rows: [
          { '日期': '1月1日', '成本': 15, '利润': 12, '利率': 0.44 },
          { '日期': '1月2日', '成本': 12, '利润': 25, '利率': 0.68 },
          { '日期': '1月3日', '成本': 21, '利润': 10, '利率': 0.32 },
          { '日期': '1月4日', '成本': 41, '利润': 32, '利率': 0.438 },
          { '日期': '1月5日', '成本': 31, '利润': 30, '利率': 0.491 },
          { '日期': '1月6日', '成本': 71, '利润': 55, '利率': 0.436 }
        ]
      }
    }
  }
}
</script>
