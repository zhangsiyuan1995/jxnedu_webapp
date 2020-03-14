<template>
  <div id="app">
    <van-sticky>
      <navbar v-if="$route.meta.keepAlive"></navbar>
    </van-sticky>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script type="text/javascript" src="cordova.js"></script>
 <script type="text/javascript" src="cordova_plugins.js"></script>
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
  },
  mounted() {
    document.addEventListener("deviceready", onDeviceReady, false);
    var me = this;
    function onDeviceReady() {
      me.msg = "cordova is ready";
    }
  }
};
</script>

<style>
</style>
