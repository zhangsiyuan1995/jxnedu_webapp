<template>
  <div id="gift">
    <van-row type="flex" justify="center" style="background:white">
      <van-col span="22">
        <img class="banner" src="../assets/img/bannerGift.png" alt />
        <van-row class="threeGift" type="flex" justify="space-around">
          <van-col>
            <router-link to="/studentRank">
              <van-icon name="medal-o" color="blue" />
              <p>我的排名</p>
            </router-link>
          </van-col>
          <van-col>
            <router-link to="/history">
              <van-icon name="tosend" color="green" />
              <p>历史成绩</p>
            </router-link>
          </van-col>
          <van-col>
            <router-link to="/gift">
              <van-icon name="gift-o" color="red" />
              <p>福利商城</p>
            </router-link>
          </van-col>
        </van-row>
        <h2>兑换礼品</h2>
        <van-row class="giftBlock">
            <van-col span="10">
                <img src="../assets/img/gift.png" alt="">
            </van-col>
            <van-col span="14">
                <h3>礼物名称</h3>
                <p class="redRound">限量五百份</p>
                <p>2222已领</p>
                <h2 class="giftPoint">666积分</h2>
                <van-button round type="info">点击领取</van-button>
            </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import Vue from "vue";
import {
  Picker,
  Button,
  Cell,
  CellGroup,
  Field,
  Collapse,
  CollapseItem,
  Popup
} from "vant";
Vue.use(Picker)
  .use(Button)
  .use(Cell)
  .use(Field)
  .use(Collapse)
  .use(CollapseItem)
  .use(Popup)
  .use(CellGroup);
export default {
  name: "gift",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.threeGift {
  background-color: white;
  text-align: center;
  margin-top: 12px;
  padding: 10px 0;
}
.threeGift .van-icon {
  font-size: 25px;
  vertical-align: middle;
}
.threeGift .van-button {
  border: none;
}
.threeGift p {
  color: #666;
  margin-bottom: 0
}
.giftBlock img{
    width: 100%
}
.giftBlock h2,.giftBlock .van-button{
    display: inline;
}
.giftBlock .van-button{
    float: right;
}
.giftBlock .redRound{
    font-size: 9px;
    border-radius: 3px;
    border:red solid 1px;
    padding: 2px;
    margin-bottom: 15px
}
</style>
