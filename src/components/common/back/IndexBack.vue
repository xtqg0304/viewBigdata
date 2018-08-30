<template>
  <div class="dataVisual-wrap">
    <header class="title">
      <i class="el-icon-time">3018-08-13 12:30 星期一</i>
    </header>
    <!-- <draggable v-model="dragElement" @start="drag=true" @end="drag=false">
      <ul :class="ele.className" v-for="ele in dragElement" :key="ele.id">
        <li class="dataVisual-item">
          <div class="dataVisual-item-t numbox">
            <div class="line x l t"></div>
            <div class="line x r t"></div>
            <div class="line y l t"></div>
            <div class="line y r t"></div>
            <div class="line x l b"></div>
            <div class="line x r b"></div>
            <div class="line y l b"></div>
            <div class="line y r b"></div>
            <div class="dataVisual-bgImg numb">
              <div class="main-box" style="width:98%;height:98%;margin:1%;">
                <div class="main-box-title" style="width:100%;height:2em;">
                  <a style="color:#fff;">{{FromBarHorizontalData}}</a>
                </div>
                <div class="main-box-content" style="width:100%;min-height:100px;height:calc(100% - 2em);">
                  <bar-horizontal-component v-show="ele.id==1" v-on:BarHorizontal="BarHorizontal" :FromParentBarHorizontalData="FromBarHorizontalData"></bar-horizontal-component>
                  <line-component v-show="ele.id==2" :FromParentBarHorizontalData="FromBarHorizontalData"></line-component>
                  <bar-line-component v-show="ele.id==3"></bar-line-component>
                </div>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </draggable> -->
    <draggable v-model="dragElement" @start="drag=true" @end="drag=false">
      <ul :class="ele.className" v-for="ele in dragElement" :key="ele.id">

        <li class="dataVisual-item " v-for="itemLi in ele.children" :key="itemLi.id">
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
                <!-- <div class="main-box-title " style="width:100%;height:2em; ">
                  <a style="color:#fff; ">图表标题图表标题</a>
                </div> -->
                <div class="main-box-content " style="width:100%;min-height:300px;height:100%; ">
                  <!-- <div class="attendance-box clearfix" v-if="ele.id==1&&itemLi.id==1">
                    <div class="attendance-box-title">
                      <p>目标到校人数：
                        <span>20000</span>
                      </p>
                      <p>实时到校人数：
                        <span>8000</span>
                      </p>
                      <p>
                        <el-button-group>
                          <el-button type="primary">详</el-button>
                          <el-button type="primary">情</el-button>
                        </el-button-group>
                      </p>
                      <p>同比昨天</p>
                      <p>+40%</p>
                    </div>
                    <div class="attendance-box-charts">

                    </div>
                    <div>
                      <line-component v-if="ele.id==1&&itemLi.id==1"></line-component>
                    </div>
                  </div> -->
                  <bar-horizontal-component v-if="ele.id==1&&itemLi.id==1" v-on:BarHorizontal="BarHorizontal" :FromParentBarHorizontalData="FromBarHorizontalData"></bar-horizontal-component>
                  <line-component v-if="ele.id==2&&itemLi.id==1" :FromParentBarHorizontalData="FromBarHorizontalData"></line-component>
                  <bar-line-component v-if="ele.id==3&&itemLi.id==1"></bar-line-component>
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
import barHorizontalComponent from '../common/BarHorizontal.vue'
import barLineComponent from '../common/BarLine.vue'
import lineComponent from '../common/Line.vue'
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
      }],
      FromBarHorizontalData: ''
    }
  },
  components: {
    draggable, barHorizontalComponent, lineComponent, barLineComponent
  },
  methods: {
    BarHorizontal: function (BarHorizontal) {
      // childValue就是子组件传过来的值
      this.FromBarHorizontalData = BarHorizontal;
    }
  },
  created () {
  }
}
</script>
<style>
header i {
  position: relative;
  top: -3.5rem;
  left: 38%;
  color: #fff;
}
ul h3 {
  color: #26f3ff;
  font-size: 1.2rem;
  line-height: 1.5rem;
  padding: 1rem 0;
}
ul h3 i.el-icon-menu {
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 0.5rem;
  color: #2a56c3;
}
.attendance-box {
  width: 100%;
  padding-top: 1rem;
}
.attendance-box-title {
  float: left;
  width: 40%;
}
.attendance-box-title p {
  font-size: 1rem;
  font-weight: normal;
  padding: 0.5rem;
  color: #26f3ff;
}
.attendance-box-title p span {
  font-size: 1.4rem;
  font-weight: normal;
  padding: 0 0.5rem;
  color: #26f3ff;
}
.attendance-box-title p:first-child,
.attendance-box-title p:first-child span {
  color: #dd05e6;
}
.attendance-box-title p:nth-child(2),
.attendance-box-title p:nth-child(2) span {
  color: #1d3e73;
}

.attendance-box-title p:nth-child(3) .el-button-group button span {
  font-size: 0.8rem;
  font-weight: normal;
  padding: 0;
  color: #fff;
}
.attendance-box-title p:nth-child(3) .el-button-group button {
  border: none;
  background: #a74cf3;
  border-right: 1px solid transparent;
  padding: 7px 0 7px 14px;
  text-align: right;
}
.attendance-box-title p:nth-child(3) .el-button-group button:last-child {
  background: #7564fc;
  text-align: left;
  padding: 7px 14px 7px 0px;
}
.attendance-box-title p:nth-child(4) {
  color: #fff;
  font-size: 0.8rem;
}
.attendance-box-title p:nth-child(5) {
  color: #22d724;
  font-size: 1.5rem;
  padding: 0 0.5rem;
}
.attendance-box-charts {
  float: left;
  width: 60%;
  height: 200px;
}
</style>
