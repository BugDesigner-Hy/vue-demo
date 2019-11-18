import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './style/global.css'
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueQuillEditor)

Vue.config.productionTip = false

Vue.use(ElementUI)

axios.defaults.baseURL = 'xxxxx'

axios.interceptors.request.use(config => {
  // loading效果
  NProgress.start()

  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

axios.interceptors.response.use(config => {
  NProgress.done()
  console.log(config)
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')
