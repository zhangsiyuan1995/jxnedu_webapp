<template>
  <div id="scoreEntry">
    <van-cell class="ptCell" title="考试日期" :value="testDate" @click="showPopup0" />
    <van-popup v-model="show0" position="bottom" :style="{ height: '35%'}" round>
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirmTime()"
      />
    </van-popup>
    <div class="seHead">
      <p>姓名</p>
      <p>座位号</p>
      <p>手机号</p>
    </div>
    <div class="seIn">
      <van-field
        v-for="(item,index) in studentList"
        :key="index"
        v-model="studentList[index].score"
        type="number"
        input-align="right"
        placeholder="请输入"
        label-width="70%"
        maxlength="5"
      >
        <template slot="label">
          <div>
            <p>{{item.name}}</p>
            <p>{{item.num}}</p>
            <p>{{item.phone}}</p>
          </div>
        </template>
      </van-field>
      <van-row class="rpB" type="flex" justify="center">
        <van-col span="23">
          <van-button color="#209aff" size="large" @click="submit()">提交</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import {
  Image,
  Row,
  Col,
  Picker,
  Popup,
  DatetimePicker,
  Field,
  Button
} from "vant";
Vue.use(Image)
  .use(Row)
  .use(Popup)
  .use(Picker)
  .use(DatetimePicker)
  .use(Button)
  .use(Field)
  .use(Col);
export default {
  name: "scoreEntry",
  data() {
    return {
      value: "",
      show0: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      testDate: "请选择",
      studentList: [
        {
          id: "10",
          name: "张思远",
          num: "20",
          phone: "13700000000",
          score: null
        },
        {
          id: "10",
          name: "张思远",
          num: "20",
          phone: "13700000000",
          score: null
        },
        {
          id: "10",
          name: "张思远",
          num: "20",
          phone: "13700000000",
          score: null
        },
        {
          id: "10",
          name: "张思远",
          num: "20",
          phone: "13700000000",
          score: null
        },
        {
          id: "10",
          name: "张思远",
          num: "20",
          phone: "13700000000",
          score: null
        },
        {
          id: "10",
          name: "张思远",
          num: "20",
          phone: "13700000000",
          score: null
        }
      ]
    };
  },
  methods: {
    showPopup0() {
      this.show0 = true;
    },
    //时间弹窗点击确认
    confirmTime() {
      //格式化时间
      this.time =
        this.currentDate.getFullYear() +
        "-" +
        (Number(this.currentDate.getMonth()) + 1) +
        "-" +
        this.currentDate.getDate();
      //时间戳
      this.time1 = new Date(this.currentDate).getTime() / 1000;
      this.show0 = false;
      window.console.log(this.time);
      this.testDate = this.time;
    },
    submit() {
      window.console.log(this.studentList);
    }
  }
};
</script>
<style>
.seHead p {
  display: inline-block;
  color: #666;
  margin: 10px 30px 10px 15px;
  font-size: 10px;
}
.seIn {
  margin-bottom: 60px;
}
.seIn .van-cell {
  margin: 2px 0;
}
.seIn p {
  display: inline-block;
  color: black;
  margin: 2px 30px 2px 0px;
}
</style>