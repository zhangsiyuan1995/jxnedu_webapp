<template>
  <div id="giftRules">
    <van-row type="flex" justify="center">
      <van-col span="22">
        <div class="ruleTitle">
          <h1>积分获取规则</h1>
          <h3>POINT GET RULES</h3>
        </div>
        <div class="ruleContent">
          <h3>积分获取途径</h3>
          <van-row>
            <van-col span="24">
              <img src="../assets/img/giftRuleLi.png" alt />
              <p>积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则</p>
            </van-col>
             <van-col span="24">
              <img src="../assets/img/giftRuleLi.png" alt />
              <p>积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则</p>
            </van-col>
             <van-col span="24">
              <img src="../assets/img/giftRuleLi.png" alt />
              <p>积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则积分规则</p>
            </van-col>
          </van-row>
        </div>
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
  name: "giftRules",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#giftRules {
  background: linear-gradient(to right, #57c4ff, #239cff);
  height: inherit;
}
.ruleTitle {
  text-align: center;
}
.ruleTitle h1 {
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;
  margin: auto;
  padding: 30px 40px;
  color: white;
  border: 1px solid #ffffff;
  margin-top: 50px;
  position: relative;
}
.ruleTitle h3 {
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;
  margin: auto;
  color: white;
  position: relative;
  top: -7px;
  background: linear-gradient(to right, #4dbcff, #32a8ff);
  padding: 0px 50px;
  font-family: "黑体";
  font-weight: 200;
}
.ruleContent {
  background-color: white;
  border-radius: 5px;
  padding: 20px 30px;
  margin: 20px 0 50px 0
}
.ruleContent h3 {
  color: #209aff;
}
.ruleContent p,
.ruleContent img {
  display: inline-block;
}
.ruleContent img {
  vertical-align: top;
  padding-top: 3px
}
.ruleContent h3{
  text-align: center
}
.ruleContent p {
  line-height: 20px;
  color: #666;
  width: 90%;
  padding-left: 10px;
  margin-top: 0
}
</style>
