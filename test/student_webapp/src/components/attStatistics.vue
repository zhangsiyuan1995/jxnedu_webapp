<template>
  <div id="attStatistics">
    <div class="asBlock">
      <van-image :src="headImg" />
      <div>
        <h3>Mei qi</h3>
        <p>13162288787</p>
      </div>
    </div>
    <van-cell title="平均课时" value="8.4小时" />
    <van-cell title="出勤天数" value="10天" />
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="出勤日期" name="1">
        <van-cell
          v-for="(item,index) in attDate"
          :key="index"
          :title="item.date"
          :value="item.week"
        />
      </van-collapse-item>
      <van-collapse-item title="休息天数" name="2">
        <van-cell
          v-for="(item,index) in restDate"
          :key="index"
          :title="item.date"
          :value="item.week"
        />
      </van-collapse-item>
    </van-collapse>
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
  Collapse,
  CollapseItem,
  Popup
} from "vant";
Vue.use(Picker)
  .use(Button)
  .use(Cell)
  .use(Field)
  .use(Collapse)
  .use(CollapseItem)
  .use(Popup)
  .use(CellGroup);
export default {
  name: "attStatistics",
  data() {
    return {
      headImg: require("../assets/img/head.png"),
      activeName: "",
      attDate: [
        {
          date: "2020-01-04",
          week: "星期日"
        },
        {
          date: "2020-01-04",
          week: "星期日"
        },
        {
          date: "2020-01-04",
          week: "星期日"
        }
      ],
      restDate: [
        {
          date: "2020-01-04",
          week: "星期日"
        },
        {
          date: "2020-01-04",
          week: "星期日"
        },
        {
          date: "2020-01-04",
          week: "星期日"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.asBlock img,
.asBlock div {
  display: inline-block;
}
.asBlock img {
  width: 50px;
  margin-right: 10px;
  vertical-align: bottom;
}
.asBlock {
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 1px 1px 1px 1px rgb(224, 224, 224);
  margin: 2px 0;
}
.asBlock div p {
  color: #888888;
}
.asBlock div h3 {
  color: #333;
  font-weight: 500;
}
</style>
