<template>
  <div class="dataVisual-wrap">
    <header-component></header-component>
    <draggable v-model="dragElement" @start="drag=true" @end="drag=false">
      <ul :class="ele.className" v-for="ele in dragElement" :key="ele.id">

        <li class="dataVisual-item " v-for="itemLi in ele.children" :key="itemLi.id">
          <h3 v-if="ele.id==1&&itemLi.id==1">
            <i class="el-icon-menu"></i>车辆/车位分析</h3>
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
                  <div class="vehicle-item-box clearfix" v-if="ele.id==1&&itemLi.id==1">
                    <div class="item">
                      <p>{{vehicleObjData.totalVehicle.text}}</p>
                      <p>{{vehicleObjData.totalVehicle.data}}</p>
                      <p>
                        <span>{{vehicleObjData.percentTotalVehicle.data}}</span>{{vehicleObjData.percentTotalVehicle.text}}</p>
                    </div>
                    <div class="item">
                      <p>{{vehicleObjData.teacherVehicle.text}}</p>
                      <p>{{vehicleObjData.teacherVehicle.data}}</p>
                      <p>
                        <span>{{vehicleObjData.percentTeacherVehicle.data}}</span>{{vehicleObjData.percentTeacherVehicle.text}}</p>
                    </div>
                    <div class="item">
                      <p>{{vehicleObjData.schoolVehicle.text}}</p>
                      <p>{{vehicleObjData.schoolVehicle.data}}</p>
                      <p>
                        <span>{{vehicleObjData.percentSchoolVehicle.data}}</span>{{vehicleObjData.percentSchoolVehicle.text}}
                      </p>
                    </div>
                    <div class="item">
                      <p>{{vehicleObjData.publicVehicle.text}}</p>
                      <p>{{vehicleObjData.publicVehicle.data}}</p>
                      <p>
                        <span>{{vehicleObjData.percentPublicVehicle.data}}</span>{{vehicleObjData.percentPublicVehicle.text}}
                      </p>
                    </div>
                    <div class="item">
                      <p>{{vehicleObjData.otherVehicle.text}}</p>
                      <p>{{vehicleObjData.otherVehicle.data}}</p>
                      <p>
                        <span>{{vehicleObjData.percentPublicVehicle.data}}</span>{{vehicleObjData.percentPublicVehicle.text}}
                      </p>
                    </div>
                  </div>
                  <div class="vehicle-funnel-box" v-if="ele.id==2&&itemLi.id==1">
                    <funnel-component :vehicleFunnelData="vehicleFunnelData"></funnel-component>
                  </div>
                  <div class="vehicle-line-box" v-if="ele.id==3&&itemLi.id==1">
                    <line-component :trendVehicleLineData="trendVehicleLineData"></line-component>
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
import funnelComponent from '../common/FunnelVehicle.vue'
import lineComponent from '../common/LineVehicle.vue'
export default {
  name: 'Index',
  data () {
    return {
      dragElement: [{
        id: '1',
        className: 'dataVisual-con dataVisual-con-row',
        children: [{ id: 1 }]
      }, {
        id: '2',
        className: 'dataVisual-con dataVisual-con-left',
        children: [{ id: 1 }]
      }, {
        id: '3',
        className: 'dataVisual-con dataVisual-con-right',
        children: [{ id: 1 }]
      }],
      vehicleObjData: {
        totalVehicle: {
        },
        percentTotalVehicle: {
        },
        teacherVehicle: {
        },
        percentTeacherVehicle: {
        },
        schoolVehicle: {
        },
        percentSchoolVehicle: {
        },
        publicVehicle: {
        },
        percentPublicVehicle: {
        },
        otherVehicle: {
        },
        percentOtherVehicle: {
        }
      },
      vehicleFunnelData: {},
      trendVehicleLineData: {},
      timer: null

    }
  },
  components: {
    draggable, headerComponent, funnelComponent, lineComponent
  },
  methods: {
    getVehicleObjData () {
      return new Promise((resolve, reject) => {
        this.$httpApi.vehicleSysApi.objData.vehicleObjData().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getVehicleFunnelData () {
      return new Promise((resolve, reject) => {
        this.$httpApi.vehicleSysApi.chartData.vehicleFunnel().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getTrendVehicleLineData () {
      return new Promise((resolve, reject) => {
        this.$httpApi.vehicleSysApi.chartData.trendVehicleLine().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    async getData () {
      let resObjData = await this.getVehicleObjData();
      if (resObjData.data.status === 200) {
        this.vehicleObjData = Object.assign({}, resObjData.data.data);
      }
      let resFunnel = await this.getVehicleFunnelData();
      if (resFunnel.data.status === 200) {
        this.vehicleFunnelData = Object.assign({}, resFunnel.data.data);
      }
      let resLine = await this.getTrendVehicleLineData();
      if (resLine.data.status === 200) {
        this.trendVehicleLineData = Object.assign({}, resLine.data.data);
      }
    },
    setTimer () {
      this.timer = setInterval(() => {
        this.getData()
      }, 1000 * 60 * 60)
    }
  },
  created () {
    this.getData();
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
.dataVisual-con-row {
  width: 100%;
  margin-top: 0;
}
.dataVisual-con-row li:first-child .dataVisual-item-t {
  padding-bottom: 8%;
}
.dataVisual-con-left,
.dataVisual-con-right {
  margin-top: 0;
}
.dataVisual-con-left {
  width: 30%;
}
.dataVisual-con-right {
  width: 70%;
}
.dataVisual-con-left li:first-child .dataVisual-item-t {
  padding-bottom: 106%;
}
.dataVisual-con-right li:first-child .dataVisual-item-t {
  padding-bottom: 44%;
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
.vehicle-item-box .item {
  float: left;
  width: 20%;
  text-align: center;
}
.vehicle-item-box .item p {
  padding: 0 0.5rem;
  font-size: 1.2rem;
  color: #fff;
}
.vehicle-item-box .item p:nth-child(2) {
  font-size: 2rem;
  color: #ff2e56;
}
.vehicle-item-box .item p:nth-child(3) {
  font-size: 0.6rem;
  color: #fff;
}
.vehicle-item-box .item:nth-child(2) p:nth-child(2),
.vehicle-item-box .item:nth-child(4) p:nth-child(2) {
  color: #10c1d7;
}
.vehicle-item-box .item p span {
  font-size: 1rem;
  color: #22d724;
}
.vehicle-line-box {
  width: 100%;
  height: 100%;
}
</style>
