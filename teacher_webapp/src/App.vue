<template>
  <div id="app">
    <van-sticky>
      <navbar v-if="$route.meta.keepAlive"></navbar>
    </van-sticky>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem, Sticky } from "vant";
import tabbar from "./components/tabbar";
import "./assets/css/icon/iconfont.css";
import navbar from "./components/navbar";
Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Sticky);
export default {
  name: "app",
  components: {
    tabbar,
    navbar
  }
  // watch:{
  //   $route(to){
  //     to.meta.title
  //   }
  // }
};
</script>

<style>
</style>
