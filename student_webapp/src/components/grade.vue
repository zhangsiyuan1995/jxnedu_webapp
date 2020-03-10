<template>
  <div id="grade">
    <van-row type="flex" justify="center">
      <van-col class="gradeB" span="22">
        <div class="gradeTitle">
          <h1>各次成绩</h1>
          <img src="../assets/img/pR.png" alt />
          <p>SUBJECT</p>
        </div>
        <div class="gradeR"></div>
        <div class="gradeCon" v-for="(item,index) in grades" :key="index">
          <h1>{{item.subject}}</h1>
          <p>{{item.grade}}分</p>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Col, Cell, CellGroup, Divider } from "vant";
Vue.use(Row)
  .use(Col)
  .use(Cell)
  .use(Divider)
  .use(CellGroup);
export default {
  name: "grade",
  data() {
    return {
      grades: [
        {
          subject: "语文",
          grade: "88"
        },
        {
          subject: "语文",
          grade: "88"
        },
        {
          subject: "语文",
          grade: "88"
        },
        {
          subject: "语文",
          grade: "88"
        },
        {
          subject: "语文",
          grade: "88"
        },
        {
          subject: "语文",
          grade: "88"
        },
        {
          subject: "语文",
          grade: "88"
        },
        {
          subject: "语文",
          grade: "88"
        },
        {
          subject: "语文",
          grade: "88"
        },
        {
          subject: "语文",
          grade: "88"
        },
        {
          subject: "语文",
          grade: "88"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#grade {
  background: linear-gradient(to right, #3aa8ff, #52baff);
}
.gradeB {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px rgb(177, 176, 176);
  margin: 20px 0 80px 0;
  padding: 15px;
}
.gradeTitle h1,
.gradeTitle p {
  display: inline-block;
}.gradeTitle h1{
   position: relative;
  bottom: 7px;
  z-index: 1;
}
.gradeTitle img{
  width: 50px;
  position: relative;
  right: 102px;
  bottom: 15px;
  z-index: 0;
}
.gradeTitle p {
  font-size: 22px;
  
  float: right;
  color: rgb(235, 235, 235);
}
.gradeTitle h1 {
  font-size: 22px;
  margin: 22px 0;
}
.gradeCon {
  border-top: solid 1px rgb(238, 238, 238);
}
.gradeR::before {
  content: "";
  display: block;
  position: relative;
  top: 0;
  left: -5px;
  width: 15px;
  height: 15px;
  border-radius: 2px 0 0 2px;
  background: -webkit-radial-gradient(
    10px at left,
    transparent 50%,
    #3aa8ff 50%
  );
  background: radial-gradient(10px at left, transparent 50%, #ffffff 50%);
}
.gradeCon h1,
.gradeCon p {
  display: inline-block;
}
.gradeCon p {
  font-size: 20px;
  float: right;
}
.gradeCon h1 {
  font-weight: 400;
  font-size: 20px;
  margin: 20px 0;
  color: rgb(155, 155, 155);
}
</style>