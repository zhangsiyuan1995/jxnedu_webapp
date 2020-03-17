<template>
  <div id="moneyList">
    <van-row type="flex" justify="center">
      <van-col span="22">
        <div
          class="mDBlcok"
          v-for="(item,index) in Array.prototype.reverse.call(this.moneyList)"
          :key="index"
        >
          <router-link :to="{path:'/moneyDetails',query:{id:item.id}}">
            <div>
              <img src="../assets/img/coin.png" alt />
            </div>
            <div>
              <h3>{{item.name}}</h3>
              <p>佳鑫诺教育集团发布</p>
              <p>时间：{{item.date}}</p>
            </div>
          </router-link>
        </div>
      </van-col>
    </van-row>
  </div>
</template>
详情
<script>
import Vue from "vue";
import { Row, Col, Button, CellGroup, Image, Icon, Divider, Rate } from "vant";
Vue.use(Row)
  .use(Col)
  .use(Button)
  .use(Image)
  .use(Icon)
  .use(Divider)
  .use(Rate)
  .use(CellGroup);
export default {
  name: "moneyList",
  data() {
    return {
      moneyList: [
        {
          id: "18",
          name: "2020年8月工资",
          date: "2020-2-15"
        },
        {
          id: "18",
          name: "2020年8月工资",
          date: "2020-2-16"
        },
        {
          id: "18",
          name: "2020年8月工资",
          date: "2020-2-17"
        },
        {
          id: "18",
          name: "2020年8月工资",
          date: "2020-2-18"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mDBlcok div {
  display: inline-block;
}
.mDBlcok {
  background-color: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 0 2px rgb(216, 216, 216);
}
.mDBlcok div img {
  margin: 0 30px 0 20px;
  width: 50px;
}
.mDBlcok div p,
.mDBlcok div h3 {
  margin: 5px 0;
}
.mDBlcok div h3 {
  color: #666;
  font-size: 16px;
  margin-bottom: 10px;
}
.mDBlcok div p {
  color: rgb(168, 168, 168);
  font-size: 12px;
}
</style>
