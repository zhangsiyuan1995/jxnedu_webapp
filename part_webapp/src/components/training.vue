<template>
  <div id="training">
    <van-row type="flex" justify="center">
      <van-col span="22">
        <h2>梦想从学习开始-加油</h2>
        <p class="tDate">2020-01-01</p>
        <van-cell
          is-link
          class="tBlock"
          :to="'/noticeContent/'+item.newsId"
          v-for="(item,index) in trainingData"
          :key="index"
        >
          <template slot="title">
            <template v-if="index%2==0">
              <van-icon class="tGreen" name="info" />
            </template>
            <template v-if="index%2!=0">
              <van-icon class="tBlue" name="info" />
            </template>
            <p>培训内容</p>
          </template>
          <template slot="label">
            <span class="custom-title">{{item.name}}</span>
          </template>
        </van-cell>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Button, Cell, CellGroup, Field, Calendar, Col } from "vant";
Vue.use(Row)
  .use(Button)
  .use(Cell)
  .use(Field)
  .use(Calendar)
  .use(Col)
  .use(CellGroup);
export default {
  name: "training",
  data() {
    return {
      trainingData: [
        { newsId: "15", name: "上课如何签到" },
        { newsId: "15", name: "上课如何签到" },
        { newsId: "15", name: "上课如何签到" },
        { newsId: "15", name: "上课如何签到" },
        { newsId: "15", name: "上课如何签到" }
      ]
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#training {
  height: inherit;
  background: white;
}
#training .tBlock {
  background-color: rgb(244, 244, 244);
  border-radius: 5px;
  padding: 20px 15px;
  margin-bottom: 2px;
}
.tBlock .van-icon,
.tBlock p {
  display: inline-block;
}
.tBlock p {
  margin: 0;
  color: #666;
  font-size: 10px;
}
.tBlock span {
  color: #000;
}
.tBlock .van-icon-arrow {
  position: relative;
  top: 12px;
  font-size: 20px;
  color: #209aff;
}
.tBlock .van-icon-info {
  position: relative;
  top: 4px;
  margin-right: 5px;
  font-size: 18px;
}
.tGreen{
 color: rgb(22, 231, 109);
}
.tBlue{
     color: #209aff;
}
.tDate {
  color: #209aff;
}
</style>
