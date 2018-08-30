// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'url-search-params-polyfill';
import 'babel-polyfill';
import Vue from 'vue';
// 引入v-charts
import VCharts from 'v-charts';
import App from './App';
import router from './router';

// 引入 veux , 相对路径
import store from './store';
import httpApi from './api';

import 'v-charts/lib/style.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import './assets/icon/iconfont.css'; // 引入阿里巴巴图标库

import './mock'; // 数据模拟，一般在接口未开发完成快速
Vue.config.productionTip = false;
Vue.use(VCharts);
Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$httpApi = httpApi;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
