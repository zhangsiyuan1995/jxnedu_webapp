<template>
  <div id="noticeContent">
    <div class="elBg"></div>
    <van-row type="flex" justify="center">
      <van-col class="nContent" span="22">
        <van-row class="nContents">
          <van-col span="24">
            <div class="nTitle">
              <h2>文章标题</h2>
              <p>2020-1-1</p>
            </div>
            <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Col, Button, CellGroup, Image, Icon, Divider, Rate } from "vant";
Vue.use(Row)
  .use(Col)
  .use(Button)
  .use(Image)
  .use(Icon)
  .use(Divider)
  .use(Rate)
  .use(CellGroup);
export default {
  name: "noticeContent"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.elBg {
  height: 200px;
  background-color: rgb(81, 81, 255);
  width: 100%;
}
.nContent {
  position: relative;
  top: -150px;
}
.nContents {
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgb(212, 212, 212) 0px 0px 8px;
}
.nContent .nTitle {
    width: 100%;
  text-align: center
}
.nContent p{
    text-indent: 2rem
}
.nContent .nTitle p{
    text-align: right
}
</style>
