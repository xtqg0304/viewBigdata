<template>
  <ve-tree :tooltip-formatter="tooltipFormatter" :extend="chartExtend" :xAxis="vChartOptions.xAxis" :yAxis="vChartOptions.yAxis" :data="chartData" :settings="chartSettings" :events="chartEvents" :legend="vChartOptions.legend" :title="vChartOptions.title" :toolbox="vChartOptions.toolbox" :colors="vChartOptions.colors"></ve-tree>
</template>

<script>
const treeData = {
  name: 'f',
  value: 1,
  link: 'https://ele.me',
  children: [
    {
      name: 'a',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'a-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'a-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'b',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'b-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'b-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'c',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'c-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'c-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'd',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'd-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'd-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    }
  ]
}
export default {
  data () {
    this.chartSettings = {
      seriesMap: {
        tree1: {
          top: '5%',
          left: '7%',
          bottom: '2%',
          right: '60%',
          layout: 'radial'
        },
        tree2: {
          top: '20%',
          left: '60%',
          bottom: '22%',
          right: '18%',
          orient: 'vertical'
        }
      }
    }
    this.chartExtend = {
      tooltip: {
        alwaysShowContent: true
      }
    }
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [treeData]
          },
          {
            name: 'tree2',
            value: [treeData]
          }
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
          show: false,
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
  },
  methods: {
    tooltipFormatter (v) {
      return [
        `${v.seriesName}: ${v.data.value}`,
        `<a target="_blank" href="${v.data.link}" style="color:#fff">${v.data.link}</a>`
      ].join('<br>')
    }
  }
}
</script>
