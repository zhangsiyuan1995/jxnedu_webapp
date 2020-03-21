<template>
  <div id="myMission">
    <template v-for="(item,index) in missionList">
      <div class="mib" :key="index">
        <van-image round fit="cover" width="4rem" height="4rem" :src="item.src" />
        <div>
          <h3>{{item.name}}</h3>
          <p>{{item.date}}</p>
        </div>
        <van-button type="info" color="#209aff" size="mini">已评价</van-button>
        <van-divider dashed></van-divider>
        <div class="edCon">
          <div>
            <h4>受评教师：</h4>
            <p>{{item.name}}</p>
          </div>
          <div>
            <h4>班级名称：</h4>
            <p>{{item.class}}</p>
          </div>
          <div>
            <h4>是否出勤：</h4>
            <p>{{item.attendance}}</p>
          </div>
        </div>
        <div class="edBar" style="background-color:#1989fa">
          <van-icon name="comment-o" />上课内容
        </div>
        <div>
          <p>{{item.content}}</p>
        </div>
        <div class="edBar" style="background-color:orange">
          <van-icon name="star-o" />综合评价
        </div>
        <div>
          <p>{{item.eval}}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Tab,
  Tabs,
  DropdownMenu,
  DropdownItem,
  Image,
  Row,
  Col,
  Button,
  Divider,
  Icon
} from "vant";

Vue.use(Tab)
  .use(Tabs)
  .use(DropdownMenu)
  .use(Image)
  .use(Row)
  .use(Col)
  .use(Icon)
  .use(Button)
  .use(Divider)
  .use(DropdownItem);
export default {
  name: "evaloutaionList",
  data() {
    return {
      missionList: [
        {
          src: require("../assets/img/pHead.png"),
          name: "王雅倩",
          date: "2020-1-1 10:30",
          class: "一班",
          attendance: "是",
          content:
            "备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注",
          eval:
            "备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注"
        }
      ]
    };
  }
};
</script>

<style>
.mib {
  padding: 15px;
  background-color: white;
  margin-top: 2px;
}
.mib img,
.mib div,
.mib button {
  display: inline-block;
  vertical-align: top;
}
.mib .van-image {
  margin-right: 10px;
}
.mib div h3 {
  margin-top: 4px;
}
.mib div p {
   color: #333;
   line-height: 1.5rem;
}
.mib button {
  float: right;
}
.mib .mIcon {
  display: block;
}
.mib .mIcon p,
.mib .mIcon .van-icon {
  display: inline-block;
}
.mib .mIcon .van-icon {
  margin-right: 10px;
  vertical-align: middle;
  position: relative;
  top: -2px;
}
.mib .mIcon p {
  margin: 0;
}
.mIcon {
  padding-bottom: 15px;
  font-size: 12px;
}
.mib .van-divider {
  width: 100%;
  padding: 0;
  margin: 0;
}

.edCon h4,
.edCon p {
  display: inline-block;
  margin: 10px 0;
}
.edCon h4 {
  font-weight: 500;
  font-size: 14px;
  color: rgb(160, 160, 160);
}
.mib .edCon p {
  color: black;
}
.edCon {
  width: 100%;
}
.edCon div {
  display: block;
}
.edBar {
  padding: 5px 10px;
  color: white;
  width: 100%;
}
.edBar .van-icon {
  vertical-align: bottom;
  margin-right: 5px;
}
</style>
