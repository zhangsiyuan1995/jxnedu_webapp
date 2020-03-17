<template>
  <div id="personal">
    <van-row>
      <van-col span="22" offset="1">
        <van-row class="van-hairline--bottom" type="flex" justify="space-between">
          <van-col span="11">
            <div class="feeBlue">
              <p>收入(元)</p>
              <img src="../assets/img/chart.png" alt />
              <h2>+598</h2>
              <p>本月费用</p>
            </div>
          </van-col>
          <van-col span="11">
            <div class="feeRed">
              <p>扣款(元)</p>
              <img src="../assets/img/chart.png" alt />
              <h2>+598</h2>
              <p>本月费用</p>
            </div>
          </van-col>
        </van-row>
        <h3>本月课时费共28项组成</h3>
        <div class="feeComp">
          <h2>课时费组成</h2>
          <van-cell v-for="(item,index) in feeComp" :key="index" :value="item.money">
            <template slot="title">
              <span class="custom-title">{{item.classN}}</span>
            </template>
            <template slot="label">{{item.time}}</template>
            <template slot="icon" v-if="item.money>0">
              <van-image :src="imgIn"></van-image>
            </template>
            <template slot="icon" v-if="item.money<0">
              <van-image :src="imgOut"></van-image>
            </template>
          </van-cell>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Col, Cell, CellGroup, Image, Icon, Divider } from "vant";
Vue.use(Row)
  .use(Col)
  .use(Cell)
  .use(Image)
  .use(Icon)
  .use(Divider)
  .use(CellGroup);
export default {
  name: "personal",
  data() {
    return {
      imgOut: require("../assets/img/feeOut.png"),
      imgIn: require("../assets/img/feeIn.png"),
      income: "",
      deduction: "",
      feeComp: [
        {
          classN: "19寒假点睛班",
          time: "2020-01-12",
          money: -18
        },
        {
          classN: "19寒假点睛班",
          time: "2020-01-12",
          money: 18
        },
        {
          classN: "19寒假点睛班",
          time: "2020-01-12",
          money: 18
        },
        {
          classN: "19寒假点睛班",
          time: "2020-01-12",
          money: -18
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.feeBlue {
  background: linear-gradient(to right, #4e84f1, #4c69f6);
  padding: 15px 10px;
  color: #ffffff;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 0px 2px #d3e1ff;
}
.feeRed {
  background: linear-gradient(to right, #f2564b, #f83b3a);
  padding: 15px 10px;
  color: #ffffff;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 0px 2px #ffd4d1;
}
.feeBlue :first-child {
  display: inline-block;
  margin: 0;
  font-size: 10px;
}
.feeBlue img {
  display: inline-block;
  width: 30px;
  vertical-align: top;
  float: right;
}
.feeBlue p:nth-child(4) {
  text-align: right;
  margin-bottom: 0;
  font-size: 10px;
}

.feeRed :first-child {
  display: inline-block;
  margin: 0;
  font-size: 10px;
}
.feeRed img {
  display: inline-block;
  width: 30px;
  vertical-align: top;
  float: right;
}
.feeRed p:nth-child(4) {
  text-align: right;
  margin-bottom: 0;
  font-size: 10px;
}
.feeRed h2,.feeRed p,.feeBlue h2,.feeBlue p{
  display: inline-block;
  width: 50%;
}
.feeBlue h2,
.feeRed h2 {
  font-weight: 150;
}
.feeComp {
  background-color: white;
  padding: 15px 10px 15px 0;
  border-radius: 5px;
  box-shadow: 0px 0px 0px 2px #f1f1f1;
}
.feeComp .van-cell__value {
  font-size: 18px;
  margin-top: 10px;
}
.feeComp img {
  width: 40px;
  height: 40px;
  vertical-align: top;
  margin-right: 5px;
}
.feeComp h2 {
  margin-left: 15px;
  font-weight: 350;
}
</style>
