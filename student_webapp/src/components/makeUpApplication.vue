<template>
  <div id="partTime">
    <van-cell class="ptCell" title="剩余补课次数" :value="remaning" />
    <van-cell class="ptCell" title="补课日期" :value="classT" @click="showPopup0" />
    <van-cell class="ptCell" title="班级名称" :value="classN" @click="showPopup2" />
    <!-- <van-cell class="ptCell" title="助教姓名" :value="ptN" @click="showPopup3" /> -->
    <!-- <van-field class="ptCell" v-model="value" label="评分" placeholder="满分10" input-align="right" type="digit"/> -->
    <van-field
      class="ptCell"
      v-model="message"
      rows="4"
      height="100px"
      label="补课原因"
      type="textarea"
    />
    <van-row type="flex" justify="center">
      <van-col span="23">
        <van-button class="maBu" color="#209aff" size="large">提交</van-button>
      </van-col>
    </van-row>
    <!-- 日期弹窗 -->
    <van-popup v-model="show0" position="bottom" :style="{ height: '35%'}" round>
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirmTime()"
      />
    </van-popup>
    <!-- 班级弹窗 -->
    <van-popup v-model="show1" position="bottom" :style="{ height: '35%'}" round>
      <van-picker
        show-toolbar
        title
        :columns="columns"
        @cancel="show1=false"
        @confirm="confirmClass"
      />
    </van-popup>
    <!-- 姓名弹窗 -->
    <!-- <van-popup v-model="show2" position="bottom" :style="{ height: '35%'}" round>
      <van-picker
        show-toolbar
        title
        :columns="columns1"
        @cancel="show1=false"
        @confirm="confirmName"
      />
    </van-popup> -->
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
  DatetimePicker,
  Popup,
  Row,
  Col
} from "vant";
Vue.use(Picker)
  .use(Button)
  .use(Cell)
  .use(Field)
  .use(Row)
  .use(Col)
  .use(DatetimePicker)
  .use(Popup)
  .use(CellGroup);
export default {
  name: "partTime",
  data() {
    return {
  
      message: "",
       classT: "请选择",
      classN: "请选择",
    remaning: "2",
      columns: ["英语一班", "英语一班", "英语一班", "英语一班", "英语一班"],
      columns1: ["王雅倩", "王雅倩", "王雅倩", "王雅倩", "王雅倩"],
      show0: false,
      show1: false,
      show2: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
     
    };
  },
  methods: {
    showPopup0() {
      this.show0 = true;
    },
    showPopup2() {
      this.show1 = true;
    },
    showPopup3() {
      this.show2 = true;
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
      this.classT = this.time;
    },
    confirmClass(e) {
      window.console.log(e);
      this.classN = e;
      this.show1 = false;
    },
    // confirmName(e) {
    //   window.console.log(e);
    //   this.ptN = e;
    //   this.show2 = false;
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.ptCell {
  margin-bottom: 5px;
}
</style>
