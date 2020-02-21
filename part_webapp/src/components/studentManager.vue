<template>
  <div id="studentManager">
    <van-button type="info" size="large" to="/qrcode">二维码</van-button>
    <van-button type="danger" size="large" to="/scoreEntry">成绩录入</van-button>
    <van-button type="primary" size="large">通知提醒</van-button>
    <van-button type="warning" size="large" to="/register">签到数据查看</van-button>
  </div>
</template>
<script>
import Vue from "vue";
import { Image, Row, Col } from "vant";

Vue.use(Image)
  .use(Row)
  .use(Col);
export default {
  name: "studentManager"
};
</script>
<style>
</style>