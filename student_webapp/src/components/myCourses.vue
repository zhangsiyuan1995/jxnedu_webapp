<template>
  <div id="myCourses">
    <van-tabs v-model="active" sticky>
      <van-tab title="所有课程">
        <van-row>
          <van-col span="22" offset="1">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item>
                <img class="banner" src="../assets/img/classBanner.png" alt />
              </van-swipe-item>
              <van-swipe-item>
                <img class="banner" src="../assets/img/classBanner.png" alt />
              </van-swipe-item>
              <van-swipe-item>
                <img class="banner" src="../assets/img/classBanner.png" alt />
              </van-swipe-item>
              <van-swipe-item>
                <img class="banner" src="../assets/img/classBanner.png" alt />
              </van-swipe-item>
            </van-swipe>
            <div class="groupClass" v-for="(item,index) in courses" :key="index">
              <van-row>
                <van-col class="coursD" span="24">
                  <h2>{{item.name}}</h2>
                </van-col>
                <van-col class="coursD" span="24">
                  <van-icon name="clock" />
                  <p>上课时间：{{item.time}}</p>
                </van-col>
                <van-col class="coursD" span="24">
                  <van-icon name="location" />
                  <p>上课地点:{{item.loc}}</p>
                </van-col>
                <van-col class="coursD" span="24">
                  <van-icon name="column" />
                  <p>课时：{{item.coursesTime}}</p>
                </van-col>
                <van-col class="coursD" span="24">
                  <p class="redround">{{item.tag}}</p>
                  <van-divider />
                </van-col>
                <van-cell class="courCell" :title="'￥'+item.money" :value="item.status" />
              </van-row>
            </div>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab title="已开课程">  <van-row>
          <van-col span="22" offset="1">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item>
                <img class="banner" src="../assets/img/classBanner.png" alt />
              </van-swipe-item>
              <van-swipe-item>
                <img class="banner" src="../assets/img/classBanner.png" alt />
              </van-swipe-item>
              <van-swipe-item>
                <img class="banner" src="../assets/img/classBanner.png" alt />
              </van-swipe-item>
              <van-swipe-item>
                <img class="banner" src="../assets/img/classBanner.png" alt />
              </van-swipe-item>
            </van-swipe>
            <div class="groupClass" v-for="(item,index) in courses" :key="index">
              <van-row>
                <van-col class="coursD" span="24">
                  <h2>{{item.name}}</h2>
                </van-col>
                <van-col class="coursD" span="24">
                  <van-icon name="clock" />
                  <p>上课时间：{{item.time}}</p>
                </van-col>
                <van-col class="coursD" span="24">
                  <van-icon name="location" />
                  <p>上课地点:{{item.loc}}</p>
                </van-col>
                <van-col class="coursD" span="24">
                  <van-icon name="column" />
                  <p>课时：{{item.coursesTime}}</p>
                </van-col>
                <van-col class="coursD" span="24">
                  <p class="redround">{{item.tag}}</p>
                  <van-divider />
                </van-col>
                <van-cell class="courCell" :title="'￥'+item.money" :value="item.status" />
              </van-row>
            </div>
          </van-col>
        </van-row></van-tab>
      <van-tab title="剩余课程">  <van-row>
          <van-col span="22" offset="1">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
              <van-swipe-item>
                <img class="banner" src="../assets/img/classBanner.png" alt />
              </van-swipe-item>
              <van-swipe-item>
                <img class="banner" src="../assets/img/classBanner.png" alt />
              </van-swipe-item>
              <van-swipe-item>
                <img class="banner" src="../assets/img/classBanner.png" alt />
              </van-swipe-item>
              <van-swipe-item>
                <img class="banner" src="../assets/img/classBanner.png" alt />
              </van-swipe-item>
            </van-swipe>
            <div class="groupClass" v-for="(item,index) in courses" :key="index">
              <van-row>
                <van-col class="coursD" span="24">
                  <h2>{{item.name}}</h2>
                </van-col>
                <van-col class="coursD" span="24">
                  <van-icon name="clock" />
                  <p>上课时间：{{item.time}}</p>
                </van-col>
                <van-col class="coursD" span="24">
                  <van-icon name="location" />
                  <p>上课地点:{{item.loc}}</p>
                </van-col>
                <van-col class="coursD" span="24">
                  <van-icon name="column" />
                  <p>课时：{{item.coursesTime}}</p>
                </van-col>
                <van-col class="coursD" span="24">
                  <p class="redround">{{item.tag}}</p>
                  <van-divider />
                </van-col>
                <van-cell class="courCell" :title="'￥'+item.money" :value="item.status" />
              </van-row>
            </div>
          </van-col>
        </van-row></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Row,
  Col,
  Cell,
  CellGroup,
  Swipe,
  SwipeItem,
  Icon,
  Divider,
   Tab, Tabs 
} from "vant";
Vue.use(Row)
  .use(Col)
  .use(Cell)
  .use(Swipe)
  .use(SwipeItem)
  .use(Icon)
  .use(Divider)
  .use(Tab)
  .use(Tabs)
  .use(CellGroup);
export default {
  name: "myCourses",
  data() {
    return {
      active: 0,
      courses: [
        {
          name: "高端课目标协议班",
          time: "2020-1-1~2020-2-2",
          loc: "河北城乡建设学校",
          coursesTime: "课时：12天/专业，￥专1660元/专业",
          tag: "签订协议 全程辅导",
          money: "1800",
          status: "已开课"
        },
        {
          name: "高端课目标协议班",
          time: "2020-1-1~2020-2-2",
          loc: "河北城乡建设学校",
          coursesTime: "课时：12天/专业，￥专1660元/专业",
          tag: "签订协议 全程辅导",
          money: "1800",
          status: "已开课"
        },
        {
          name: "高端课目标协议班",
          time: "2020-1-1~2020-2-2",
          loc: "河北城乡建设学校",
          coursesTime: "课时：12天/专业，￥专1660元/专业",
          tag: "签订协议 全程辅导",
          money: "1800",
          status: "已开课"
        }
      ]
    };
  }
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
  color: black;
  font-weight: normal;
}
.coursD {
  padding-left: 15px;
}
.coursD h4 {
  margin: 3px 0;
  font-weight: normal;
}
.coursD p {
  display: inline;
  vertical-align: top;
}
.coursD .van-icon {
  color: rgb(167, 167, 167);
  margin-right: 5px;
}
.coursD {
  margin-bottom: 15px;
}
.coursD .redround {
  color: red;
  font-size: 9px;
  border-radius: 3px;
  border: 1px solid red;
  padding: 3px;
}
.coursD .van-divider {
  margin-bottom: 0;
}
.courCell span {
  font-size: 18px;
  color: red;
}
.van-tab__pane{
  padding-bottom: 80px
}
#myCourses .van-tabs__nav .van-tabs__line {
  background-color: #209aff;
}
.my-swipe{
  margin-top: 10px;
  border-radius: 5px;
}
</style>
