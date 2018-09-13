import axios from 'axios'
const serve = axios.create({
  baseURL: 'http://api.onlypic.cc',
  timeout: 5000,
  method: 'POST'
})
export default serve
// //添加一个请求拦截器
// axios.interceptors.request.use(function(config){
//   //在请求发送之前做一些事
//   return config;
// },function(error){
//   //当出现请求错误是做一些事
//   return Promise.reject(error);
// });

// //添加一个返回拦截器
// axios.interceptors.response.use(function(response){
//   //对返回的数据进行一些处理
//   return response;
// },function(error){
//   //对返回的错误进行一些处理
//   return Promise.reject(error);
// });
