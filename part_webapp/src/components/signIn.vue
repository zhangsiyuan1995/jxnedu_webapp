<template>
  <div id="signIn">
    <van-calendar
      title="日历"
      :poppable="false"
      :show-confirm="false"
      :show-mark="true"
      :formatter="formatter"
      :min-date="minDate"
      :max-date="maxDate"
      :default-date="defaultDate"
      @confirm="onConfirm"
      :style="{ height: '280px' }"
    />
    <van-row type="flex" justify="center" style="background:white">
      <van-col span="22">
        <div class="siBar">签到异常</div>
        <van-cell :value="item.time" v-for="(item,index) in abnormal" :key="index">
          <template slot="title">
            <span class="custom-title">{{item.name}}</span>
          </template>
          <template slot="right-icon" v-if="item.state==1">
            <van-tag type="warning" round>迟到</van-tag>
          </template>
          <template slot="right-icon" v-if="item.state==2">
            <van-tag type="danger" round>缺卡</van-tag>
          </template>
          <template slot="right-icon" v-if="item.state==3">
            <van-tag type="primary" round>请假</van-tag>
          </template>
        </van-cell>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Button, Cell, CellGroup, Field, Calendar, Col, Tag } from "vant";
Vue.use(Row)
  .use(Button)
  .use(Cell)
  .use(Field)
  .use(Calendar)
  .use(Col)
  .use(Tag)
  .use(CellGroup);
export default {
  name: "signIn",
  data() {
    return {
      date: "",
      defaultDate: new Date(),
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(),
      cale: [
        {
          month: 2,
          date: 20
        },
        {
          month: 2,
          date: 21
        },
        {
          month: 2,
          date: 22
        },
        {
          month: 2,
          date: 23
        },
        {
          month: 2,
          date: 24
        }
      ],
      abnormal: [
        {
          name: "王雅倩",
          time: "2020-1-1  8:30",
          state: "3"
        },
        {
          name: "王雅倩",
          time: "2020-1-1  8:30",
          state: "2"
        },
        {
          name: "王雅倩",
          time: "2020-1-1  8:30",
          state: "1"
        },
        {
          name: "王雅倩",
          time: "2020-1-1  8:30",
          state: "1"
        }
      ]
    };
  },
  methods: {
    formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();
      for (var i = 0; i < this.cale.length; i++) {
        if (month === this.cale[i].month) {
          if (date === this.cale[i].date) {
            day.bottomInfo = "✓";
          }
        }
      }
      return day;
    },
    yesterday() {
      let a = new Date();
      a.setDate(a.getDate() - 1);
      this.defaultDate = a;
    },
    formatDate(date) {
      console.log(date);
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.date = this.formatDate(date);
      console.log(this.date);
      //接下来写更显签到异常数据的功能
    }
  },
  created() {
    this.yesterday();
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.ptCell {
  margin-bottom: 5px;
}
.van-calendar__month-title,
.van-calendar__header-title {
  display: none;
}
.van-calendar__day .van-calendar__selected-day {
  background-color: #3292ff;
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
.van-calendar__bottom-info {
  color: #3292ff;
}
.van-calendar__days .van-calendar__day {
  height: 49px;
}
#signInNav {
  background: linear-gradient(to right, #35b5fc, #2995ec);
  border: none;
}
#signInNav::after {
  border: none;
}
#signInNav .van-nav-bar__title {
  color: white;
}
#signInNav .van-icon {
  color: white;
}
#signIn .van-calendar__weekdays {
  background: linear-gradient(to right, #35b5fc, #2995ec);
  color: white;
}
.siBar {
  padding: 10px;
  background: linear-gradient(to right, #35b5fc, #2995ec);
  color: white;
}
#signIn .van-cell {
  padding-left: 0;
  padding-right: 0;
}
#signIn .van-cell__value span {
  color: black;
  margin-right: 15px;
}
#signIn .van-tag {
  font-size: 10px;
  padding: 0.2em 0.8em;
}
</style>
