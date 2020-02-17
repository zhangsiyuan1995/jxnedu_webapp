<template>
  <div id="studentDetails">
    <div class="stuDetailHead">
      <h1>王雅倩</h1>
      <div>
        <van-icon class="iconfont icon-sex"></van-icon>
        <p>男</p>
        <van-icon class="iconfont icon-Phone"></van-icon>
        <p>15222222222</p>
      </div>
    </div>
    <van-tabs class="stiBasic" v-model="active">
      <van-tab title="基本信息">
        <van-cell v-for="(item,index) in basic" :key="index">
          <template slot="title" >
            <p class="stClass">{{item.p}}</p>
            <span class="custom-title">{{item.title}}</span>
          </template>
        </van-cell>
    
      </van-tab>
      <van-tab title="课程信息">
        <van-cell v-for="(item,index) in classInfo" :key="index">
          <template slot="title">
            <p class="stClass">{{item.p}}</p>
            <span class="custom-title">{{item.title}}</span>
          </template>
        </van-cell>
      </van-tab>
      <van-tab title="测试成绩">
        <van-cell v-for="(item,index) in test" :key="index" :title="item.title" :value="item.value"></van-cell>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Col, Cell, CellGroup, Image, Icon, Tab, Tabs } from "vant";
Vue.use(Row)
  .use(Col)
  .use(Cell)
  .use(Image)
  .use(Icon)
  .use(Tab)
  .use(Tabs)
  .use(CellGroup);
export default {
  name: "studentDetails",
  data() {
    return {
      active: 0,
      value: "",
      name:"王雅倩",
      sex:"男",
      phone:"13800000000",
      basic: [
        {
          p: "所在院校",
          title: "河北城乡建设学校"
        },
        {
          p: "报名方式",
          title: "线下"
        },
        {
          p: "报名日期",
          title: "2019-11-14"
        }
      ],
      classInfo: [
        {
          p: "已报课程",
          title: "英语，数学"
        },
        {
          p: "已开课程",
          title: "数学"
        },
        {
          p: "未开课程",
          title: "英语"
        }
      ],
      test:[
         {
             title: "测试成绩一",
             value:"98"
         },
          {
             title: "测试成绩一",
             value:"98"
         },
          {
             title: "测试成绩一",
             value:"98"
         },
          {
             title: "测试成绩一",
             value:"98"
         },
          {
             title: "测试成绩一",
             value:"98"
         },

      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#stuDetailsNav div {
  color: white;
}
#stuDetailsNav .van-icon {
  color: white;
}
#stuDetailsNav {
  color: white;
  background: linear-gradient(to right, #1e99ff, #58c5ff);
  border: none;
}
.stuDetailHead {
  padding: 60px 20px 10px 20px;
  background: linear-gradient(to right, #1e99ff, #58c5ff);
  color: white;
}
.stuDetailHead h1 {
  font-weight: 500;
}
.stuDetailHead p {
  display: inline;
  margin-right: 20px;
}
.stuDetailHead .iconfont {
  margin-right: 5px;
}
.stClass {
  color: rgb(151, 151, 151);
  margin: 3px 0;
}

.van-tabs__nav .van-tabs__line {
  background-color: #1e99ff;
}
.van-tabs__content {
  margin-top: 5px;
}
</style>
