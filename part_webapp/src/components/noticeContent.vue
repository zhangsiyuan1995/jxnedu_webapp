<template>
  <div id="noticeContent">
    <div class="ncBg">
      <van-row class="ntContent" type="flex" justify="center">
        <van-col span="22">
          <van-row class="ntContents">
            <van-col span="24">
              <div class="ncTitle">
                <h2>文章标题</h2>
                <p>2020-1-1</p>
              </div>
              <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Col, Button, Image, Icon, Divider, Rate } from "vant";
Vue.use(Row)
  .use(Col)
  .use(Button)
  .use(Image)
  .use(Icon)
  .use(Divider)
  .use(Rate);
export default {
  name: "noticeContent"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.ncBg {
  height: inherit;
  background-color: rgb(142, 219, 255);
  width: 100%;
  padding: 20px 0;
}
.ntContent .van-row ,.ntContent .van-col{
  height: inherit;
}
.ntContent{
   height: inherit;
}
#noticeContent {
  height: inherit;
}
.ntContents {
  height: inherit;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgb(212, 212, 212) 0px 0px 8px;
}
.ntContent .ncTitle {
  width: 100%;
  text-align: center;
}
.ntContent p {
  text-indent: 2rem;
  line-height: 22px;
  color: #666;
}
.ntContent .ncTitle p {
  text-align: right;
}
</style>
