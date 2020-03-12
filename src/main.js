import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Button, Select } from 'element-ui'
import App from './App.vue'
// 不加 ./ 会认为env是插件，import自己的文件，需要指定路径
// import env from './env'

const mock = true;
if(mock) {
  require('./mock/api');
}

// https://www.npmjs.com/package/axios   Interceptors
// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
// 暂定为接口代理的方式
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL

// 响应接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if(res.status == 0) { // 成功
    return res.data;
  } else if(res.status == 10) { // 自定义状态码，未登录
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)

new Vue({
  // router: router,
  router,
  render: h => h(App)
}).$mount('#app')
