<template>
  <div class="dataVisual-wrap">
    <header-component></header-component>
    <draggable v-model="dragElement" @start="drag=true" @end="drag=false">

      <ul :class="ele.className" v-for="ele in dragElement" :key="ele.id">

        <li class="dataVisual-item " v-for="itemLi in ele.children" :key="itemLi.id">

          <h3 v-if="ele.id==1&&itemLi.id==1">
            <i class="el-icon-menu"></i>学生考勤
          </h3>
          <h3 v-if="ele.id==2&&itemLi.id==1">
            <i class="el-icon-menu"></i>场地预约
          </h3>
          <h3 v-if="ele.id==2&&itemLi.id==2">
            <i class="el-icon-menu"></i>实时监控</h3>
          <h3 v-if="ele.id==3&&itemLi.id==1">
            <i class="el-icon-menu"></i>车流量
          </h3>
          <h3 v-if="ele.id==3&&itemLi.id==2">
            <i class="el-icon-menu"></i>停车位</h3>
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
                  <div class="attendance-box clearfix" v-if="ele.id==1&&itemLi.id==1">
                    <div class="attendance-box-title">
                      <p>{{accessControlData.total.text}}
                        <span>{{accessControlData.total.data}}</span>
                      </p>
                      <p>{{accessControlData.real.text}}
                        <span>{{accessControlData.real.data}}</span>
                      </p>
                      <p>
                        <router-link to="/Door">
                          <el-button-group>
                            <el-button type="primary">详</el-button>
                            <el-button type="primary">情</el-button>
                          </el-button-group>
                        </router-link>
                      </p>
                      <p>{{accessControlData.percent.text}}</p>
                      <p>{{accessControlData.percent.data}}</p>
                    </div>
                    <div class="attendance-box-charts">

                      <gauge-component :doorGuageData="doorGuageData"></gauge-component>

                    </div>
                  </div>
                  <div class="dormitory-charts" v-if="ele.id==1&&itemLi.id==1">
                    <line-component v-if="ele.id==1&&itemLi.id==1" :dormitoryLineData="dormitoryLineData"></line-component>
                    <router-link to="/Dormitory">
                      <el-button-group>
                        <el-button type="primary">详</el-button>
                        <el-button type="primary">情</el-button>
                      </el-button-group>
                    </router-link>
                  </div>
                  <div class="field-box clearfix" v-if="ele.id==2&&itemLi.id==1">
                    <div class="field-box-title">
                      <p>{{fieldObjData.available.text}}
                      </p>
                      <p>{{fieldObjData.available.data}}
                      </p>
                      <p>
                        <router-link to="/Field">
                          <el-button-group>
                            <el-button type="primary">详</el-button>
                            <el-button type="primary">情</el-button>
                          </el-button-group>
                        </router-link>
                      </p>
                      <p>{{fieldObjData.percent.text}}</p>
                      <p>{{fieldObjData.percent.data}}</p>
                    </div>
                    <div class="field-box-charts">
                      <ring-component :fieldRingData="fieldRingData"></ring-component>
                    </div>
                  </div>
                  <div class="video-box" v-if="ele.id==2&&itemLi.id==2">
                    <el-table :data="tableData" style="width: 100%">
                      <el-table-column prop="date" label="日期" width="100">
                      </el-table-column>
                      <el-table-column prop="name" label="姓名" width="80">
                      </el-table-column>
                      <el-table-column prop="gradeClass" label="班级" width="160">
                      </el-table-column>
                      <el-table-column prop="reason" label="原因">
                      </el-table-column>
                    </el-table>
                  </div>

                  <div class="vehicleFlow clearfix" v-if="ele.id==3&&itemLi.id==1">
                    <div class="item">
                      <p>{{vehicleObjData.inVehicle.text}}</p>
                      <p>{{vehicleObjData.inVehicle.data}}</p>
                      <p>
                        <span>{{vehicleObjData.percentInVehicle.data}}</span>{{vehicleObjData.percentInVehicle.text}}</p>
                    </div>
                    <div class="item">
                      <p>{{vehicleObjData.outVehicle.text}}</p>
                      <p>{{vehicleObjData.outVehicle.data}}</p>
                      <p>
                        <span>{{vehicleObjData.percentOutVehicle.data}}</span>{{vehicleObjData.percentOutVehicle.text}}</p>
                    </div>
                    <div class="item">
                      <p>{{vehicleObjData.retention.text}}</p>
                      <p>{{vehicleObjData.retention.data}}</p>
                      <p>
                        <span>{{vehicleObjData.percentRetention.data}}</span>{{vehicleObjData.percentRetention.text}}
                        <router-link to="/Vehicle">
                          <el-button-group>
                            <el-button type="primary">详</el-button>
                            <el-button type="primary">情</el-button>
                          </el-button-group>
                        </router-link>
                      </p>
                    </div>
                  </div>
                  <div class="attendance-box clearfix" v-if="ele.id==3&&itemLi.id==2">
                    <div class="attendance-box-title">
                      <p>{{vehicleObjData.surplusPark.text}}
                        <span>{{vehicleObjData.surplusPark.data}}</span>
                      </p>
                      <p>{{vehicleObjData.inOutVehicle.text}}
                        <span>{{vehicleObjData.inOutVehicle.data}}</span>
                      </p>
                      <p>
                        <router-link to="/Vehicle">
                          <el-button-group>
                            <el-button type="primary">详</el-button>
                            <el-button type="primary">情</el-button>
                          </el-button-group>
                        </router-link>
                      </p>
                      <p>{{vehicleObjData.percentInOutVehicle.text}}</p>
                      <p>{{vehicleObjData.percentInOutVehicle.data}}</p>
                    </div>
                    <div class="attendance-box-charts">
                      <gauge2-component :vehicleGuageData="vehicleGuageData"></gauge2-component>
                    </div>

                  </div>
                  <div class="vehicleFlow-charts" v-if="ele.id==3&&itemLi.id==2">
                    <line1-component :vehicleLineData="vehicleLineData"></line1-component>
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
import gaugeComponent from '../common/GaugeIndexDoor.vue'
import gauge2Component from '../common/GaugeIndexVehicle.vue'
import lineComponent from '../common/LineIndexDormitory.vue'
import line1Component from '../common/LineIndexVehicle.vue'
import ringComponent from '../common/RingIndexField.vue'
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
        className: 'dataVisual-con dataVisual-con-center',
        children: [{ id: 1 }, { id: 2 }]
      }, {
        id: '3',
        className: 'dataVisual-con dataVisual-con-right',
        children: [{ id: 1 }, { id: 2 }]
      }],
      tableData: [],
      accessControlData: {
        total: {
          text: '',
          data: ''
        },
        real: {
          text: '',
          data: ''
        },
        percent: {
          text: '',
          data: ''
        }
      },
      fieldObjData: {
        available: {
          text: '',
          data: ''
        },
        percent: {
          text: '',
          data: ''
        }
      },
      vehicleObjData: {
        inVehicle: {
          text: '',
          data: ''
        },
        percentInVehicle: {
          text: '',
          data: ''
        },
        outVehicle: {
          text: '',
          data: ''
        },
        percentOutVehicle: {
          text: '',
          data: ''
        },
        retention: {
          text: '',
          data: ''
        },
        percentRetention: {
          text: '',
          data: ''
        },
        surplusPark: {
          text: '',
          data: ''
        },
        inOutVehicle: {
          text: '',
          data: ''
        },
        percentInOutVehicle: {
          text: '',
          data: ''
        }
      },
      doorGuageData: {},
      vehicleGuageData: {},
      dormitoryLineData: {},
      fieldRingData: {},
      vehicleLineData: {},
      timer: null

    }
  },
  components: {
    draggable, headerComponent, lineComponent, line1Component, gaugeComponent, gauge2Component, ringComponent
  },
  methods: {
    getAccessControl () {
      return new Promise((resolve, reject) => {
        this.$httpApi.doorSysApi.objData.percentToScholl().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getFieldObj () {
      return new Promise((resolve, reject) => {
        this.$httpApi.fieldSysApi.objData.percentToField().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getVehicleObj () {
      return new Promise((resolve, reject) => {
        this.$httpApi.vehicleSysApi.objData.percentToVehicle().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getTable () {
      return new Promise((resolve, reject) => {
        this.$httpApi.doorSysApi.tableData.doorTableData().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getDoorGuage () {
      return new Promise((resolve, reject) => {
        this.$httpApi.doorSysApi.chartData.rateToScholl().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getVehicleGuage () {
      return new Promise((resolve, reject) => {
        this.$httpApi.vehicleSysApi.chartData.rateVehicle().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getDormitoryLine () {
      return new Promise((resolve, reject) => {
        this.$httpApi.dormitorySysApi.chartData.dormitoryLineData().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getFieldRing () {
      return new Promise((resolve, reject) => {
        this.$httpApi.fieldSysApi.chartData.fieldRingData().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getVehicleLine () {
      return new Promise((resolve, reject) => {
        this.$httpApi.vehicleSysApi.chartData.vehicleLineData().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    async getData () {
      // 获取在校学生的数据
      let resAccessControl = await this.getAccessControl();
      if (resAccessControl.data.status === 200) {
        this.accessControlData = Object.assign({}, resAccessControl.data.data.percentObjData);
        console.log('考勤')
        console.log(this.accessControlData)
      }
      // 获取场地数据
      let resFieldObj = await this.getFieldObj();
      if (resFieldObj.data.status === 200) {
        this.fieldObjData = Object.assign({}, resFieldObj.data.data.percentObjData);
      }
      // 获取车辆数据
      let resVehicleObj = await this.getVehicleObj();
      if (resVehicleObj.data.status === 200) {
        this.vehicleObjData = Object.assign({}, resVehicleObj.data.data.percentObjData);
      }
      // 获取门禁表格数据
      let resTable = await this.getTable();
      if (resTable.data.status === 200) {
        this.tableData = resTable.data.data.tableData;
      }
      // 获取门禁gauge图表数据
      let resDoorGuage = await this.getDoorGuage();
      if (resDoorGuage.data.status === 200) {
        this.doorGuageData = Object.assign({}, resDoorGuage.data.data);
      }
      // 获取车辆gauge图表数据
      let resVehicleGuage = await this.getVehicleGuage();
      if (resVehicleGuage.data.status === 200) {
        this.vehicleGuageData = Object.assign({}, resVehicleGuage.data.data);
      }
      // 获取宿舍折线图表数据
      let resDormitoryLine = await this.getDormitoryLine();
      if (resDormitoryLine.data.status === 200) {
        this.dormitoryLineData = Object.assign({}, resDormitoryLine.data.data);
        console.log(this.dormitoryLineData)
        console.log(this.dormitoryLineData)
      }
      // 获取场地圆环图表数据
      let resFieldRing = await this.getFieldRing();
      if (resFieldRing.data.status === 200) {
        this.fieldRingData = Object.assign({}, resFieldRing.data.data);
      }
      // 获取车辆折线图表数据
      let resVehicleLine = await this.getVehicleLine();
      if (resVehicleLine.data.status === 200) {
        this.vehicleLineData = Object.assign({}, resVehicleLine.data.data);
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
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('rememberMe');
    sessionStorage.setItem('username', JSON.stringify(this.$route.params.username));
    sessionStorage.setItem('password', JSON.stringify(this.$route.params.password));
    sessionStorage.setItem('rememberMe', JSON.stringify(this.$route.params.rememberMe));
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
  width: 35%;
  margin-top: 0;
}
.dataVisual-con-left .dataVisual-item-t {
  padding-bottom: 120%;
}
.dataVisual-con-center {
  width: 30%;
  margin-top: 0;
}
.dataVisual-con-center li:first-child .dataVisual-item-t {
  padding-bottom: 45%;
}
.dataVisual-con-center li:nth-child(2) .dataVisual-item-t {
  padding-bottom: 80%;
}
.dataVisual-con-right {
  width: 35%;
  margin-top: 0;
}
.dataVisual-con-right li:first-child .dataVisual-item-t {
  padding-bottom: 20%;
}
.dataVisual-con-right li:nth-child(2) .dataVisual-item-t {
  padding-bottom: 86%;
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
.attendance-box,
.field-box {
  width: 100%;
  padding-top: 1rem;
}
.attendance-box-title,
.field-box-title {
  float: left;
  width: 40%;
}
.attendance-box-title p,
.field-box-title p {
  font-size: 1rem;
  font-weight: normal;
  padding: 0.5rem;
  color: #26f3ff;
}
.attendance-box-title p span,
.field-box-title p span {
  font-size: 1.4rem;
  font-weight: normal;
  padding: 0 0.5rem;
  color: #26f3ff;
}
.attendance-box-title p:first-child,
.attendance-box-title p:first-child span,
.field-box-title p:first-child,
.field-box-title p:first-child span {
  color: #dd05e6;
}
.attendance-box-title p:nth-child(2),
.attendance-box-title p:nth-child(2) span,
.field-box-title p:nth-child(2),
.field-box-title p:nth-child(2) span {
  color: #7564fc;
}

.attendance-box-title p:nth-child(3) .el-button-group button span,
.vehicleFlow .item .el-button-group button span,
.field-box-title .el-button-group button span,
.dormitory-charts .el-button-group button span {
  font-size: 0.8rem;
  font-weight: normal;
  padding: 0;
  color: #fff;
}
.attendance-box-title p:nth-child(3) .el-button-group button,
.vehicleFlow .item .el-button-group button,
.field-box-title .el-button-group button,
.dormitory-charts .el-button-group button {
  border: none;
  background: #a74cf3;
  border-right: 1px solid transparent;
  padding: 7px 0 7px 14px;
  text-align: right;
}
.attendance-box-title p:nth-child(3) .el-button-group button:last-child,
.vehicleFlow .item .el-button-group button:last-child,
.field-box-title .el-button-group button:last-child,
.dormitory-charts .el-button-group button:last-child {
  background: #7564fc;
  text-align: left;
  padding: 7px 14px 7px 0px;
}
.dormitory-charts .el-button-group {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
}
.vehicleFlow .item .el-button-group {
  vertical-align: bottom;
  position: relative;
  right: -1rem;
}
.attendance-box-title p:nth-child(4),
.field-box-title p:nth-child(4) {
  color: #fff;
  font-size: 0.8rem;
}
.attendance-box-title p:nth-child(5),
.field-box-title p:nth-child(5) {
  color: #22d724;
  font-size: 1.5rem;
  padding: 0 0.5rem;
}
.field-box-title p:nth-child(3) {
  float: right;
  position: relative;
  right: 0;
  bottom: -1.5rem;
}
.attendance-box-charts,
.field-box-charts {
  float: left;
  width: 60%;
  height: 13rem;
}
.field-box-charts {
  height: 11rem;
}
.dormitory-charts,
.vehicleFlow-charts {
  width: 100%;
  height: calc(100% - 14rem);
}
.vehicleFlow .item {
  float: left;
  width: 30%;
}
.vehicleFlow .item p {
  padding: 0 0.5rem;
  font-size: 1.2rem;
  color: #fff;
}
.vehicleFlow .item p:nth-child(2) {
  font-size: 2rem;
  color: #ff2e56;
}
.vehicleFlow .item p:nth-child(3) {
  font-size: 0.6rem;
  color: #fff;
}
.vehicleFlow .item p:nth-child(3) span {
  font-size: 1rem;
  color: #ff2e56;
}
.vehicleFlow .item:last-child {
  width: 40%;
}
.vehicleFlow .item:nth-child(2) p:nth-child(2) {
  color: #10c1d7;
}
.vehicleFlow .item:nth-child(3) p:nth-child(3) span {
  color: #22d724;
}
.video-box {
  width: 100%;
  height: 100%;
}
</style>
