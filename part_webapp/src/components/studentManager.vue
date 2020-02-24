<template>
  <div id="studentManager">
    <div class="smBg">
      <h1>学生管理</h1>
    </div>
    <van-row type="flex" justify="center">
      <van-col span="22" class="smBlock">
        <van-cell is-link class="smCell" :to="item.to" v-for="(item,index) in data" :key="index">
          <!-- 使用 title 插槽来自定义标题 -->
          <template slot="icon">
            <img :src="item.src" alt />
          </template>
          <template slot="title">
            <span class="custom-title">{{item.name}}</span>
            <p>{{item.label}}</p>
          </template>
        </van-cell>
      </van-col>
    </van-row>
    <!-- <van-button type="info" size="large" to="">二维码</van-button>
    <van-button type="danger" size="large" to="/scoreEntry">成绩录入</van-button>
    <van-button type="primary" size="large" to="/notice">通知提醒</van-button>
    <van-button type="warning" size="large" to="/register">签到数据查看</van-button>-->
  </div>
</template>
<script>
import Vue from "vue";
import { Image, Row, Col, Icon, Cell } from "vant";
Vue.use(Image)
  .use(Row)
  .use(Cell)
  .use(Icon)
  .use(Col);
export default {
  name: "studentManager",
  data(){
    return{
      data:[{
        src:require("../assets/img/qrCode.png"),
        name:"生成签到二维码",
        label:"生成签到二维码便于学生签到",
        to:"/qrcode"
      },
{
        src:require("../assets/img/input.png"),
        name:"学生成绩录入",
        label:"录入每个学生的测试成绩",
        to:"/scoreEntry"
      },
      {
        src:require("../assets/img/notice.png"),
        name:"通知提醒",
        label:"对所选班级发出通知",
        to:"/notice"
      },
      {
        src:require("../assets/img/sign.png"),
        name:"签到数据查看",
        label:"查看学生签到数据",
        to:"/register"
      },
      ]
    }
  }
};
</script>
<style>
.smBg {
  background: url("../assets/img/smBg.png") no-repeat;
  background-size: 100% 100%;
  padding: 70px 20px;
  color: white;
}
.smBg h1 {
  font-weight: 350;
}
.smCell img{
  width: 40px;
  height: 40px;
  position: relative;
  top: 5px;
}
.smCell p{
  margin: 5px 0;
  color: rgb(155, 155, 155)
}
#studentManager .smCell{
  padding: 30px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
}
#studentManager .van-cell__title{
  padding-left: 15px
}
#studentManager .smCell .van-icon{
  font-size: 25px;
  position: relative;
  top: 10px;
}
.smBlock{
  position: relative;
  top: -50px;
}
</style>