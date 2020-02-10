<template>
  <div id="partTime">
    <van-cell class="ptCell" title="已请假次数" value="2" />
    <van-cell title="请假时间" :value="date" @click="show = true" />
    <van-calendar v-model="show" type="range" @confirm="onConfirm" />
    <!-- <van-cell class="ptCell" title="助教姓名" :value="ptN" @click="showPopup3" /> -->
    <!-- <van-field class="ptCell" v-model="value" label="评分" placeholder="满分10" input-align="right" type="digit"/> -->
    <van-field
      class="ptCell"
      v-model="message"
      rows="1"
      height="100px"
      label="请假原因"
      type="textarea"
    />
    <van-button color="#7232dd" size="large">提交</van-button>
    <!-- 日期弹窗 -->
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
  Calendar,
  Popup
} from "vant";
Vue.use(Picker)
  .use(Button)
  .use(Cell)
  .use(Field)
  .use(Calendar)
  .use(Popup)
  .use(CellGroup);
export default {
  name: "partTime",
  data() {
    return {
      value: "",
      message: "",
      date: "",
      show: false
    };
  },
  methods: {
    //时间弹窗点击确认
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.ptCell {
  margin-bottom: 5px;
}
</style>
