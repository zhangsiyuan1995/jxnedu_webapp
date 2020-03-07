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
import moneyDetails from "./components/moneyDetails.vue";
import moneyList from "./components/moneyList.vue";
import notice from "./components/notice.vue";
import noticeContent from "./components/noticeContent.vue";
import noticeAdd from "./components/noticeAdd.vue";
import partRank from "./components/partRank.vue";
import gift from "./components/gift.vue";
import giftPoint from "./components/giftPoint.vue";
import giftHistory from "./components/giftHistory.vue";
import giftRules from "./components/giftRules.vue";
import training from "./components/training.vue";
import myClass from "./components/myClass.vue";

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
                id: "qrCodeNav"
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
                id: "registerNav"
            }
        },
        {
            path: "/moneyDetails",
            component: moneyDetails,
            meta: {
                title: "薪资详情",
                keepAlive: true,
                id: "moneyDetailsNav"
            }
        },
        {
            path: "/moneyList",
            component: moneyList,
            meta: {
                title: "薪资列表",
                keepAlive: true,
            }
        },
        {
            path: "/notice",
            component: notice,
            meta: {
                title: "通知列表",
                keepAlive: true,
                notice:true
            },
          
        },
        {
            path: "/noticeContent/:newsId",
            component: noticeContent,
            meta: {
                title: "",
                keepAlive: true,
            },
          
        },
        {
            path: "/noticeAdd",
            component: noticeAdd,
            meta: {
                title: "新添通知",
                keepAlive: true,
            },
          
        },
        {
            path: "/partRank",
            component: partRank,
            meta: {
                title: "助教排名",
                keepAlive: true,
            },
          
        },
        {
            path: "/gift",
            component: gift,
            meta: {
                title: "福利商城",
                keepAlive: true
            }
        },
        {
            path: "/giftPoint",
            component: giftPoint,
            meta: {
                title: "我的积分",
                keepAlive: true
            }
        },
        {
            path: "/giftHistory",
            component: giftHistory,
            meta: {
                title: "兑换记录",
                keepAlive: true
            }
        },
        {
            path: "/giftRules",
            component: giftRules,
            meta: {
                title: "积分规则",
                keepAlive: true
            }
        },
        {
            path: "/training",
            component: training,
            meta: {
                title: "培训学习",
                keepAlive: true
            }
        },
        {
            path: "/myClass",
            component: myClass,
            meta: {
                title: "我的班级",
                keepAlive: true
            }
        },
    ],
    mode: 'hash'
})