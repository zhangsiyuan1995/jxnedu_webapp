<template>
  <van-nav-bar :title="$route.meta.title" left-arrow @click-left="onClickLeft" class="nav" />
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
export default {
  props: {
    title: { default: "" }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>
