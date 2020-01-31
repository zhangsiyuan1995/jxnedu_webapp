import Vue from "vue";
import VueRouter from "vue-router";

import home from "./components/home.vue";
import myClass from "./components/myClass.vue";
import partTime from "./components/partTime.vue";
import personal from "./components/personal.vue";
import studentList from "./components/studentList.vue";
import studentDetails from "./components/studentDetails.vue";
import tuitionFee from "./components/tuitionFee.vue";
import teacherRank from "./components/teacherRank.vue";
import attStatistics from "./components/attStatistics.vue";
import personalInfo from "./components/personalInfo.vue";
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
                title: "我的班级"
            }
        },
        {
            path: "/personalInfo",
            component: personalInfo,
            meta: {
                title: "个人资料"
            }
        },
        {
            path: "/attStatistics",
            component: attStatistics,
            meta: {
                title: "出勤统计"
            }
        },
        {
            path: "/partTime",
            component: partTime,
            meta: {
                title: "助教监督"
            }
        },
        {
            path: "/studentList",
            component: studentList,
            meta: {
                title: "学员列表"
            }
        },
        {
            path: "/teacherRank",
            component: teacherRank,
            meta: {
                title: "教师排名"
            }
        },
        {
            path: "/tuitionFee",
            component: tuitionFee,
            meta: {
                title: "课时费"
            }
        },
        {
            path: "/studentDetails",
            component: studentDetails,
            meta: {
                title: "学员详情"
            }
        },
        {
            path: "/personal",
            component: personal,
            meta: {
                title: "个人中心"
            }
        },
        {
            path: '/',
            redirect: '/home'
        }
    ],
    mode: 'history'
})