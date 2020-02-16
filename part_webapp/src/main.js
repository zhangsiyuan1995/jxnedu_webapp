import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"
import VueQriously from 'vue-qriously'
import './style.scss'
import 'vant/lib/index.css';
Vue.config.productionTip = false

Vue.use(VueQriously)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
