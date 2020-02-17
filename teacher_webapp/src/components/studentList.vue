<template>
  <div id="studentList">
    <van-search v-model="value" placeholder="请输入搜索姓名" shape="round" @search="onSearch"></van-search>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell is-link v-for="(item,index) in list" :key="index" :to="item.link">
        <template slot="icon">
          <van-image class="stuHead" :src="item.img" />
        </template>
        <template slot="title">
          <span class="custom-title">{{item.name}}</span>
        </template>
        <template slot="label">
          <p class="stuSex">
            <van-icon class="iconfont icon-sex" />
            {{item.sex}}
            <van-icon class="iconfont icon-Phone" />
            {{item.phone}}
          </p>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Col, Cell, CellGroup, Image, Icon, Search, List } from "vant";
Vue.use(Row)
  .use(Col)
  .use(Cell)
  .use(Image)
  .use(Icon)
  .use(Search)
  .use(List)
  .use(CellGroup);
export default {
  name: "studentList",
  data() {
    return {
      value:"",
      list: [
        {
          id: "11",
          name: "王雅倩",
          sex: "女",
          phone: "15222222222",
          img: require("../assets/img/head.png"),
          link: "/studentDetails"
        },
        {
          id: "11",
          name: "王雅倩",
          sex: "女",
          phone: "15222222222",
          img: require("../assets/img/head.png"),
          link: "/studentDetails"
        },
        {
          id: "11",
          name: "王雅倩",
          sex: "女",
          phone: "15222222222",
          img: require("../assets/img/head.png"),
          link: "/studentDetails"
        },
        {
          id: "11",
          name: "王雅倩",
          sex: "女",
          phone: "15222222222",
          img: require("../assets/img/head.png"),
          link: "/studentDetails"
        },
        {
          id: "11",
          name: "王雅倩",
          sex: "女",
          phone: "15222222222",
          img: require("../assets/img/head.png"),
          link: "/studentDetails"
        },
        {
          id: "11",
          name: "王雅倩",
          sex: "女",
          phone: "15222222222",
          img: require("../assets/img/head.png"),
          link: "/studentDetails"
        },
        {
          id: "11",
          name: "王雅倩",
          sex: "女",
          phone: "15222222222",
          img: require("../assets/img/head.png"),
          link: "/studentDetails"
        },
        {
          id: "11",
          name: "王雅倩",
          sex: "女",
          phone: "15222222222",
          img: require("../assets/img/head.png"),
          link: "/studentDetails"
        },
        {
          id: "11",
          name: "王雅倩",
          sex: "女",
          phone: "15222222222",
          img: require("../assets/img/head.png"),
          link: "/studentDetails"
        },
        {
          id: "11",
          name: "王雅倩",
          sex: "女",
          phone: "15222222222",
          img: require("../assets/img/head.png"),
          link: "/studentDetails"
        }
      ],
      loading: false,
      finished: false
    };
  },
  methods: {
    onSearch() {
      //   alert(this.value);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 0; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 5) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.stuSex {
  display: inline-block;
  margin: 7px 0;
  margin-right: 20px;
}
.stuSex .van-icon {
  margin-right: 4px;
}
.stuHead {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}
</style>
