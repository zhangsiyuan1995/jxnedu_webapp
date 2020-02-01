<template>
  <div id="notice">
    <van-row>
      <van-col span="24">
        <img class="banner" src="../assets/img/banner2.png" alt />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Row,
  Col,
  Cell,
  CellGroup,
  Divider
} from "vant";
Vue.use(Row)
  .use(Col)
  .use(Cell)
  .use(Divider)
  .use(CellGroup);
export default {
      name: "notice",

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
