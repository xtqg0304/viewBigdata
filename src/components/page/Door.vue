<template>
  <div class="dataVisual-wrap">
    <header-component></header-component>
    <draggable v-model="dragElement" @start="drag=true" @end="drag=false">
      <ul :class="ele.className" v-for="ele in dragElement" :key="ele.id">

        <li class="dataVisual-item " v-for="itemLi in ele.children" :key="itemLi.id">
          <h3 v-if="ele.id==1&&itemLi.id==1">
            <i class="el-icon-menu"></i>考勤异常分布</h3>
          <h3 v-if="ele.id==2&&itemLi.id==1">
            <i class="el-icon-menu"></i>异常考勤统计</h3>
          <h3 v-if="ele.id==3&&itemLi.id==1">
            <i class="el-icon-menu"></i>考勤月统计</h3>
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
                  <div class="access-box" v-if="ele.id==1&&itemLi.id==1">
                    <pie-component :abnormalDormitoryPieData="abnormalDormitoryPieData"></pie-component>
                  </div>
                  <div class="access-table-box" v-if="ele.id==2&&itemLi.id==1">
                    <el-table :data="tableData" style="width: 100%">
                      <el-table-column prop="sort" label="排名" width="60">
                      </el-table-column>
                      <el-table-column prop="name" label="姓名" width="80">
                      </el-table-column>
                      <el-table-column prop="gradeClass" label="班级" width="110">
                      </el-table-column>
                      <el-table-column prop="reason" label="异常次数">
                      </el-table-column>
                      <el-table-column prop="tel" label="电话">
                      </el-table-column>
                    </el-table>
                  </div>
                  <div class="access-histogram-box" v-if="ele.id==3&&itemLi.id==1">
                    <histogram-component :trendDoorHistogramData="trendDoorHistogramData"></histogram-component>
                  </div>
                  <div class="access-histogram-box" v-if="ele.id==4&&itemLi.id==1">
                    <line-component :attendanceDoorLineData="attendanceDoorLineData"></line-component>
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
import pieComponent from '../common/PieDoor.vue'
import histogramComponent from '../common/HistogramDoor.vue'
import lineComponent from '../common/LineDoor.vue'
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
        children: [{ id: 1 }]
      }, {
        id: '3',
        className: 'dataVisual-con dataVisual-con-right',
        children: [{ id: 1 }]
      },
      {
        id: '4',
        className: 'dataVisual-con dataVisual-con-row',
        children: [{ id: 1 }]
      }],
      FromBarHorizontalData: '',
      tableData: [],
      attendanceDoorLineData: {},
      abnormalDormitoryPieData: {},
      trendDoorHistogramData: {},
      timer: null

    }
  },
  components: {
    draggable, headerComponent, pieComponent, histogramComponent, lineComponent
  },
  methods: {
    getAttendanceDoorLineData () {
      return new Promise((resolve, reject) => {
        this.$httpApi.doorSysApi.chartData.attendanceDoorLine().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getAbnormalDormitoryPieData () {
      return new Promise((resolve, reject) => {
        this.$httpApi.doorSysApi.chartData.abnormalDormitoryPie().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getTrendDoorHistogramData () {
      return new Promise((resolve, reject) => {
        this.$httpApi.doorSysApi.chartData.trendDoorHistogram().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getAbnormalDoorTableData () {
      return new Promise((resolve, reject) => {
        this.$httpApi.doorSysApi.chartData.abnormalDoorTable().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    async getData () {
      let resLine = await this.getAttendanceDoorLineData();
      if (resLine.data.status === 200) {
        this.attendanceDoorLineData = Object.assign({}, resLine.data.data);
      }
      let resPie = await this.getAbnormalDormitoryPieData();
      if (resPie.data.status === 200) {
        this.abnormalDormitoryPieData = Object.assign({}, resPie.data.data);
      }
      let resHistogram = await this.getTrendDoorHistogramData();
      if (resHistogram.data.status === 200) {
        this.trendDoorHistogramData = Object.assign({}, resHistogram.data.data);
      }
      let resTable = await this.getAbnormalDoorTableData();
      if (resTable.data.status === 200) {
        this.tableData = resTable.data.data.tableData;
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
.dataVisual-con-left,
.dataVisual-con-right,
.dataVisual-con-center {
  width: 33.33333%;
  margin-top: 0;
}
.dataVisual-con-row {
  width: 100%;
  margin-top: 0;
}
.dataVisual-con-left li:first-child .dataVisual-item-t,
.dataVisual-con-right li:first-child .dataVisual-item-t,
.dataVisual-con-center li:first-child .dataVisual-item-t {
  padding-bottom: 66%;
}
.dataVisual-con-row li:first-child .dataVisual-item-t {
  padding-bottom: 18%;
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
.access-table-box {
  width: 100%;
  height: 100%;
}
.access-histogram-box {
  width: 100%;
  height: 100%;
}
</style>
