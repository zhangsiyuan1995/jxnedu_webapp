import Vue from "vue";
import VueRouter from "vue-router";

import home from "./components/home.vue";
import myClass from "./components/myClass.vue";
import partTime from "./components/partTime.vue";
import personal from "./components/personal.vue";
import studentList from "./components/studentList.vue";
import studentDetails from "./components/studentDetails.vue";
import tuitionFee from "./components/tuitionFee.vue";
import studentRank from "./components/studentRank.vue";
import attStatistics from "./components/attStatistics.vue";
import personalInfo from "./components/personalInfo.vue";

import notice from "./components/notice.vue";
Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: "/home",
            component: home,
            meta: {
                title: "首页"
            }
        },
        {
            path: "/myClass",
            component: myClass,
            meta: {
                title: "我的班级",
                keepAlive:true
            }
        },
        {
            path: "/personalInfo",
            component: personalInfo,
            meta: {
                title: "个人资料",
                keepAlive:true
            }
        },
        {
            path: "/attStatistics",
            component: attStatistics,
            meta: {
                title: "出勤统计",
                keepAlive:true
            }
        },
        {
            path: "/partTime",
            component: partTime,
            meta: {
                title: "助教监督",
                keepAlive:true
            }
        },
        {
            path: "/studentList",
            component: studentList,
            meta: {
                title: "学员列表",
                keepAlive:true
            }
        },
        {
            path: "/studentRank",
            component: studentRank,
            meta: {
                title: "学生排名",
                keepAlive:true
            }
        },
        {
            path: "/tuitionFee",
            component: tuitionFee,
            meta: {
                title: "课时费",
                keepAlive:true
            }
        },
        {
            path: "/studentDetails",
            component: studentDetails,
            meta: {
                title: "学员详情",
                keepAlive:true
            }
        },
        {
            path: "/personal",
            component: personal,
            meta: {
                title: "个人中心",
                keepAlive:true
            }
        },
        {
            path: '/',
            redirect: '/home'
        },


        {
            path: "/notice",
            component: notice,
            meta: {
                title: "通知",
                keepAlive:true
            }
        },
    ],
    mode: 'history'
})