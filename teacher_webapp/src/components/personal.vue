<template>
  <div id="personal">
    <van-row>
      <van-col span="24">
        <img class="perBg" src="../assets/img/bg3.png" alt />
      </van-col>
      <van-col span="22" offset="1">
        <div class="perBlock">
          <img class="perHead" src="../assets/img/pHead.png" alt />
        </div>
        <div class="perCho">
          <div class="perNa">
            <h4>{{name}}</h4>
            <p>{{phone}}</p>
          </div>
          <div class="blueBlock">
            <van-cell :value="classFee" is-link  to="/tuitionFee">
              <template slot="title">
                <van-icon class="blueIcon"  name="pending-payment"/>
                <span class="custom-title">我的课时费</span>
              </template>
            </van-cell>
            <van-cell is-link to="/attStatistics">
              <template slot="title">
                <van-icon class="blueIcon" name="notes-o" />
                <span class="custom-title">我的出勤统计</span>
              </template>
            </van-cell>
            <van-cell :value="rank" is-link to="/teacherRank">
              <template slot="title">
                <van-icon class="blueIcon" name="chart-trending-o" />
                <span class="custom-title">我的排名</span>
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
  name: "personal",
  data(){
    return{
      id:"12",
      name:"王雅倩",
      phone:"13710111111",
      classFee:"355",
      rank:"6"
    }
  }
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
  color: #209aff;
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
.perNa,.blueBlock,.yellowBlock{
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0px 0px 0px 1px #f5f5f5;
}
.perCho{
  position: relative;
  top: -180px
}
.perHead{
  position: relative;
  z-index: 10;
}
.perBlock{
  position: relative;
  top: -140px
}
.perNa h4{
  color: #333;
  font-size: 18px;
  margin-bottom: 7px;
  font-family: "黑体";
  font-weight: 200
}
.perNa p{
  color: #666;
 font-family: "黑体";
 font-size: 15px;
}
</style>
