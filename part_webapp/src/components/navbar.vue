<template>
  <van-nav-bar
    :id="$route.meta.id"
    :title="$route.meta.title"
    left-arrow
    @click-left="onClickLeft"
    class="nav"
    @click-right="onClickRight"
  >
    <template :v-if="$route.meta.newsAdd">
      <van-icon name="plus" slot="right" />
    </template>
  </van-nav-bar>
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
    },
    onClickRight() {
      this.$router.push('/noticeAdd');
    }
  }
};
</script>

<style>
</style>
