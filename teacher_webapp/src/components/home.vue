<template>
  <div id="index">
    <van-row>
      <van-col span="24">
        <img class="banner" src="../assets/img/banner.png" alt />
      </van-col>
    </van-row>
    <van-row>
      <van-col class="group" span="22" offset="1">
        <van-cell value is-link>
          <!-- 使用 title 插槽来自定义标题 -->
          <template slot="title">
            <img class="titImg" src="../assets/img/title1.png" alt />
            <span class="custom-title">我的排班</span>
          </template>
        </van-cell>
        <div class="groupblock">
          <div>
            <p>上课时间</p>
            <p>
              <img src="../assets/img/clock.png" alt />
            </p>
            <p>{{data.classPlan.date}}</p>
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
            <p>上课班级</p>
            <p>
              <img src="../assets/img/clock.png" alt />
            </p>
            <p>{{data.classPlan.class}}</p>
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
        <van-cell value is-link to="/myClass">
          <!-- 使用 title 插槽来自定义标题 -->
          <template slot="title">
            <img class="titImg" src="../assets/img/title2.png" alt />
            <span class="custom-title">我的班级</span>
          </template>
        </van-cell>
        <div class="groupblock" v-for="(item,index) in data.myClass" :key="index">
           <van-divider v-if="index!=0" dashed :style="{margin:0,padding:0}"></van-divider>
          <div>
            <p>
              <img src="../assets/img/tag.png" alt />
            </p>
            <p>{{item}}</p>
          </div>      
        </div>
      </van-col>
      <van-col class="group" span="22" offset="1">
        <van-cell value is-link>
          <template slot="title">
            <img class="titImg" src="../assets/img/title3.png" alt />
            <span class="custom-title">出勤统计</span>
          </template>
        </van-cell>
        <van-row type="flex" justify="space-between" style="background:white">
          <van-col span="6">
            <div class="roundP">
              <div class="round" style="background:#3bbbfa">
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
              <h5>平均工时</h5>
            </div>
          </van-col>
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
  data() {
    return {
      data: {
        classPlan: {
          date: "2020-1-7 8:30",
          position: "河北城乡建设学校",
          class: "20秋季点睛班",
          content: "上课内容"
        },
        myClass: ["2020寒假点睛班", "2020寒假点睛班", "2020寒假点睛班"],
        attendance: {
          should: "50",
          actual: "50",
          rest: "50",
          avg: "50"
        }
      }
    };
  },
  // methods: {
  //   async fetch() {
  //     const res = await this.$http.get("#");
  //     this.data = res.data;
  //   }
  // },
  // created() {
  //   this.fetch();
  // }
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
.round {
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  color: white;
}
.roundP {
  padding: 7px;
  text-align: center;
}
.round h2 {
  margin: 0;
}
</style>
