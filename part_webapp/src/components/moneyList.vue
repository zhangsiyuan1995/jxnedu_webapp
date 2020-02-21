<template>
  <div id="moneyList">
      <div class="mlTotal">
        <h5>总薪资(元)</h5>
        <h1>{{totalMoney}}</h1>
      </div>
      <van-row type="flex" justify="center" class="mlBlock">
        <van-col span="23">
          <div class="mlTwo">
            <div style="border-right:1px rgb(223, 223, 223) dashed">
              <h4>工资收入</h4>
              <p>{{income}}元</p>
            </div>
             <div>
              <h4>我的扣款</h4>
              <p>{{expenditure}}元</p>
            </div>
          </div>
          <h4>本月工资由{{listNum}}项组成</h4>
          <div class="mlList">
              <div style="padding: 15px 0">
                <h1 class="yellowRound"></h1><h2 class="yellowRoundH2">薪资组成</h2>
              </div>
              <template v-for="(item,index) in moneyList" >
              <div class="mlItem" :key="index">
                <h3>{{item.name}}</h3>
                <h2><template v-if="item.operating>0">+</template>{{item.operating}}</h2>
                <p>{{item.date}}</p>
              </div>
              </template>
          </div>
        </van-col>
      </van-row>
  </div>
</template>

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
  data(){
    return{
    totalMoney:"2,353.00",
    income:"568",
    expenditure:"256",
    listNum:"20",
    moneyList:[
      {
        name:"教务工作薪资",
        date:"2020-1-4",
        operating:18
      },
        {
        name:"教务工作薪资",
        date:"2020-1-4",
        operating:18
      },
        {
        name:"教务工作薪资",
        date:"2020-1-4",
        operating:-18
      }
    ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#moneyListNav{
  background: linear-gradient(to bottom,#57c5ff,#49baff);
}
#app #moneyListNav .van-icon{
  color: white;
}
#app #moneyListNav div{
  color: white;
}
#app #moneyListNav::after{
    border: none
}
.mlTotal{
   background: linear-gradient(to bottom,#49baff,#0094f0);
   padding: 30px 0 40px 0;
   text-align: center;
   color: white;

}
.mlTotal h5,.mlTotal h1{
  margin: 0;
  padding: 10px 0;
  font-weight: 250
}
.mlTwo div{
  display: inline-block;
  text-align: center;
  width: 50%;
}
.mlTwo div p{
  font-size: 10px;
  color: rgb(165, 165, 165);
  padding-bottom: 5px;
}
.mlTwo{
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 8px rgb(223, 223, 223)
}
.mlList{
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 8px rgb(223, 223, 223)
}
.mlList div{
  border-bottom:1px solid rgb(245, 245, 245);
  margin: 10px
}
.mlList div h2,.mlList div h3,.mlList div p{
  margin: 0;
  padding: 10px
}
.mlList div h3,.mlList div h2{
  display: inline-block;
}
.mlList .mlItem h2{
  float: right;
  position: relative;
  top: 15px;
  font-weight: 500
}
.mlList .mlItem h2,.mlList .mlItem h3{
  font-weight: 500;
  font-family: "黑体"
}
.yellowRound{
  background-color: rgb(255, 234, 115);
  width: 20px;
  height: 20px;
  margin-top: 0; 
  border-radius: 15px;
  position: absolute;
}
.yellowRoundH2{
   position: relative;
}
.mlBlock{
  position: relative;
  top: -35px
}
</style>
