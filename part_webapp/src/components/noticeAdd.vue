<template>
  <div id="report">
    <van-cell class="ptCell" title="选择班级" :value="comp" @click="showPopup" />
    <van-popup v-model="show" position="bottom" :style="{ height: '35%'}" round>
      <van-picker show-toolbar title :columns="columns" @cancel="show=false" @confirm="confirm" />
    </van-popup>
    <van-field
      class="ptCell"
      v-model="parms.note"
      rows="4"
      height="100px"
      label="通知内容"
      type="textarea"
    />
    <van-button color="#7232dd" size="large" @click=submit()>提交</van-button>
    <!-- 日期弹窗 -->
  </div>
</template>

<script>
import Vue from "vue";
import { Picker, Button, Cell, CellGroup, Field, Calendar, Popup } from "vant";
Vue.use(Picker)
  .use(Button)
  .use(Cell)
  .use(Field)
  .use(Calendar)
  .use(Popup)
  .use(CellGroup);
export default {
  name: "report",
  data() {
    return {
      value: "",
      show: false,
      comp: "请选择",
      columns: [
        { id: "138", text: "一班" },
        { id: "12568", text: "二班" }
      ],
      parms: {
        class: "",
        note: ""
      }
    };
  },
  methods: {
    //时间弹窗点击确认

    showPopup() {
      this.show = true;
    },
    confirm(e) {
      this.comp = e.text;
      this.show = false;
      this.parms.class = e.id;
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
</style>
