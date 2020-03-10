<template>
  <div id="notice">
    <van-row>
      <van-col span="24">
        <img class="banner2" src="../assets/img/banner2.png" alt />
      </van-col>
    </van-row>
    <van-row type="flex" justify="center" style="background:white">
      <van-col span="23">
        <van-cell is-link v-for="(item,index) in noticeList" :key="index" :to="item.link">
          <!-- 使用 title 插槽来自定义标题 -->
          <template slot="title">
            <img class="labaB" src="../assets/img/labaB.png" alt />
            <span class="custom-title">{{item.title}}</span>
          </template>
          <template slot="label">
            <p class="noticLable">{{item.label}}</p>
          </template>
        </van-cell>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Col, Cell, CellGroup, Divider } from "vant";
Vue.use(Row)
  .use(Col)
  .use(Cell)
  .use(Divider)
  .use(CellGroup);
export default {
  name: "notice",
  data() {
    return {
      noticeList: [
        {
          title: "标题标题",
          label: "摘要摘要",
          link: "noticeContent"
        },
        {
          title: "标题标题",
          label: "摘要摘要",
          link: "#"
        },
        {
          title: "标题标题",
          label: "摘要摘要",
          link: "#"
        },
        {
          title: "标题标题",
          label: "摘要摘要",
          link: "#"
        },
        {
          title: "标题标题",
          label: "摘要摘要",
          link: "#"
        },
        {
          title: "标题标题",
          label: "摘要摘要",
          link: "#"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html{
  height: 100%;
}
body{
  height: inherit;
}
.banner2{
  width: 100%
}
.noticLable {
  padding-left: 25px;
}
.labaB {
  width: 16px;
  margin-right: 10px;
}
</style>
