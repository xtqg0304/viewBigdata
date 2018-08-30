import axios from 'axios';
// import { Message, MessageBox } from 'element-ui'
import store from '../store';

// 加上
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    // 每次发送请求之前检测都 vuex 存有 token,那么都要放在请求头发送给服务器
    if (store.state.token) {
      config.headers['user-token'] = `${store.state.token}`;
      // config.headers.Authorization = `token ${store.state.token}`
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    return response;
    // /**
    //  * code为非20000是抛错 可结合自己业务进行修改
    //  */
    // console.log(response)
    // const res = response.data.data
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    //   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     MessageBox.confirm(
    //       '你已被登出，可以取消继续留在该页面，或者重新登录',
    //       '确定登出',
    //       {
    //         confirmButtonText: '重新登录',
    //         cancelButtonText: '取消',
    //         type: 'warning'
    //       }
    //     ).then(() => {
    //       store.dispatch('LogOut').then(() => {
    //         location.reload() // 为了重新实例化vue-router对象 避免bug
    //       })
    //     })
    //   }
    //   return Promise.reject(new Error('error'))
    // } else {
    //   return response.data
    // }
  },
  error => {
    // 默认除了2XX之外的都是错误的，就会走这里
    if (error.response) {
      // window.location.href = 'http://www.baidu.com';
    }
    return Promise.reject(error.response.data);
  }
);

export default service;
