<template>
  <div id="giftHistory">
    <van-row type="flex" justify="center" style="background:white;  margin-bottom: 60px">
      <van-col span="22">
        <van-row class="giftBlock" v-for="(item,index) in giftList" :key="index">
          <van-col span="10">
            <img :src="item.giftImg" alt />
          </van-col>
          <van-col span="14">
            <div class="giftBlock2">
              <h3>{{item.giftName}}</h3>
              <p class="redRound">限量{{item.giftSum}}份</p>
              <p class="giftNum">{{item.giftLoc}}</p>
              <div>
                <h1 class="giftPoint">{{item.giftPoint}}</h1>
                <h2 class="giftPoint">积分</h2>
              </div>
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
  name: "giftHistory",
  data() {
    return {
      giftList: [
        {
          giftImg: require("../assets/img/gift.png"),
          giftName:"礼物名称",
          giftLoc:"2012-11-2在邢台校区已领",
          giftSum:"222",
          giftPoint:"666",
          giftId:"123"
        },
           {
          giftImg: require("../assets/img/gift.png"),
          giftName:"礼物名称",
          giftLoc:"2012-11-2在邢台校区已领",
          giftSum:"222",
          giftPoint:"666",
          giftId:"123"
        },
      ]
    };
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
  margin-bottom: 0;
}
.giftBlock {
  padding-bottom: 15px;

}
.giftBlock img {
  width: 100%;
}
.giftBlock h2,
.giftBlock .van-button {
  display: inline;
}
.giftBlock .van-button {
  float: right;
  color: red;
  background-color: rgb(253, 222, 222);
  border:none
}
.giftBlock .redRound {
  font-size: 11px;
  border-radius: 3px;
  border: red solid 1px;
  padding: 2px;
  margin-bottom: 15px;
  color: red;
  width: fit-content;
  width: -webkit-fit-content;
  width: -moz-fit-content;
}
.giftBlock .giftPoint {
  color: red;
  vertical-align: middle;
  position: relative;
  top: 10px;
  display: inline;
  font-family: "黑体";
}
.giftBlock .giftNum {
  margin-top: 30px;
  color: rgb(170, 170, 170);
  position: relative;
  top: 10px;
}
.giftBlock2 {
  padding-left: 15px;
}
.giftBlock2 h3 {
  margin-top: 5px;
}
.threeGift img{
  width: 50px;
}
</style>
