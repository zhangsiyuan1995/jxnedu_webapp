<template>
  <div id="personalInfo">
    <van-cell class="perInfoHead" title="头像" :style="{margin:'5px 0 0 0'}">
      <van-image slot="right-icon" :src="headImg" style="line-height: inherit;" />
    </van-cell>
    <van-cell title="姓名" value="梁苏萌" />
    <van-cell title="性别" value="女" />
    <van-cell title="所在院校" value="河北师范大学" />

    <van-cell title="联系方式" value="1300000000" :style="{margin:'5px 0 0 0'}" />
    <van-cell title="报名日期" value="2010-1-1" />

    <van-row class="rpB" type="flex" justify="center">
      <van-col span="22">
        <van-button type="primary" size="large" color="#209aff">退出登录</van-button>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import Vue from "vue";
import {
  Row,
  Col,
  Picker,
  Button,
  Cell,
  CellGroup,
  Field,
  Collapse,
  CollapseItem,
  Popup
} from "vant";
Vue.use(Picker)
  .use(Col)
  .use(Row)
  .use(Button)
  .use(Cell)
  .use(Field)
  .use(Collapse)
  .use(CollapseItem)
  .use(Popup)
  .use(CellGroup);
export default {
  name: "personalInfo",
  data() {
    return {
      headImg: require("../assets/img/head.png")
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.perInfoHead img {
  width: 50px;
}
.perInfoHead span {
  position: relative;
  top: 20px;
}
</style>
