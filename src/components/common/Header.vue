<template>
  <header>
    <div class="header">

      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

        <a class="logo"></a>

        <el-menu-item index="1">
          <a :href="allSysList[5].serverLink" target="_blank">
            <i class="el-icon-sys-view "></i>
            <span>可视化</span>
          </a>
        </el-menu-item>
        <el-menu-item index="2">
          <a :href="allSysList[0].serverLink " target="_blank">
            <i class="el-icon-sys-vehicle "></i>
            <span>车辆系统</span>
          </a>
        </el-menu-item>
        <el-menu-item index="3">
          <a :href="allSysList[2].serverLink " target="_blank">
            <i class="el-icon-sys-door "></i>
            <span>门禁系统</span>
          </a>
        </el-menu-item>
        <el-menu-item index="4">
          <a :href="allSysList[3].serverLink " target="_blank">
            <i class="el-icon-sys-field "></i>
            <span>预约系统</span>
          </a>
        </el-menu-item>
        <el-menu-item index="5">
          <a :href="allSysList[1].serverLink " target="_blank">
            <i class="el-icon-sys-dormitory "></i>
            <span>宿舍系统</span>
          </a>
        </el-menu-item>
        <el-menu-item index="6">
          <a :href="allSysList[4].serverLink " target="_blank">
            <i class="el-icon-sys-basics "></i>
            <span>基础信息</span>
          </a>
        </el-menu-item>
      </el-menu>
      <div class="time">

        <div class="clock" v-if="$route.name=='Index'">
          <i id="Date" class="el-icon-time">{{dateT}}</i>
          <ul>
            <li id="hours">{{hoursT}} </li>
            <li id="point">:</li>
            <li id="min"> {{minT}}</li>
            <li id="point">:</li>
            <li id="sec"> {{secT}}</li>
          </ul>
        </div>
        <!-- <i class="el-icon-user" v-if="$route.name=='Index'">{{username}}</i> -->
        <!-- 用户头像 -->
        <div v-if="$route.name=='Index'" class="user-avator"><img src="../../assets/user.png"></div>
        <el-dropdown class="user-name" trigger="click" v-if="$route.name=='Index'">

          <span class="el-dropdown-link">

            {{username}}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- <el-dropdown-item @click="goBack() ">返回首页</el-dropdown-item> -->
            <a href="https://www.baidu.com" target="_blank">
              <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
            </a>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <a class="logout" v-if="$route.name=='Index'" href="https://www.baidu.com">退出</a> -->
        <!-- <router-link to="/ "> -->
        <i class="el-icon-back " v-if="$route.name!='Index' " @click="goBack() ">返回</i>
        <!-- </router-link> -->
      </div>
    </div>
    <div>
      <div class=" container " style="clear:both;">
        <ul class="navigation ">
          <!-- <li>
            <a :href="allSysList[5].serverLink " class="to top ">
              <i class="el-icon-sys-view "></i>
              <span>可视化</span>
            </a>
          </li> -->
          <li>
            <a :href="allSysList[0].serverLink " class="to top ">
              <i class="el-icon-sys-vehicle "></i>
              <span>车辆</span>
              剩余车位：{{vehicleObjData.surplusPark.data}}
            </a>
          </li>
          <li>
            <a :href="allSysList[2].serverLink " class="to top ">
              <i class="el-icon-sys-door "></i>
              <span>门禁</span>
              到校人数：{{accessControlData.real.data}}
            </a>
          </li>
          <li>
            <a :href="allSysList[3].serverLink " class="to top ">
              <i class="el-icon-sys-field "></i>
              <span>预约</span>
              今日预约：{{fieldObjData.available.data}}
            </a>
          </li>
          <li>
            <a :href="allSysList[1].serverLink " class="to top ">
              <i class="el-icon-sys-dormitory "></i>
              <span>宿舍</span>
              刷卡异常：{{domitoryObjData}}
            </a>
          </li>

          <!-- <li>
            <a :href="allSysList[4].serverLink " class="to top ">
              <i class="el-icon-sys-basics "></i>
              <span>基础信息</span>
            </a>
          </li> -->

        </ul>
      </div>
    </div>
  </header>

