<template>
  <van-tabbar class="tag" route>
    <van-tabbar-item replace v-for="(item,index) in tabbars" :key="index" :icon="item.icon" :to="item.path">{{item.name}}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      tabbars: [
        {
          path: "/home",
          icon: "home-o",
          name: "首页"
        },
        {
          path: "/myClass",
          icon: "friends-o",
          name: "我的班级"
        },
        {
          path: "/partTime",
          icon: "label-o",
          name: "助教监督"
        },
        {
          path: "/personal",
          icon: "user-o",
          name: "个人中心"
        }
      ]
    };
  }
};
</script>

<style>
</style>
