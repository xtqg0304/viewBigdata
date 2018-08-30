<template>
  <div class="dataVisual-wrap">
    <header-component :allSysList="allSysList"></header-component>

    <draggable v-model="dragElement" @start="drag=true" @end="drag=false">
      <ul :class="ele.className" v-for="ele in dragElement" :key="ele.id">

        <li class="dataVisual-item " v-for="itemLi in ele.children" :key="itemLi.id">
          <!-- <div class=" container" v-if="ele.id==1&&itemLi.id==1">

            <ul class="navigation">
              <li>
                <a href="#" class="to top">
                  <i class="el-icon-sys-vehicle"></i>
                  <span>车辆系统</span>
                </a>
              </li>
              <li>
                <a href="#" class="to top">
                  <i class="el-icon-sys-door"></i>
                  <span>门禁系统</span>
                </a>
              </li>
              <li>
                <a href="#" class="to top">
                  <i class="el-icon-sys-field"></i>
                  <span>预约系统</span>
                </a>
              </li>
              <li>
                <a href="#" class="to top">
                  <i class="el-icon-sys-dormitory"></i>
                  <span>宿舍系统</span>
                </a>
              </li>
              <li>
                <a href="#" class="to top">
                  <i class="el-icon-sys-view"></i>
                  <span>可视化</span>
                </a>
              </li>
              <li>
                <a href="#" class="to top">
                  <i class="el-icon-sys-basics"></i>
                  <span>基础信息</span>
                </a>
              </li>

            </ul>
          </div> -->
          <h3 v-if="ele.id==1&&itemLi.id==1">

            <i class="el-icon-menu"></i>学生考勤

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
      allSysList: [
        {
          icon: 'http://10.18.73.83:20080/resources/images/park.png',
          serverLink: '',
          serverName: '车辆出入口系统',
          sysTag: 'INOUT_PARK_SYS',
          authority: 'false'
        },
        {
          icon: 'http://10.18.72.34:8082/resources/images/system_icon.png',
          serverLink: '',
          serverName: '宿舍管理',
          sysTag: 'DORMITORY_SUB_SYSTEM',
          authority: 'false'
        },
        {
          icon: 'http://10.18.73.83:9090/resources/images/system_icon.png',
          serverLink: '',
          serverName: '门禁系统',
          sysTag: 'SMARTWAY_SUB_SYSTEM',
          authority: 'false'
        },
        {
          icon:
            'http://10.18.73.83:18888/statics/images/ordericon.png',
          serverLink: '',
          serverName: '场地预约',
          sysTag: 'SiteReservation',
          authority: 'false'

        },
        {
          icon: 'http://10.18.73.83:8080/resources/images/person.png',
          serverLink: '',
          serverName: '基础信息',
          sysTag: 'BASIC_SYSTEM',
          authority: 'false'
        },
        {
          icon: '',
          serverLink: 'http://192.168.70.3:9066/',
          serverName: '可视化系统',
          sysTag: 'VIDEO_SYSTEM',
          authority: 'true'
        }
      ],
      sysList: [],
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
      }
      // 获取场地圆环图表数据
      let resFieldRing = await this.getFieldRing();
      if (resFieldRing.data.status === 200) {
        this.fieldRingData = Object.assign({}, resFieldRing.data.data);
      }
      // 获取场地圆环图表数据
      let resVehicleLine = await this.getVehicleLine();
      if (resVehicleLine.data.status === 200) {
        this.vehicleLineData = Object.assign({}, resVehicleLine.data.data);
      }
    },
    setTimer () {
      this.timer = setInterval(() => {
        this.getData()
        console.log('ddd')
      }, 5000)
    },
    getSystemsData () {
      return new Promise((resolve, reject) => {
        this.$httpApi.doorSysApi.chartData.getSystems().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    async getDataSys () {
      let resSys = await this.getSystemsData();
      if (resSys.data.status === 200) {
        this.sysList = Object.assign({}, resSys.data.data.sysList);
      }
      for (let m in this.allSysList) {
        for (let n in this.sysList) {
          if (this.allSysList[m].sysTag === this.sysList[n].sysTag) {
            this.allSysList[m].authority = 'true';
            this.allSysList[m].serverLink = this.sysList[n].serverLink;
            break;
          }
        }
      }
    }
  },
  created () {
    this.getData();
    this.getDataSys()
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
/*.dataVisual-con-left {
  width: 35%;
  margin-top: 4%;
}
.dataVisual-con-left .dataVisual-item-t {
  padding-bottom: 120%;
}
.dataVisual-con-center {
  width: 30%;
}
.dataVisual-con-center li:first-child .dataVisual-item-t {
  padding-bottom: 45%;
}
.dataVisual-con-center li:nth-child(2) .dataVisual-item-t {
  padding-bottom: 75%;
}
.dataVisual-con-right {
  width: 35%;
  margin-top: 4%;
}
.dataVisual-con-right li:first-child .dataVisual-item-t {
  padding-bottom: 20%;
}
.dataVisual-con-right li:nth-child(2) .dataVisual-item-t {
  padding-bottom: 86%;
}*/
.dataVisual-con-left {
  width: 35%;
  margin-top: 4%;
}
.dataVisual-con-left .dataVisual-item-t {
  padding-bottom: 120%;
}
.dataVisual-con-center {
  width: 30%;
}
.dataVisual-con-center li:first-child .dataVisual-item-t {
  padding-bottom: 45%;
}
.dataVisual-con-center li:nth-child(2) .dataVisual-item-t {
  padding-bottom: 75%;
}
.dataVisual-con-right {
  width: 35%;
  margin-top: 4%;
}
.dataVisual-con-right li:first-child .dataVisual-item-t {
  padding-bottom: 20%;
}
.dataVisual-con-right li:nth-child(2) .dataVisual-item-t {
  padding-bottom: 86%;
}

ul.dataVisual-con-right h3 {
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
/*11111111111*/
.container {
  /* position: relative;
  margin-top: 9%;
  margin-left: 0.5em;
  margin-right: 0.5em;
  background-color: #11224d; */
  margin: 0.5rem 0;
  font-size: 1.2rem;
}
.container .dataVisual-item {
  margin-bottom: 0;
}
.container .dataVisual-item-t {
  padding-bottom: 4em;
}
.navigation:after {
  content: '';
  display: block;
  clear: both;
}
.navigation li {
  list-style: none;
  float: left;
  display: inline-block;
  margin: 0 0.5em;
}
.navigation li a {
  display: block;
  width: 3em;
  height: 3em;
  border-radius: 3em;
  line-height: 3em;
  position: relative;
  text-align: center;
  background-color: rgba(42, 86, 195, 0.2);
  border: 0;
  overflow: hidden;
  z-index: 1;
}
.navigation li a i {
  display: block;
  position: absolute;
  font-size: 1.66666667em;
  top: 50%;
  left: 50%;
  color: #7564fc;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
  -moz-transform: translate(-50%, -50%);
  -moz-transition: all 0.5s ease;
  -webkit-transform: translate(-50%, -50%);
  -webkit-transition: all 0.5s ease;
}
.navigation li a span {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #7564fc;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  opacity: 0;
  font-size: 1em;
  text-transform: uppercase;
  -moz-transition: all 0.25s 0.125s ease;
  -webkit-transition: all 0.25s 0.125s ease;
}
.navigation li:nth-child(3) a i {
  color: #a74cf3;
}
.navigation li:nth-child(3) a span {
  color: #a74cf3;
}
.navigation li:nth-child(2) a i {
  color: #0fc2d6;
}
.navigation li:nth-child(2) a span {
  color: #0fc2d6;
}
.navigation li:nth-child(5) a i {
  color: #ff305c;
}
.navigation li:nth-child(5) a span {
  color: #ff305c;
}
.navigation li:nth-child(4) a i {
  color: #3973d2;
}
.navigation li:nth-child(4) a span {
  color: #3973d2;
}
.navigation li:nth-child(6) a i {
  color: #b3490f;
}
.navigation li:nth-child(6) a span {
  color: #b3490f;
}
.navigation li a:hover.to.bottom i {
  transform: translate(-50%, 5em);
  -moz-transform: translate(-50%, 5em);
  -webkit-transform: translate(-50%, 5em);
}
.navigation li a:hover.to.top i {
  transform: translate(-50%, -5em);
  -moz-transform: translate(-50%, -5em);
  -webkit-transform: translate(-50%, -5em);
}
.navigation li a:hover.to.left i {
  transform: translate(-5em, -50%);
  -moz-transform: translate(-5em, -50%);
  -webkit-transform: translate(-5em, -50%);
}
.navigation li a:hover.to.right i {
  transform: translate(5em, -50%);
  -moz-transform: translate(5em, -50%);
  -webkit-transform: translate(5em, -50%);
}
.navigation li a:hover i {
  transform: translate(-50%, 5em);
  -moz-transform: translate(-50%, 5em);
  -webkit-transform: translate(-50%, 5em);
  color: rgba(255, 255, 255, 0.4);
}
.navigation li a:hover span {
  opacity: 1;
}
</style>
