import Vue from "vue";
import VueRouter from "vue-router";

import home from "./components/home.vue";
import myCourses from "./components/myCourses.vue";
import makeUpApplication from "./components/makeUpApplication.vue";
import personal from "./components/personal.vue";
import attStatistics from "./components/attStatistics.vue";
import personalInfo from "./components/personalInfo.vue";
import noticeContent from "./components/noticeContent.vue";
import notice from "./components/notice.vue";
import gift from "./components/gift.vue";
import giftPoint from "./components/giftPoint.vue";
import giftHistory from "./components/giftHistory.vue";
import giftRules from "./components/giftRules.vue";
import makeLeave from "./components/makeLeave.vue";
import evaluationList from "./components/evaluationList.vue";
import evaluationCommit from "./components/evaluationCommit.vue";
import studentRank from "./components/studentRank.vue";
import grade from "./components/grade.vue";
Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: "/home",
            component: home,
            meta: {
                title: "首页",
                tabbar:true
            }
        },
        {
            path: "/myCourses",
            component: myCourses,
            meta: {
                title: "我的课程",
                keepAlive: false,
                tabbar:true
            }
        },
        {
            path: "/personalInfo",
            component: personalInfo,
            meta: {
                title: "个人资料",
                keepAlive: true,
                tabbar:false
            }
        },
        {
            path: "/attStatistics",
            component: attStatistics,
            meta: {
                title: "出勤统计",
                keepAlive: true,
                tabbar:true
            }
        },
        {
            path: "/makeUpApplication",
            component: makeUpApplication,
            meta: {
                title: "补课申请",
                keepAlive: true,
                tabbar:true
            }
        },

        {
            path: "/personal",
            component: personal,
            meta: {
                title: "个人中心",
                keepAlive: true,
                tabbar:true
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
                keepAlive: true,
                tabbar:true
            }
        },

        {
            path: "/gift",
            component: gift,
            meta: {
                title: "福利商城",
                keepAlive: true,
                tabbar:true
            }
        },
        {
            path: "/giftPoint",
            component: giftPoint,
            meta: {
                title: "我的积分",
                keepAlive: true,
                tabbar:false
            }
        },
        {
            path: "/giftHistory",
            component: giftHistory,
            meta: {
                title: "兑换记录",
                keepAlive: true,
                tabbar:true
            }
        },
        {
            path: "/giftRules",
            component: giftRules,
            meta: {
                title: "积分规则",
                keepAlive: true,
                tabbar:false
            }
        },
        {
            path: "/makeLeave",
            component: makeLeave,
            meta: {
                title: "请假",
                keepAlive: true,
                tabbar:true
            }
        },
        {
            path: "/evaluationList",
            component: evaluationList,
            meta: {
                title: "我的评价",
                keepAlive: true,
                tabbar:true
            }
        },
        {
            path: "/evaluationCommit",
            component: evaluationCommit,
            meta: {
                title: "评价",
                keepAlive: true,
                tabbar:true
            }
        },
        {
            path: "/noticeContent",
            component: noticeContent,
            meta: {
                title: "通知",
                keepAlive: true,
                tabbar:false
            }
        },
        {
            path: "/studentRank",
            component: studentRank,
            meta: {
                title: "我的排名",
                keepAlive: true,
                tabbar:false
            }
        },
        {
            path: "/grade",
            component: grade,
            meta: {
                title: "我的成绩",
                keepAlive: true,
                tabbar:true
            }
        },
    ],
    mode: 'history'
})