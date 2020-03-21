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
import login from "./components/login.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: "/home",
            component: home,
            meta: {
                title: "首页",
                keepAlive:false,
                tabbarAlive:true
            }
        },
        {
            path: "/myClass",
            component: myClass,
            meta: {
                title: "我的班级",
                keepAlive:true,
                tabbarAlive:true
            }
        },
        {
            path: "/personalInfo",
            component: personalInfo,
            meta: {
                title: "个人资料",
                keepAlive:true,
                tabbarAlive:false
            }
        },
        {
            path: "/attStatistics",
            component: attStatistics,
            meta: {
                title: "出勤统计",
                keepAlive:true,
                tabbarAlive:true
            }
        },
        {
            path: "/partTime",
            component: partTime,
            meta: {
                title: "助教监督",
                keepAlive:true,
                tabbarAlive:true
            }
        },
        {
            path: "/studentList",
            component: studentList,
            meta: {
                title: "学员列表",
                keepAlive:true,
                tabbarAlive:false
            }
        },
        {
            path: "/teacherRank",
            component: teacherRank,
            meta: {
                title: "教师排名",
                keepAlive:true,
                tabbarAlive:false
            }
        },
        {
            path: "/tuitionFee",
            component: tuitionFee,
            meta: {
                title: "课时费",
                keepAlive:true,
                tabbarAlive:false
            }
        },
        {
            path: "/studentDetails",
            component: studentDetails,
            meta: {
                title: "学员详情",
                keepAlive:true,
                tabbarAlive:true
            }
        },
        {
            path: "/personal",
            component: personal,
            meta: {
                title: "个人中心",
                keepAlive:true,
                tabbarAlive:true
            }
        },
        {
            path: "/login",
            component: login,
            meta: {
                title: "登录",
                keepAlive:false,
                tabbarAlive:false
            }
        },
        {
            path: '/',
            redirect: '/home'
        }
    ],
    mode: 'history'
})

// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') {
//       next();
//     } else {
//       let token = localStorage.getItem('Authorization');
   
//       if (token === 'null' || token === '') {
//         next('/login');
//       } else {
//         next();
//       }
//     }
//   });
//   export default router;