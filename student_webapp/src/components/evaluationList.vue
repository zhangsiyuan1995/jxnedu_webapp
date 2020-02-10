<template>
  <div id="evaloutaionList">
    <div class="elBg"></div>

    <van-row type="flex" justify="center">
      <van-col class="elcontent" span="22">
        <van-row>
          <van-col span="24">
            <img src="../assets/img/pHead.png" alt />
            <div>
              <h3>Mei qi</h3>
              <p>帐号：10000000</p>
            </div>
          </van-col>
          <van-col class="evaBlock" span="24" v-for="(item,index) in evaList" :key="index">
            <h4>我的评分：</h4>
            <van-rate v-model="item.value" allow-half readonly />
            <p>{{item.content}}</p>
            <div class="evaName">
              <h4>受评教师：{{item.name}} {{item.date}}</h4>
            </div>
            <van-divider :style="{margin:'0',width:'100%'}"/>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Col, Cell, CellGroup, Image, Icon, Divider, Rate } from "vant";
Vue.use(Row)
  .use(Col)
  .use(Cell)
  .use(Image)
  .use(Icon)
  .use(Divider)
  .use(Rate)
  .use(CellGroup);
export default {
  name: "evaloutaionList",
  data() {
    return {
      value: 2.5,
      evaList: [
        {
          value: 5,
          content: "内容内容内容内容内容内容内容内容内容内容",
          name: "梁苏萌",
          date: "2020-1-1"
        },
        {
          value: 5,
          content: "内容内容内容内容内容内容内容内容内容内容",
          name: "梁苏萌",
          date: "2020-1-1"
        },
        {
          value: 5,
          content: "内容内容内容内容内容内容内容内容内容内容",
          name: "梁苏萌",
          date: "2020-1-1"
        },
        {
          value: 5,
          content: "内容内容内容内容内容内容内容内容内容内容",
          name: "梁苏萌",
          date: "2020-1-1"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.elBg {
  height: 200px;
  background-color: rgb(81, 81, 255);
  width: 100%;
}
.elcontent {
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgb(212, 212, 212) 0px 0px 8px;
  position: relative;
  top: -100px
}
.elcontent img,
.elcontent div {
  display: inline-block;
  vertical-align: middle;
}
.elcontent div p {
  color: #666;
}
.elcontent img {
  width: 60px;
  margin-right: 15px;
}
.evaBlock {
  margin-top: 20px;
}
.evaBlock h4 {
  display: inline;
  vertical-align: bottom;
  font-size: 14px;
  font-weight: 300;
  color: #666;
}
.evaBlock p {
  line-height: 20px;
  font-size: 15px;
  color: black;
  font-family: "黑体";
}
.evaName {
  background-color: rgb(245, 245, 245);
  padding: 10px;
  width: 100%;
}
.evaName h4 {
  font-size: 12px;
  color: rgb(197, 197, 197);
}
</style>
