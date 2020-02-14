<template>
  <div id="report">
    <van-cell class="ptCell" title="班级名称" :value="value0" @click="showPopup0" />
    <van-cell class="ptCell" title="上课教师" :value="value1" @click="showPopup1" />
    <van-cell class="ptCell" title="是否出勤" :value="value2" @click="showPopup2" />
    <van-cell class="ptCell eduPop" @click="showDialog">
      <van-icon name="todo-list-o" />查看教学计划
    </van-cell>
    <van-field
      class="ptCell"
      v-model="parms.content"
      rows="4"
      height="100px"
      label="上课内容"
      type="textarea"
    />
    <van-field
      class="ptCell"
      v-model="parms.eval"
      rows="4"
      height="100px"
      label="综合评价"
      type="textarea"
    />
    <van-button color="#7232dd" size="large" @click="submit()">提交</van-button>
    <!-- 弹窗 -->
    <van-popup v-model="show0" position="bottom" :style="{ height: '35%'}" round>
      <van-picker show-toolbar title :columns="columns0" @cancel="show0=false" @confirm="confirm0" />
    </van-popup>
    <van-popup v-model="show1" position="bottom" :style="{ height: '35%'}" round>
      <van-picker show-toolbar title :columns="columns1" @cancel="show1=false" @confirm="confirm1" />
    </van-popup>
    <van-popup v-model="show2" position="bottom" :style="{ height: '35%'}" round>
      <van-picker show-toolbar title :columns="columns2" @cancel="show2=false" @confirm="confirm2" />
    </van-popup>
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
  Popup,
  Dialog
} from "vant";
Vue.use(Picker)
  .use(Button)
  .use(Cell)
  .use(Field)
  .use(Calendar)
  .use(Popup)
  .use(Dialog)
  .use(CellGroup);
export default {
  name: "report",
  data() {
    return {
      value0: "请选择",
      value1: "请选择",
      value2: "请选择",
      show2: false,
      show0: false,
      show1: false,
        eduPlan:"教学计划教学计划教学计划教学计划教学计划教学计划教学计划教学计划教学计划教学计划",
      columns0: [
        { key: 0, text: "一班" },
        { key: 1, text: "二班" }
      ],
      columns1: [
        { key: 0, text: "王雅倩" },
        { key: 1, text: "王雅倩" }
      ],
      columns2: [
        { key: true, text: "是" },
        { key: false, text: "否" }
      ],
      parms: {
        classN: "请选择",
        teacherN: "请选择",
        attendance: "请选择",
        content: "",
        eval: ""
      }
    };
  },
  methods: {
    //班级
    showPopup0() {
      this.show0 = true;
    },
    confirm0(e) {
      this.value0 = e.text;
      this.show0 = false;
      this.parms.classN = e.key;
    },
    //教师
    showPopup1() {
      this.show1 = true;
    },
    confirm1(e) {
      this.value1 = e.text;
      this.show1 = false;
      this.parms.teacherN = e.key;
    },
    //出勤
    showPopup2() {
      this.show2 = true;
    },
    confirm2(e) {
      this.value2 = e.text;
      this.show2 = false;
      this.parms.attendance = e.key;
    },
    showDialog() {
      Dialog.alert({
        message:this.eduPlan
      }).then(() => {
        // on close
      });
    },
    submit() {
      window.console.log(this.parms);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.ptCell {
  margin-bottom: 5px;
}
.eduPop div {
  text-align: center;
  color: rgb(0, 102, 255);
}
.eduPop .van-icon {
  vertical-align: middle;
  margin-right: 5px;
}
.van-dialog__content .van-dialog__message{
    text-align: left
}
</style>
