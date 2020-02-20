import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from "./router.js"

import './style.scss'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.prototype.$http=axios;  

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


axios.defaults.baseURL = '#';  
axios.defaults.timeout=1000, 
axios.defaults.headers={'Content-Type': 'text/html;charset=gb2312'}  
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
 
    return config;
  },
  error => {
    return Promise.reject(error);
  });