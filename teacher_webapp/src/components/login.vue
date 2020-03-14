<template>
  <div id="login">
    <img class="loginLogo" src="../assets/img/logo.png" alt />
    <van-row type="flex" justify="center">
      <van-col span="21">
        <div class="loginB">
          <van-form @submit="onSubmit">
            <van-field
              style="margin: 20px 0 20px 0;"
              v-model="loginForm.username"
              name="用户名"
              left-icon="user-o"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="loginForm.password"
              type="password"
              name="密码"
              left-icon="chat-o"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 50px 16px 50px 16px;">
              <van-button block type="info" native-type="submit">提交</van-button>
            </div>
          </van-form>
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import Vue from "vue";
import { Picker, Button, Field, Form, Col, Row, Popup } from "vant";
Vue.use(Picker)
  .use(Button)
  .use(Col)
  .use(Row)
  .use(Field)
  .use(Form)
  .use(Popup);
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      let _this = this;
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        alert("账号或密码不能为空");
      } else {
        this.axios({
          method: "post",
          url: "/user/login",
          data: _this.loginForm
        })
          .then(res => {
            window.console.log(res.data);
            _this.userToken = "Bearer " + res.data.data.body.token;
            // 将用户token保存到vuex中
            _this.changeLogin({ Authorization: _this.userToken });
            _this.$router.push("/home");
            alert("登陆成功");
          })
          .catch(error => {
            alert("账号或密码错误");
            window.console.log(error);
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html {
  height: 100%;
}
body {
  height: inherit;
}
#app {
  height: inherit;
}
#login {
  height: inherit;
  background-image: url("../assets/img/bgLogin.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.loginLogo {
  width: 250px;
  display: block;
  margin: 0 auto;
  padding-top: 80px;
}
.loginB {
  padding: 20px;
  margin-top: 80px;
  background-image: url("../assets/img/loginBlockBg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
