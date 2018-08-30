<template>
  <header class="title">
    <div class="clock">
      <i id="Date" class="el-icon-time">{{dateT}}</i>
      <ul>
        <li id="hours">{{hoursT}} </li>
        <li id="point">:</li>
        <li id="min"> {{minT}}</li>
        <li id="point">:</li>
        <li id="sec"> {{secT}}</li>
      </ul>
    </div>
    <router-link to="/">
      <i class="el-icon-back" v-if="$route.path!='/'">返回</i>
    </router-link>
    <div class="leftNav" v-if="$route.path=='/'">
      <a :href="allSysList[1].serverLink">
        <i class="el-icon-sys-dormitory" title="宿舍系统"></i>
      </a>
      <a :href="allSysList[5].serverLink">
        <i class="el-icon-sys-view" title="可视化系统"></i>
      </a>
      <a :href="allSysList[4].serverLink">
        <i class="el-icon-sys-basics" title="基础信息系统"></i>
      </a>
    </div>
    <div class="rightNav" v-if="$route.path=='/'">
      <a :href="allSysList[0].serverLink">
        <i class="el-icon-sys-vehicle" title="车辆系统"></i>
      </a>
      <a :href="allSysList[2].serverLink">
        <i class="el-icon-sys-door" title="门禁系统"></i>
      </a>
      <a :href="allSysList[3].serverLink">
        <i class="el-icon-sys-field" title="场地预约系统"></i>
      </a>
    </div>

  </header>
</template>
<script>
export default {
  name: 'Header',
  props: ['allSysList'],
  data () {
    return {
      dateT: '',
      secT: '',
      minT: '',
      hoursT: ''
    }
  },
  methods: {
  },
  created () {
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
/*时间*/
header .clock {
  position: relative;
  top: -5rem;
  left: 40%;
  color: #fff;
  text-align: center;
  width: 20rem;
}
header .clock i {
  font-size: 1.6rem;
}
header .clock ul li {
  display: inline;
  font-size: 1em;
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
  position: absolute;
  top: 12px;
  left: 12px;
  color: #2087d7;
  font-weight: bold;
}
header .leftNav,
header .rightNav {
  position: absolute;
}
header .leftNav a,
header .rightNav a {
  display: inline-block;
  width: 8rem;
  text-align: center;
  line-height: 3rem;
  /* border: 2px solid #2087d7; */
  transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
}
header .leftNav a:hover,
header .rightNav a:hover {
  -webkit-transform: rotate(1080deg);
  -moz-transform: rotate(1080deg);
  -ms-transform: rotate(1080deg);
  transform: rotate(1080deg);
}
header .leftNav i,
header .rightNav i {
  color: #2087d7;
  font-weight: normal;
  font-size: 1.5rem;
}
header .leftNav {
  top: 0;
  left: 0;
  height: 3rem;
  line-height: 3rem;
}
header .rightNav {
  top: 0;
  right: 0;
  height: 3rem;
  line-height: 3rem;
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
</style>
