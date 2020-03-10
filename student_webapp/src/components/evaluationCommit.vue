<template>
  <div id="evaluationCommit">
    <div class="eCBg"></div>

    <van-row type="flex" justify="center">
      <van-col class="eCcontent" span="22">
        <van-row class="eCcontents">
          <van-col span="24">
            <div class="eChead">
              <img src="../assets/img/pHead.png" alt />
              <div>
                <h2>Mei qi</h2>
                <p>帐号：10000000</p>
                <h1>您的评价让我们做得更好</h1>
                <p>你的反馈将有助于提高我们教师的授课经验</p>
              </div>
              <p class="eCheadp">为教师服务打分</p>
              <van-rate
                v-model="value"
                :size="50"
                void-icon="star"
                void-color="#eee"
                allow-half
                @change="onChange"
              />
              <van-cell class="elCell" :title="name" @click="showPopup" />
              <van-field class="elCell"
                v-model="message"
                rows="5"
                type="textarea"
                placeholder="请输入留言"
                show-word-limit
              />
               <van-button type="info" size="large" style="margin-top:30px">提交评价</van-button>
              <van-popup v-model="show" position="bottom" :style="{ height: '35%'}" round>
                <van-picker
                  show-toolbar
                  title
                  :columns="columns"
                  @cancel="show=false"
                  @confirm="confirmClass"
                />
              </van-popup>
            </div>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Row,
  Col,
  Button,
  Field,
  Picker,
  Icon,
  Divider,
  Rate,
  Popup
} from "vant";
Vue.use(Row)
  .use(Col)
  .use(Button)
  .use(Picker)
  .use(Icon)
  .use(Divider)
  .use(Rate)
  .use(Popup)
  .use(Field);
export default {
  name: "evaluationCommit",
  data() {
    return {
      value: 0,
      show: false,
      message:"",
      name: "选择教师名称",
      columns: ["梁苏萌", "梁苏萌", "梁苏萌", "梁苏萌", "梁苏萌"]
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    onChange(value) {
      window.console.log(value);
    },
    confirmClass(e) {
      window.console.log(e);
      this.name = e;
      this.show = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.eCBg {
  height: 200px;
  background-color: #209aff;
  width: 100%;
}
.eCcontent {
  position: relative;
  top: -100px;
}
.eCcontents {
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgb(212, 212, 212) 0px 0px 8px;
  text-align: center;
}
.eCcontents img {
  width: 80px;
  box-shadow: 0 0 25px rgb(236, 236, 236);
  border-radius: 40px;
}
.eChead {
  position: relative;
  top: -50px;
}
.eChead div p {
  font-size: 11px;
  color: #666;
}
.eChead h1 {
  margin-top: 40px;
  font-size: 24px;
  color: red;
  font-weight: 300;
}
.eCheadp {
  margin-top: 40px;
  color: rgb(172, 172, 172);
}
.eChead .elCell {
  background-color: rgb(241, 241, 241);
  border-radius: 10px;
  margin-top: 20px;
  color: #666;
}
</style>
