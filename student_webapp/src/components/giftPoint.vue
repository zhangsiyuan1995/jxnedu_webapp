<template>
  <div id="giftPoint">
    <van-row>
      <van-col span="24">
        <img class="banner" src="../assets/img/bannerPoint.png" alt />
      </van-col>
    </van-row>

    <van-row class="pointBlock" type="flex" justify="center">
      <van-col span="22">
        <div class="pointBg">
          <img src="../assets/img/pHead.png" alt />
          <p>Mei qi</p>
          <div>
            <h2>
              676积分
              <van-icon name="gem" />
            </h2>
            <h3>共有33条获取到的积分记录</h3>
          </div>
        </div>
        <van-cell class="giftCell" v-for="(item,index) in pointList" :key="index" :value="item.point">
          <template slot="title">
            <span class="custom-title">{{item.name}}</span>
          </template>
          <template slot="label">{{item.date}}</template>
          <van-icon slot="right-icon" name="gem" style="line-height: inherit;" />
        </van-cell>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import Vue from "vue";
import {
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
  .use(Button)
  .use(Cell)
  .use(Field)
  .use(Collapse)
  .use(CollapseItem)
  .use(Popup)
  .use(CellGroup);
export default {
  name: "giftPoint",
  data() {
    return {
      name:"张思远",
      total:"676",
      num:"33",
      pointList: [
        {
          name: "10寒假点睛班",
          date: "2020-1-1",
          point: "+18"
        },
        {
          name: "10寒假点睛班",
          date: "2020-1-1",
          point: "+18"
        },
        {
          name: "10寒假点睛班",
          date: "2020-1-1",
          point: "+18"
        },
        {
          name: "10寒假点睛班",
          date: "2020-1-1",
          point: "+18"
        },
        {
          name: "10寒假点睛班",
          date: "2020-1-1",
          point: "+18"
        },
        {
          name: "10寒假点睛班",
          date: "2020-1-1",
          point: "+18"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.pointBg {
  width: 100%;
  background: url(../assets/img/pointBg.png) 50% 50% no-repeat;
  background-size: 100%;
  padding: 20px;
}
.pointBg img {
  width: 50px;
  display: inline-block;
}
.pointBg p {
  display: inline;
  font-size: 18px;
  font-family: "黑体";
  margin-left: 20px;
  position: relative;
  bottom: 18px;
}
.pointBg div {
  text-align: center;
}
.pointBg h2,
.pointBg h3 {
  font-weight: 400;
}
.pointBg h3 {
  color: #8b614b;
}
.pointBg div .van-icon {
  vertical-align: bottom;
}
#giftPoint {
  background-color: white;
}
.giftCell .van-icon {
  font-size: 20px;
  color: rgb(129, 219, 255);
  vertical-align: middle;
  position: relative;
  top: 8px;
}
.giftCell .van-cell__value span {
  font-size: 20px;
  color: black;
  padding-right: 10px;
  font-family: "黑体";
  position: relative;
  top: 8px;
}
.pointBlock{
    position: relative;
    top: -150px
}
</style>
