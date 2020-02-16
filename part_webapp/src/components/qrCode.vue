<template>
  <div id="qrCode">
    <div class="qrB">
      <h1>签到二维码</h1>
      <qriously :value="qrcode" :size="200" />
    </div>
    <div class="qrB2">
      <h3>说明性文字</h3>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Image, Row, Col } from "vant";

Vue.use(Image)
  .use(Row)
  .use(Col);
export default {
  name: "qrCode",
  data() {
    return {
      qrcode: "www.baidu.com"
    };
  }
};
</script>
<style>
html{
    height: 100%;
}
body{
   height: inherit;
}
#app{
   height: inherit;
}
#qrCode {
  background: linear-gradient(to right, #98d1ce, #7db8cb);
  padding: 50px 25px;
  height: 100%;
}
.qrB {
  text-align: center;
  background-color: white;
  padding: 50px 20px;
  border-radius: 10px;
}
.qrB2 {
  text-align: center;
  background-color: white;
  padding: 30px 20px;
  border-radius: 10px;
  border-top: dashed 1px rgb(223, 223, 223);
  margin-bottom: 20px
}
.qrB h1 {
  margin: 0 0 40px 0;
}
#app #qrCodeNav {
  background: linear-gradient(to right, #98d1ce, #7db8cb);
}
#app #qrCodeNav .van-icon{
  color: white;
}
#app #qrCodeNav div{
  color: white;
}
#app #qrCodeNav::after{
    border: none
}
</style>