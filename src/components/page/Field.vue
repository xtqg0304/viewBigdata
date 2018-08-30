<template>
  <div class="dataVisual-wrap">
    <header-component></header-component>
    <draggable v-model="dragElement" @start="drag=true" @end="drag=false">
      <ul :class="ele.className" v-for="ele in dragElement" :key="ele.id">

        <li class="dataVisual-item " v-for="itemLi in ele.children" :key="itemLi.id">
          <h3 v-if="ele.id==1&&itemLi.id==1">
            <i class="el-icon-menu"></i>场地预约分析</h3>
          <h3 v-if="ele.id==2&&itemLi.id==1">
            场地数据趋势
            <i class="el-icon-menu"></i>
          </h3>
          <div class="dataVisual-item-t numbox ">
            <!-- <div class="line m "></div> -->
            <div class="line x l t "></div>
            <div class="line x r t "></div>
            <div class="line y l t "></div>
            <div class="line y r t "></div>
            <div class="line x l b "></div>
            <div class="line x r b "></div>
            <div class="line y l b "></div>
            <div class="line y r b "></div>
            <div class="dataVisual-bgImg numb ">
              <div class="main-box " style="width:98%;height:98%;margin:1%; ">
                <div class="main-box-content " style="width:100%;min-height:300px;height:100%; ">

                  <div class="field-gauge-box" v-if="ele.id==1&&itemLi.id==1">
                    <gauge-component style="height:45%;margin-top:5%" :useFieldData="useFieldData"></gauge-component>
                    <ring-left-component style="height:45%;width:33%;float:left;margin-top:5%" :useFieldData="useFieldData"></ring-left-component>
                    <ring-center-component style="height:45%;width:33%;float:left;margin-top:5%" :useFieldData="useFieldData"></ring-center-component>
                    <ring-right-component style="height:45%;width:33%;float:left;margin-top:5%" :useFieldData="useFieldData"></ring-right-component>

                  </div>
                  <div class="field-line-box" v-if="ele.id==2&&itemLi.id==1">
                    <line-component :useTrendFieldLineData="useTrendFieldLineData"></line-component>
                  </div>
                  <div class="field-line-box" v-if="ele.id==2&&itemLi.id==2">
                    <line-trend-component :orderTrendFieldLineData="orderTrendFieldLineData"></line-trend-component>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </li>
      </ul>

    </draggable>

  </div>
</template>
<script>
import draggable from 'vuedraggable'
import headerComponent from '../common/Header.vue'
import gaugeComponent from '../common/GaugeField.vue'
import ringLeftComponent from '../common/RingLeftField.vue'
import ringCenterComponent from '../common/RingCenterField.vue'
import ringRightComponent from '../common/RingRightField.vue'
import lineComponent from '../common/LineField.vue'
import lineTrendComponent from '../common/LineTrendField.vue'
export default {
  name: 'Index',
  data () {
    return {
      dragElement: [{
        id: '1',
        className: 'dataVisual-con dataVisual-con-left',
        children: [{ id: 1 }]
      }, {
        id: '2',
        className: 'dataVisual-con dataVisual-con-right',
        children: [{ id: 1 }, { id: 2 }]
      }],
      useFieldData: {},
      useTrendFieldLineData: {},
      orderTrendFieldLineData: {},
      timer: null
    }
  },
  components: {
    draggable, headerComponent, gaugeComponent, ringLeftComponent, ringCenterComponent, ringRightComponent, lineComponent, lineTrendComponent
  },
  methods: {
    getUseFieldData () {
      return new Promise((resolve, reject) => {
        this.$httpApi.fieldSysApi.chartData.useField().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getUseTrendFieldLineData () {
      return new Promise((resolve, reject) => {
        this.$httpApi.fieldSysApi.chartData.useTrendFieldLine().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getOrderTrendFieldLineData () {
      return new Promise((resolve, reject) => {
        this.$httpApi.fieldSysApi.chartData.orderTrendFieldLine().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    async getData () {
      let resField = await this.getUseFieldData();
      if (resField.data.status === 200) {
        this.useFieldData = Object.assign({}, resField.data.data);
      }
      let resUseTrendLine = await this.getUseTrendFieldLineData();
      if (resUseTrendLine.data.status === 200) {
        this.useTrendFieldLineData = Object.assign({}, resUseTrendLine.data.data);
      }
      let resOrderTrendLine = await this.getOrderTrendFieldLineData();
      if (resOrderTrendLine.data.status === 200) {
        this.orderTrendFieldLineData = Object.assign({}, resOrderTrendLine.data.data);
      }
    },
    setTimer () {
      this.timer = setInterval(() => {
        this.getData()
      }, 1000 * 60 * 60)
    }
  },
  created () {
    this.getData()
  },
  mounted () {
    clearInterval(this.timer);
    this.setTimer();
  },
  distroyed: function () {
    clearInterval(this.timer)
  }
}
</script>
<style scoped>
.dataVisual-con-left {
  width: 33%;
  margin-top: 0;
}
.dataVisual-con-right {
  width: 67%;
  margin-top: 0;
}
.dataVisual-con-left li:first-child .dataVisual-item-t {
  padding-bottom: 124%;
}
.dataVisual-con-right li:first-child .dataVisual-item-t {
  padding-bottom: 29%;
}
.dataVisual-con-right li:last-child .dataVisual-item-t {
  padding-bottom: 29%;
}
ul.dataVisual-con-right h3 {
  text-align: right;
  padding-left: 1.5rem;
}
ul h3 {
  color: #26f3ff;
  font-size: 1.2rem;
  line-height: 1.5rem;
  padding: 1rem 0;
  text-align: left;
}
ul h3 i.el-icon-menu {
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 0.5rem;
  color: #2a56c3;
}
.field-gauge-box {
  width: 100%;
  height: 100%;
}
.field-gauge-box gauge-component {
  height: 50%;
}
.field-line-box {
  width: 100%;
  height: 100%;
}
</style>
