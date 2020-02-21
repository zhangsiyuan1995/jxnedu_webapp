import Vue from "vue";
import VueRouter from "vue-router";

import home from "./components/home.vue";
import personal from "./components/personal.vue";
import attStatistics from "./components/attStatistics.vue";
import personalInfo from "./components/personalInfo.vue";
import evaluationList from "./components/evaluationList.vue";
import evaluationCommit from "./components/evaluationCommit.vue";
import myMission from "./components/myMission.vue";
import report from "./components/report.vue";
import teacherSupervision from "./components/teacherSupervision.vue";
import studentManager from "./components/studentManager.vue";
import evaluationDetails from "./components/evaluationDetails.vue";
import qrCode from "./components/qrCode.vue";
import scoreEntry from "./components/scoreEntry.vue";
import register from "./components/register.vue";
import moneyList from "./components/moneyList.vue";

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
            path: "/personalInfo",
            component: personalInfo,
            meta: {
                title: "个人资料",
                keepAlive: true
            }
        },
        {
            path: "/attStatistics",
            component: attStatistics,
            meta: {
                title: "出勤统计",
                keepAlive: true
            }
        },
        {
            path: "/personal",
            component: personal,
            meta: {
                title: "个人中心",
                keepAlive: true
            }
        },
        {
            path: '/',
            redirect: '/home'
        },

        {
            path: "/evaluationList",
            component: evaluationList,
            meta: {
                title: "我的评价",
                keepAlive: true
            }
        },
        {
            path: "/evaluationCommit",
            component: evaluationCommit,
            meta: {
                title: "评价",
                keepAlive: true
            }
        },
        {
            path: "/myMission",
            component: myMission,
            meta: {
                title: "任务",
                keepAlive: false
            }
        },
        {
            path: "/report",
            component: report,
            meta: {
                title: "任务汇报",
                keepAlive: true
            }
        },
        {
            path: "/teacherSupervision",
            component: teacherSupervision,
            meta: {
                title: "教师监督",
                keepAlive: true
            }
        },
        {
            path: "/studentManager",
            component: studentManager,
            meta: {
                title: "学生管理",
                keepAlive: false
            }
        },
        {
            path: "/evaluationDetails",
            component: evaluationDetails,
            meta: {
                title: "评价详情",
                keepAlive: true
            }
        },
        {
            path: "/qrCode",
            component: qrCode,
            meta: {
                title: "二维码",
                keepAlive: true,
                id:"qrCodeNav"
            }
        },
        {
            path: "/scoreEntry",
            component: scoreEntry,
            meta: {
                title: "成绩录入",
                keepAlive: true,
            }
        },
        {
            path: "/register",
            component: register,
            meta: {
                title: "签到详情",
                keepAlive: true,
                id:"registerNav"
            }
        },
        {
            path: "/moneyList",
            component: moneyList,
            meta: {
                title: "薪资详情",
                keepAlive: true,
                id:"moneyListNav"
            }
        },
    ],
    mode: 'history'
})