<template>
  <div id="report">
    <van-cell class="ptCell" title="截止时间" value="2020-2-2 18：00" />
    <van-cell class="ptCell" title="是否完成" :value="comp" @click="showPopup" />
    <van-popup v-model="show" position="bottom" :style="{ height: '35%'}" round>
      <van-picker show-toolbar title :columns="columns" @cancel="show=false" @confirm="confirm" />
    </van-popup>
    <van-field
      class="ptCell"
      v-model="parms.note"
      rows="4"
      height="100px"
      label="添加备注"
      type="textarea"
    />
    <van-row class="rpB" type="flex" justify="center">
      <van-col span="23">
        <van-button color="#209aff" size="large" @click="submit()">提交</van-button>
      </van-col>
    </van-row>
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
  Row,
  Col
} from "vant";
Vue.use(Picker)
  .use(Button)
  .use(Cell)
  .use(Field)
  .use(Calendar)
  .use(Row)
  .use(Col)
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
        { key: true, text: "已完成" },
        { key: false, text: "未完成" }
      ],
      parms: {
        complate: "",
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
      this.parms.complate = e.key;
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
.rpB {
  position: fixed;
  background-color: white;
  padding: 10px 0;
  bottom: 0;
  width: 100%;
}
</style>
