import Vue from "vue";
import VueRouter from "vue-router";

import home from "./components/home.vue";
import myCourses from "./components/myCourses.vue";
import makeUpApplication from "./components/makeUpApplication.vue";
import personal from "./components/personal.vue";
import studentList from "./components/studentList.vue";
import studentDetails from "./components/studentDetails.vue";
import tuitionFee from "./components/tuitionFee.vue";
import studentRank from "./components/studentRank.vue";
import attStatistics from "./components/attStatistics.vue";
import personalInfo from "./components/personalInfo.vue";

import notice from "./components/notice.vue";
import gift from "./components/gift.vue";
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
            path: "/myCourses",
            component: myCourses,
            meta: {
                title: "我的课程",
                keepAlive:false
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
            path: "/makeUpApplication",
            component: makeUpApplication,
            meta: {
                title: "补课申请",
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
        
        {
            path: "/gift",
            component: gift,
            meta: {
                title: "福利商城",
                keepAlive:true
            }
        },
    ],
    mode: 'history'
})