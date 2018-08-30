<template>
  <ve-gauge :xAxis="vChartOptions.xAxis" :yAxis="vChartOptions.yAxis" :data="chartData" :settings="chartSettings" :events="chartEvents" :legend="vChartOptions.legend" :title="vChartOptions.title" :toolbox="vChartOptions.toolbox" :colors="vChartOptions.colors"></ve-gauge>
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      dataName: {
        '速度': 'km/h',
        '转速': 'x1000 r/min',
        '油表': 'gas'
      },
      seriesMap: {
        '速度': {
          min: 0,
          max: 220,
          splitNumber: 11,
          radius: '50%',
          axisLine: {
            lineStyle: {
              color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
              width: 3,
              shadowColor: '#00aeff',
              shadowBlur: 10
            }
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'bolder',
              color: '#00aeff',
              shadowColor: '#00aeff',
              shadowBlur: 10
            }
          },
          axisTick: {
            length: 15,
            lineStyle: {
              color: 'auto',
              shadowColor: '#00aeff',
              shadowBlur: 10
            }
          },
          splitLine: {
            length: 25,
            lineStyle: {
              width: 3,
              color: '#00aeff',
              shadowColor: '#00aeff',
              shadowBlur: 10
            }
          },
          pointer: {
            shadowColor: '#00aeff',
            shadowBlur: 5
          },
          title: {
            textStyle: {
              fontWeight: 'bolder',
              fontSize: 20,
              fontStyle: 'italic',
              color: '#00aeff',
              shadowColor: '#00aeff',
              shadowBlur: 10
            }
          },
          detail: {
            backgroundColor: 'rgba(30,144,255,0.8)',
            borderWidth: 1,
            borderColor: '#00aeff',
            shadowColor: '#00aeff',
            shadowBlur: 5,
            offsetCenter: [0, '50%'],
            textStyle: {
              fontWeight: 'bolder',
              color: '#00aeff'
            }
          }
        },
        '转速': {
          center: ['10%', '55%'],
          radius: '25%',
          min: 0,
          max: 7,
          endAngle: 45,
          splitNumber: 7,
          axisLine: {
            lineStyle: {
              color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
              width: 2,
              shadowColor: '#00aeff',
              shadowBlur: 10
            }
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'bolder',
              color: '#00aeff',
              shadowColor: '#00aeff',
              shadowBlur: 10
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'auto',
              shadowColor: '#00aeff',
              shadowBlur: 10
            }
          },
          splitLine: {
            length: 20,
            lineStyle: {
              width: 3,
              color: '#00aeff',
              shadowColor: '#00aeff',
              shadowBlur: 10
            }
          },
          pointer: {
            width: 5,
            shadowColor: '#00aeff',
            shadowBlur: 5
          },
          title: {
            offsetCenter: [0, '-30%'],
            textStyle: {
              fontWeight: 'bolder',
              fontStyle: 'italic',
              color: '#00aeff',
              shadowColor: '#00aeff',
              shadowBlur: 10
            }
          },
          detail: {
            borderColor: '#00aeff',
            shadowColor: '#00aeff',
            shadowBlur: 5,
            width: 80,
            height: 30,
            offsetCenter: [25, '20%'],
            textStyle: {
              fontWeight: 'bolder',
              color: '#00aeff'
            }
          }
        },
        '油表': {
          center: ['84%', '50%'],
          radius: '30%',
          min: 0,
          max: 2,
          startAngle: 135,
          endAngle: 45,
          splitNumber: 2,
          axisLine: {
            lineStyle: {
              color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
              width: 2,
              shadowColor: '#00aeff',
              shadowBlur: 10
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'auto',
              shadowColor: '#00aeff',
              shadowBlur: 10
            }
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'bolder',
              color: '#00aeff',
              shadowColor: '#00aeff',
              shadowBlur: 10
            },
            formatter: function (v) {
              switch (v + '') {
                case '0': return 'E';
                case '1': return 'Gas';
                case '2': return 'F';
              }
            }
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 3,
              color: '#00aeff',
              shadowColor: '#00aeff',
              shadowBlur: 10
            }
          },
          pointer: {
            width: 2,
            shadowColor: '#00aeff',
            shadowBlur: 5
          },
          title: {
            show: false
          },
          detail: {
            show: false
          }
        }
      }
    }
    return {
      chartData: {
        columns: ['type', 'value'],
        rows: [
          { type: '速度', value: 60 },
          { type: '转速', value: 80 },
          { type: '油表', value: 6000 }
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
  }
}
</script>
