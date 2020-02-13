<template>
  <div id="myMission">
    <van-tabs v-model="active" sticky>
      <van-tab title="教务">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <template v-for="(item,index) in missionList">
          <div class="mib" v-if="item.status == value1" :key="index">
            <van-image round fit="cover" width="4rem" height="4rem" :src="item.src" />
            <div>
              <h3>{{item.name}}</h3>
              <p>{{item.date}}</p>
            </div>
            <template v-if="value1">
              <van-button type="info" size="mini">汇报</van-button>
            </template>
            <h4>任务内容：</h4>
            <p>{{item.content}}</p>
            <h4>任务要求</h4>
            <p>{{item.claim}}</p>
            <van-divider dashed></van-divider>
            <div class="mIcon">
              <van-icon name="clock-o" />
              <p>{{item.limitTime}} 截止</p>
            </div>
            <van-divider dashed></van-divider>
            <div class="mIcon">
              <van-icon name="user-o" />
              <p>发布人：{{item.name}}</p>
              <template v-if="value1">
                <h5 class="uncomplate">未完成</h5>
              </template>
              <template v-if="!value1">
                <h5 class="complate">已完成</h5>
              </template>
            </div>
            <template v-if="!value1">
              <div class="note">
                <p>备注：{{item.note}}</p>
              </div>
            </template>
          </div>
        </template>
      </van-tab>
      <van-tab title="教师">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <template v-for="(item,index) in missionList">
          <div class="mib" v-if="item.status == value2" :key="index">
            <van-image round fit="cover" width="4rem" height="4rem" :src="item.src" />
            <div>
              <h3>{{item.name}}</h3>
              <p>{{item.date}}</p>
            </div>
            <template v-if="value2">
              <van-button type="info" size="mini">评价</van-button>
            </template>
            <template v-if="!value2">
              <van-button type="info" size="mini">详情</van-button>
            </template>
            <h4>综合评价内容</h4>
            <p>{{item.content}}</p>
            <van-divider dashed></van-divider>
            <div class="mIcon">
              <van-icon name="clock-o" />
              <p>受评班级：{{item.limitTime}}</p>
            </div>
            <van-divider dashed></van-divider>
            <div class="mIcon">
              <van-icon name="user-o" />
              <p>受评教师： {{item.name}}</p>
              <template v-if="value2">
                <h5 class="uncomplate">未完成</h5>
              </template>
              <template v-if="!value2">
                <h5 class="complate">已完成</h5>
              </template>
            </div>
          </div>
        </template>
      </van-tab>
    </van-tabs>
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
      active: 0,
      value1: 1,
      option1: [
        { text: "已完成", value: 0 },
        { text: "未完成", value: 1 }
      ],
      value2: 1,
      option2: [
        { text: "已完成", value: 0 },
        { text: "未完成", value: 1 }
      ],
      missionList: [
        {
          status: 0,
          src: require("../assets/img/pHead.png"),
          name: "王雅倩",
          id: "12",
          date: "2020-1-1 10:30",
          content:
            "任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容",
          claim: "认真完成",
          limitTime: "2020-1-1 18:00",
          note:
            "备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注"
        },
        {
          status: 1,
          src: require("../assets/img/pHead.png"),
          name: "王雅倩",
          id: "12",
          date: "2020-1-1 10:30",
          content:
            "任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容",
          claim: "认真完成",
          limitTime: "2020-1-1 18:00"
        },
        {
          status: 1,
          src: require("../assets/img/pHead.png"),
          name: "王雅倩",
          id: "12",
          date: "2020-1-1 10:30",
          content:
            "任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容任务内容",
          claim: "认真完成",
          limitTime: "2020-1-1 18:00"
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
  color: rgb(151, 151, 151);
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
.mIcon h5 {
  float: right;
  margin: 0;
}
.van-tabs__content {
  padding-bottom: 70px;
}
.note {
  background-color: #f1f1ff;
  padding: 10px;
  font-size: 12px;
  width: 100%;
}
.mIcon .complate {
  color: rgb(55, 231, 55);
}
.mIcon .uncomplate {
  color: rgb(248, 36, 36);
}
</style>
