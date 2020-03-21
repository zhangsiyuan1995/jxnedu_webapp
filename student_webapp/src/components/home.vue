<template>
  <div id="index">
    <van-row>
      <van-col span="24">
        <img class="banner" src="../assets/img/banner.png" alt />
        <van-button class="scan" icon="scan" plain type="info" />
      </van-col>
    </van-row>
    <van-row>
      <van-col class="group" span="22" offset="1">
        <van-cell value is-link to="/myCourses">
          <!-- 使用 title 插槽来自定义标题 -->
          <template slot="title">
            <img class="titImg" src="../assets/img/title1.png" alt />
            <span class="custom-title">课程信息</span>
          </template>
        </van-cell>
        <div class="groupblock">
          <div>
            <p>正在开课</p>
            <p>
              <img src="../assets/img/clock.png" alt />
            </p>
            <p>{{data.classPlan.class}}</p>
          </div>
        </div>
        <div class="groupblock">
          <div>
            <p>剩余课程</p>
            <p>
              <img src="../assets/img/clock.png" alt />
            </p>
            <p>{{data.classPlan.remainingclass}}</p>
          </div>
        </div>
        <div class="groupblock">
          <div>
            <p>上课地点</p>
            <p>
              <img src="../assets/img/clock.png" alt />
            </p>
            <p>{{data.classPlan.position}}</p>
          </div>
        </div>
        <div class="groupblock">
          <div>
            <p>上课内容</p>
            <p>
              <img src="../assets/img/clock.png" alt />
            </p>
            <p>{{data.classPlan.content}}</p>
          </div>
        </div>
      </van-col>
      <van-col class="group" span="22" offset="1">
        <van-cell value is-link to="/Notice">
          <!-- 使用 title 插槽来自定义标题 -->
          <template slot="title">
            <img class="titImg" src="../assets/img/title2.png" alt />
            <span class="custom-title">通知</span>
          </template>
        </van-cell>

        <van-notice-bar
          color="#1989fa"
          :text="data.notice"
          background="#ecf9ff"
          left-icon="info-o"
        />
        <div class="groupblock" v-for="(item,index) in data.myClass" :key="index">
          <van-divider v-if="index!=0" dashed :style="{margin:0,padding:0}"></van-divider>
          <div>
            <p>
              <img src="../assets/img/laba.png" alt />
            </p>
            <p>{{item.name}}</p>
          </div>
        </div>
      </van-col>
      <van-col class="group" span="22" offset="1">
        <van-cell value is-link to="/attStatistics">
          <template slot="title">
            <img class="titImg" src="../assets/img/title3.png" alt />
            <span class="custom-title">出勤统计</span>
          </template>
        </van-cell>
        <van-row type="flex" justify="space-between" style="background:white">
          <van-col span="6">
            <div class="roundP">
              <div class="round" style="background:#209aff">
                <h2>{{data.attendance.should}}</h2>
              </div>
              <h5>应出勤天数</h5>
            </div>
          </van-col>
          <van-col span="6">
            <div class="roundP">
              <div class="round" style="background:#947ffb">
                <h2>{{data.attendance.actual}}</h2>
              </div>
              <h5>出勤天数</h5>
            </div>
          </van-col>
          <van-col span="6">
            <div class="roundP">
              <div class="round" style="background:#fd9392">
                <h2>{{data.attendance.rest}}</h2>
              </div>
              <h5>休息天数</h5>
            </div>
          </van-col>
          <van-col span="6">
            <div class="roundP">
              <div class="round" style="background:#f7a623">
                <h2>{{data.attendance.avg}}</h2>
              </div>
              <h5>请假次数</h5>
            </div>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from "vue";

import {
  Row,
  Col,
  Cell,
  CellGroup,
  Image,
  Icon,
  Divider,
  NoticeBar
} from "vant";
Vue.use(Row)
  .use(Col)
  .use(NoticeBar)
  .use(Cell)
  .use(Image)
  .use(Icon)
  .use(Divider)
  .use(CellGroup);
export default {
  name: "home",
  data() {
    return {
      data: {
        classPlan: {
          class: "20秋季点睛班",
          remainingclass: "20秋季点睛班",
          position: "河北城乡建设学校",
          content: "上课内容"
        },
        notice:
          "通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容",
        myClass: [
          {
            id: "1",
            name: "2020寒假班"
          },
          {
            id: "1",
            name: "2020寒假班"
          },
          {
            id: "1",
            name: "2020寒假班"
          }
        ],
        attendance: {
          should: "50",
          actual: "50",
          rest: "50",
          avg: "50"
        }
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#index {
  margin-bottom: 30px;
}
.banner {
  width: 100%;
  margin: 0;
}
.groupblock {
  background-color: white;
}
.groupblock div {
  padding: 12px;
  display: inline;
}
.groupblock div p,
.groupblock img {
  display: inline-block;
  margin-right: 15px;
  vertical-align: top;
}
.groupblock div img {
  width: 15px;
  margin-right: 0;
}
.group {
  text-align: left;
  border: white solid 1px;
  border-radius: 5px;
  margin-bottom: 15px;
  position: relative;
  top: -60px;
}
.custom-title {
  font-size: 16px;
}
.titImg {
  width: 22px;
  margin-right: 5px;
  vertical-align: top;
}
#index .round {
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  color: white;
  margin-right: 0;
  position: relative;
  left: 7px;
}
.roundP {
  padding: 7px;
  text-align: center;
}
.round h2 {
  margin: 0;
}
#index .scan {
  float: right;
  position: relative;
  top: -240px;
  right: 12px;
  background-color: rgba(235, 229, 229, 0);
  border: none;
}
.scan i {
  font-size: 25px;
}
.rpB {
  position: fixed;
  background-color: white;
  padding: 10px 0;
  bottom: 0;
  width: 100%;
}
</style>
