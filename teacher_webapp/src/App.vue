<template>
  <div id="app">
    <transition name="van-fade">
      <router-view></router-view>
    </transition>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem, Sticky } from "vant";
import tabbar from "./components/tabbar";
import "./assets/css/icon/iconfont.css";
Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Sticky);
export default {
  name: "app",
  components: {
    tabbar
  },
// watch:{
//   $route(to){
//     to.meta.title
//   }
// }
};
</script>

<style>
</style>
