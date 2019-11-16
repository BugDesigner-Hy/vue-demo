import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './style/global.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI)

axios.defaults.baseURL = 'xxxxx'

axios.interceptors.request.use(config => {
  console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});

Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')
