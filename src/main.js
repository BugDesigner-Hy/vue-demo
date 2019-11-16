import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './style/global.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$http = axios
axios.defaults.baseURL = 'xxxxx'

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')
