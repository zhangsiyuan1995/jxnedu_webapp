<template>
  <div id="teacherRank">
    <van-row class="trBg" type="flex" justify="space-around">
      <van-col span="23">
        <van-row class="trRb" type="flex" justify="space-around">
          <van-col class="trR2" span="8">
            <img src="../assets/img/sec.png" alt />
            <p>肖露</p>
            <h3>第二名</h3>
          </van-col>
          <van-col class="trR1" span="8">
            <img src="../assets/img/fir.png" alt />
            <p>肖露</p>
            <h2>第一名</h2>
          </van-col>
          <van-col class="trR3" span="8">
            <img src="../assets/img/tir.png" alt />
            <p>肖露</p>
            <h3>第三名</h3>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
      <van-col span="23">
        <van-row type="flex" class="monthR" justify="space-between">
          <van-col span="19">
            <img src="../assets/img/123.png" alt />
            <div>
              <h2>我的本月排名</h2>
              <p>更新时间:2020-01-01</p>
            </div>
          </van-col>
          <van-col span="5">
            <h2 class="rankNum">6</h2>
          </van-col>
        </van-row>
        <van-row class="rankTen">
          <van-col span="2">
            <p>排名</p>
          </van-col>
          <van-col span="7">
            <p>姓名</p>
          </van-col>
          <van-col span="5">
            <p>学生成绩</p>
          </van-col>
          <van-col span="5">
            <p>学员评价</p>
          </van-col>
          <van-col span="5">
            <p>课时量</p>
          </van-col>
          <van-row class="gardLine" v-for="(item,index) in teacherRank" :key="index">
            <van-col span="2" class="blackRank">
              <van-icon :class="generateClassName(index)"></van-icon>
            </van-col>
            <van-col class="blackRank" span="7">{{item.teaName}}</van-col>
            <van-col class="redRank" span="5">{{item.grade}}</van-col>
            <van-col class="redRank" span="5">{{item.eval}}</van-col>
            <van-col class="redRank" span="5">{{item.classNum}}</van-col>
          </van-row>
        </van-row>
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
  name: "teacherRank",
  methods: {
    generateClassName(index) {
      return "iconfont" + " " + "icon-" + (index + 1);
    }
  },
  data() {
    return {
      teacherRank: [
        {
          teaName: "张思远",
          grade: "98",
          eval: "95",
          classNum: "85"
        },
        {
          teaName: "张思远",
          grade: "98",
          eval: "95",
          classNum: "85"
        },
        {
          teaName: "张思远",
          grade: "98",
          eval: "95",
          classNum: "85"
        },
        {
          teaName: "张思远",
          grade: "98",
          eval: "95",
          classNum: "85"
        },
        {
          teaName: "张思远",
          grade: "98",
          eval: "95",
          classNum: "85"
        },
        {
          teaName: "张思远",
          grade: "98",
          eval: "95",
          classNum: "85"
        },
        {
          teaName: "张思远",
          grade: "98",
          eval: "95",
          classNum: "85"
        },
        {
          teaName: "张思远",
          grade: "98",
          eval: "95",
          classNum: "85"
        },
        {
          teaName: "张思远",
          grade: "98",
          eval: "95",
          classNum: "85"
        },
        {
          teaName: "张思远",
          grade: "98",
          eval: "95",
          classNum: "85"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.trBg {
  background: url("../assets/img/bg2.png") no-repeat 50% 50%;
  background-size: 100%;
}
.trRb {
  background: url("../assets/img/jt.png") no-repeat 50% 50%;
  background-size: 100%;
  padding: 30px 0;
}
.trR1,
.trR2,
.trR3 {
  text-align: center;
}
.trRb h3,
.trRb p,
.trRb h2 {
  margin: 10px 0;
}
.trRb h3,
.trRb h2 {
  color: red;
}
.trR2 img,
.trR3 img {
  margin-top: 45px;
  width: 30px;
}
.trR1 img {
  width: 40px;
  margin-top: 15px;
}
.monthR {
  background-color: white;
  border-radius: 5px;
  margin-top: 10px;
  padding: 20px 10px;
}
.rankTen {
  background-color: white;
  border-radius: 5px;
  margin-top: 10px;
  padding: 20px 10px;
  text-align: center;
  margin-bottom: 100px
} 
.rankTen p{
  color: #666666;
    padding-bottom: 15px;
}
.monthR img,
.monthR div {
  display: inline-block;
  vertical-align: bottom;
}
.monthR img {
  margin-right: 20px;
}
.monthR div h2 {
  margin-top: 0;
  font-weight: 350;
}
.monthR div p {
  color: #666;

}
.monthR img {
  width: 70px;
}
.rankNum {
  font-size: 38px;
  text-align: center;
  color: red;
  padding-top: 20px;
}
.van-tabs__nav .van-tabs__line {
  background-color: red;
}

#terRankNav div {
  color: white;
}
#terRankNav .van-icon {
  color: white;
}
#terRankNav {
  color: white;
  background: rgb(255, 31, 31);
  border: none;
}
.blackRank,
.redRank{
  font-size: 14px;
}
.blackRank .iconfont {
  font-size: 18px;
  vertical-align: top;
}
.redRank {
  color: red;
}
.gardLine{
  margin: 20px 0
}

</style>