</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      dateT: '',
      secT: '',
      minT: '',
      hoursT: '',
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
      token: '',
      username: '',
      activeIndex: '1',
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
      domitoryObjData: ''
    }
  },
  methods: {
    getSystemsData () {
      let params = new URLSearchParams();
      params.append('username', JSON.parse(sessionStorage.getItem('username')).split('=')[1]);
      params.append('password', JSON.parse(sessionStorage.getItem('password')).split('=')[1]);
      params.append('rememberMe', JSON.parse(sessionStorage.getItem('rememberMe')).split('=')[1]);
      return new Promise((resolve, reject) => {
        this.$httpApi.basicSysApi.chartData.getSystems(params).then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
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
    getDormitoryObj () {
      return new Promise((resolve, reject) => {
        this.$httpApi.dormitorySysApi.chartData.dormitoryObj().then(res => {
          resolve(res);
        }).catch(error => {
          reject(error)
        })
      })
    },
    async getDataSys () {
      let resSys = await this.getSystemsData();
      if (resSys.status === 200) {
        this.sysList = resSys.data.data.serverList;
        this.token = resSys.data.data.token;
        for (let m in this.allSysList) {
          for (let n in this.sysList) {
            if (this.allSysList[m].sysTag === this.sysList[n].sysTag) {
              this.allSysList[m].authority = 'true';
              this.allSysList[m].serverLink = this.sysList[n].serverLink + '?token=' + this.token;
              break;
            }
          }
        }
      }
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
        console.log('考勤11')
        console.log(this.fieldObjData)
      }
      // 获取车辆数据
      let resVehicleObj = await this.getVehicleObj();
      if (resVehicleObj.data.status === 200) {
        this.vehicleObjData = Object.assign({}, resVehicleObj.data.data.percentObjData);
        console.log('考勤111')
        console.log(this.vehicleObjData)
      }
      // 获取宿舍数据
      let resDormitoryObj = await this.getDormitoryObj();
      console.log('resDormitoryObj')
      console.log(resDormitoryObj)
      if (resDormitoryObj.data.status === 200) {
        this.domitoryObjData = resDormitoryObj.data.data.expCount;
        console.log(resDormitoryObj)
        console.log(this.domitoryObjData)
      }
    },
    goBack () {
      this.$router.back(-1);
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }

  },
  created () {
    this.getDataSys();
    this.username = JSON.parse(sessionStorage.getItem('username')).split('=')[1];
  },
  mounted () {
    let monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    let dayNames = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    let newDate = new Date();
    newDate.setDate(newDate.getDate());
    this.dateT = newDate.getFullYear() + '年' + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ' ' + dayNames[newDate.getDay()];
    let self = this;
    setInterval(function () {
      let seconds = new Date().getSeconds();
      self.secT = (seconds < 10 ? '0' : '') + seconds;
    }, 1000);
    setInterval(function () {
      let minutes = new Date().getMinutes();
      self.minT = (minutes < 10 ? '0' : '') + minutes;
    }, 1000);
    setInterval(function () {
      let hours = new Date().getHours();
      self.hoursT = (hours < 10 ? '0' : '') + hours;
    }, 1000);
  }
}
</script>
<style>
.el-menu--horizontal {
  border-bottom: 0;
  /* background-color: #063362 !important; */
  background-color: #162b63 !important;
}
.el-menu-item {
  /* background-color: #063362 !important; */
  background-color: #162b63 !important;
}
.el-menu-item.is-active {
  border-bottom: 2px solid #26f3ff !important;
  color: #26f3ff !important;
}
.el-menu-item i {
  color: #fff;
}
.header {
  width: 100%;
  height: auto;
}
header .logo {
  float: left;
  color: rgb(255, 255, 255);
  width: 200px;
  height: 3.5rem;
  line-height: 3.5rem;
  background: url(../../assets/schoolLogo.png) no-repeat center center;
}
header .time {
  /* float: right; */
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
}
/*时间*/
header .clock {
  text-align: center;
  width: 20rem;
  display: inline-block;
}
header .clock i {
  font-size: 1.2rem;
}
header .clock ul li {
  display: inline;
  font-size: 1rem;
  text-align: center;
}
header .clock #point {
  position: relative;
  -moz-animation: mymove 1s ease infinite;
  -webkit-animation: mymove 1s ease infinite;
  padding-left: 5px;
  padding-right: 5px;
}
header i.el-icon-back {
  display: inline-block;
  color: #fff;
  position: relative;
  font-weight: bold;
  top: 1rem;
  right: 1rem;
  font-size: 1rem;
}
header .user-name {
  display: inline-block;
  color: #fff;
  position: relative;
  font-weight: bold;
  top: -1.2rem;
  right: 0.5rem;
  font-size: 1rem;
}
.user-avator {
  display: inline-block;
  color: #fff;
  position: relative;
  top: -1rem;
  right: 0.5rem;
}
@-webkit-keyframes mymove {
  0% {
    opacity: 1;
    text-shadow: 0 0 20px #00c6ff;
  }
  50% {
    opacity: 0;
    text-shadow: none;
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 20px #00c6ff;
  }
}

@-moz-keyframes mymove {
  0% {
    opacity: 1;
    text-shadow: 0 0 20px #00c6ff;
  }
  50% {
    opacity: 0;
    text-shadow: none;
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 20px #00c6ff;
  }
}
/*11111111111*/
.container {
  margin: 0;
  font-size: 1.4rem;
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
  width: calc(25% - 2rem);
  display: inline-block;
  margin: 1rem;
}
.navigation li a {
  display: block;
  /* width: 8em; */
  width: 100%;
  height: 4em;
  /* border-radius: 3em; */
  line-height: 4em;
  position: relative;
  text-align: center;
  background-color: #7564fc;
  border: 0;
  overflow: hidden;
  z-index: 1;
  margin: 0 auto;
  color: #fff;
}
.navigation li a i {
  display: block;
  position: absolute;
  font-size: 1.66666667em;
  top: 50%;
  left: 20%;
  color: #fff;
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
  left: 20%;
  color: #fff;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  opacity: 0;
  font-size: 1em;
  text-transform: uppercase;
  -moz-transition: all 0.25s 0.125s ease;
  -webkit-transition: all 0.25s 0.125s ease;
}
.navigation li:nth-child(3) a {
  background-color: #a74cf3;
}
.navigation li:nth-child(2) a {
  background-color: #0fc2d6;
}
.navigation li:nth-child(5) a {
  background-color: #ff305c;
}
.navigation li:nth-child(4) a {
  background-color: #3973d2;
}
.navigation li:nth-child(6) a {
  background-color: #b3490f;
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
