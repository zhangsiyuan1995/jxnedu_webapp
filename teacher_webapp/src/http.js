import axios from 'axios'
// import Vue from 'vue'
// import router from './router'

const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api'
})


//检测是否存在token
// http.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     if(sessionStorage.token){
//         config.headers.Authorization ='Bearer '+sessionStorage.token
//     }
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// http.interceptors.response.use(res => {
//     return res
// }, err => {
//     if(err.response.data.message){
//         // console.log(err.response.data.message)
//         Vue.prototype.$message({
//             type: 'error',
//             message: err.response.data.message
//         })
//         if(err.response.status === 401){
//             router.push('/login')
//         }
//     }
   
//     return Promise.reject(err)
// })
export default http