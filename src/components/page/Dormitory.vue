<template>
  <div class="dataVisual-wrap">
    <header-component></header-component>
    <draggable v-model="dragElement" @start="drag=true" @end="drag=false">
      <ul :class="ele.className" v-for="ele in dragElement" :key="ele.id">

        <li class="dataVisual-item " v-for="itemLi in ele.children" :key="itemLi.id">
          <h3 v-if="ele.id==1&&itemLi.id==1">
            <i class="el-icon-menu"></i>未按时进出宿舍统计（昨天）</h3>
          <h3 v-if="ele.id==2&&itemLi.id==1">
            宿舍考勤异常分布（昨天）
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

                  <div class="dormitory-table-box" v-if="ele.id==1&&itemLi.id==1">
                    <el-table :data="tableData" style="width: 100%">
                      <el-table-column prop="date" label="日期" width="100">
                      </el-table-column>
                      <el-table-column prop="name" label="姓名" width="80">
                      </el-table-column>
                      <el-table-column prop="gradeClass" label="宿舍" width="160">
                      </el-table-column>
                      <el-table-column prop="reason" label="原因">
                      </el-table-column>
                      <el-table-column prop="tel" label="联系方式">
                      </el-table-column>
                    </el-table>
                  </div>
                  <div class="dormitory-bar-box" v-if="ele.id==2&&itemLi.id==1">
                    <bar-component :dormitoryBarData="dormitoryBarData"></bar-component>
                  </div>
                  <div class="dormitory-histogram-box" v-if="ele.id==3&&itemLi.id==1">
                    <line-component :dormitoryLineData="dormitoryLineData"></line-component>
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
import BarComponent from '../common/BarDormitory.vue'
import lineComponent from '../common/LineDormitory.vue'
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
        children: [{ id: 1 }]
      },
      {
        id: '3',
        className: 'dataVisual-con dataVisual-con-row',
        children: [{ id: 1 }]
      }],
      FromBarHorizontalData: '',
      tableData: [],
      dormitoryLineData: {},
      dormitoryBarData: {},
      timer: null

    }
  },
  components: {
    draggable, headerComponent, BarComponent, lineComponent
  },
  methods: {
    getDormitoryLine () {
      return new Promise((resolve, reject) => {
        this.$httpApi.dormitorySysApi.chartData.dormitoryLine().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getDormitoryBar () {
      return new Promise((resolve, reject) => {
        this.$httpApi.dormitorySysApi.chartData.dormitoryBar().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    getDormitoryTable () {
      return new Promise((resolve, reject) => {
        this.$httpApi.dormitorySysApi.chartData.dormitoryTable().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    async getData () {
      let resLine = await this.getDormitoryLine();
      if (resLine.data.status === 200) {
        this.dormitoryLineData = Object.assign({}, resLine.data.data);
        console.log('this.dormitoryLineData')
        console.log(this.dormitoryLineData)
      }
      let resBar = await this.getDormitoryBar();
      if (resBar.data.status === 200) {
        this.dormitoryBarData = Object.assign({}, resBar.data.data);
      }
      let resTable = await this.getDormitoryTable();
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
.dataVisual-con-right {
  width: 50%;
  margin-top: 0;
}
.dataVisual-con-row {
  width: 100%;
  margin-top: 0;
}
.dataVisual-con-left li:first-child .dataVisual-item-t,
.dataVisual-con-right li:first-child .dataVisual-item-t {
  padding-bottom: 45%;
}
.dataVisual-con-row li:first-child .dataVisual-item-t {
  padding-bottom: 18%;
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
.dormitory-table-box {
  width: 100%;
  height: 100%;
}
.dormitory-bar-box,
.dormitory-histogram-box {
  width: 100%;
  height: 100%;
}
</style>
