<template>
  <div id="myClass">
    <van-row>
      <van-col span="22" offset="1">
        <div class="groupClass">
          <van-row>
            <van-cell value is-link to="/studentList">
              <template>
                <img class="titImg" src="../assets/img/title1.png" alt />
                <span class="custom-title">20寒假医学影像专业基础强化班</span>
              </template>
            </van-cell>
            <van-col class="classD" span="8">
              <p>学员人数</p>
              <h2>58</h2>
            </van-col>
            <van-col class="classD" span="8">
              <p>出勤率</p>
              <h2>58%</h2>
            </van-col>
            <van-col class="classD" span="8">
              <p>成绩达标率</p>
              <h2>89%</h2>
            </van-col>
            <van-col class="classD" span="8">
              <p>学员评价</p>
              <h4>58%</h4>
            </van-col>
            <van-col class="classD" span="8">
              <p>参与率</p>
              <h4>68%</h4>
            </van-col>
            <van-col class="classD" span="8">
              <p>课时量</p>
              <h4>25</h4>
            </van-col>
            <van-col class="classD" span="8">
              <p>剩余课时</p>
              <h4>10</h4>
            </van-col>
            <van-col class="classD" span="8">
              <p>补课人数</p>
              <h4>8</h4>
            </van-col>
          </van-row>
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
  name: "myClass",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.groupClass {
  background-color: white;
  border-radius: 5px;
  margin-top: 15px;
  padding-bottom: 5px;
}
.classTitle {
  display: flex;
  justify-content: space-between;
}
.groupClass p {
  color: #666;
  margin: 7px 0;
}
.groupClass h2 {
  color: rgb(73, 109, 226);
  font-weight: normal;
}
.classD {
  padding-left: 15px;
}
.classD h4 {
  margin: 3px 0;
  font-weight: normal;
}
</style>
