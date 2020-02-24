<template>
  <div id="personal">
    <van-row>
      <van-col span="24">
        <img class="perBg" src="../assets/img/bg3.png" alt />
      </van-col>
      <van-col span="20" offset="2">
        <div class="perBlock">
          <img class="perHead" src="../assets/img/pHead.png" alt />
        </div>
        <div class="perCho">
          <div class="perNa">
            <h4>Mei qi</h4>
            <p>1316228787</p>
          </div>
          <van-row class="threeB" type="flex" justify="space-around">
            <van-col>
              <router-link  to="/partRank">
                <van-icon name="medal-o" color="green" />
                <p>我的排名</p>
              </router-link>
            </van-col>
            <van-col>
              <router-link  to="/">
              <van-icon name="diamond-o" color="blue" />
              <p>学习</p>
              </router-link>
            </van-col>
            <van-col>
              <router-link  to="/gift">
              <van-icon name="gift-o" color="red" />
              <p>福利商城</p>
              </router-link>
            </van-col>
          </van-row>
          <div class="blueBlock">
            <van-cell is-link to="/attStatistics">
              <template slot="title">
                <van-icon class="blueIcon" name="notes-o" />
                <span class="custom-title">出勤统计</span>
              </template>
            </van-cell>
            <van-cell value="2" is-link to="/evaluationList">
              <template slot="title">
                <van-icon class="blueIcon" name="records" />
                <span class="custom-title">我的评价</span>
              </template>
            </van-cell>
            <van-cell is-link to="/">
              <template slot="title">
                <van-icon class="blueIcon" name="orders-o" />
                <span class="custom-title">带班统计</span>
              </template>
            </van-cell>
              <van-cell is-link to="/moneyList">
              <template slot="title">
                <van-icon class="blueIcon" name="calender-o" />
                <span class="custom-title">薪资详情</span>
              </template>
            </van-cell>
          </div>
          <div class="yellowBlock">
            <van-cell is-link to="/personalInfo">
              <template slot="title">
                <van-icon class="yellowIcon" name="idcard" />
                <span class="custom-title">基本资料</span>
              </template>
            </van-cell>
          </div>
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
  name: "personal"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.perBg {
  width: 100%;
  margin: 0;
}
.perHead {
  width: 80px;
}
.perBlock {
  text-align: center;
}
.perNa {
  background-color: white;
  padding: 30px 0 15px 0;
  text-align: center;
}
.blueBlock .blueIcon {
  font-size: 19px;
  color: rgb(0, 38, 255);
  vertical-align: middle;
  padding-bottom: 3px;
  margin-right: 10px;
}
.blueBlock {
  margin-top: 10px;
}
.yellowBlock .yellowIcon {
  font-size: 19px;
  color: rgb(255, 187, 0);
  vertical-align: top;
  margin-right: 10px;
}
.yellowBlock {
  margin-top: 10px;
}
.perNa,
.blueBlock,
.yellowBlock {
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px #e4e3e3;
}
.perCho {
  position: relative;
  top: -180px;
}
.perHead {
  position: relative;
  z-index: 10;
}
.perBlock {
  position: relative;
  top: -140px;
}
.perNa h4 {
  color: #333;
  font-size: 18px;
  margin-bottom: 7px;
  font-family: "黑体";
  font-weight: 200;
}
.perNa p {
  color: #666;
  font-family: "黑体";
  font-size: 15px;
}
.threeB {
  background-color: white;
  text-align: center;
  margin-top: 12px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px #e4e3e3;
  padding: 10px 0;
}
.threeB .van-icon {
  font-size: 25px;
  vertical-align: middle;
}
.threeB .van-button {
  border: none;
}
.threeB p {
  color: #666;
  margin-bottom: 0
}
</style>
