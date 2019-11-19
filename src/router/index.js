import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../components/Login'
// import Home from '../components/Home'
// import Welcome from '../components/Welcome'
// import Table from '../components/data/Table'
// import Tag from '../components/data/Tag'
// import Step from '../components/data/Step.vue'
// import Chart from '../components/data/Chart.vue'
// 路由懒加载
const Login = () => import(/* webpackChunkName: "group-vue" */ '../components/Login')
const Home = () => import(/* webpackChunkName: "group-vue" */ '../components/Home')
const Welcome = () => import(/* webpackChunkName: "group-vue" */ '../components/Welcome')
const Table = () => import(/* webpackChunkName: "group-vue" */ '../components/data/Table')
const Tag = () => import(/* webpackChunkName: "group-vue" */ '../components/data/Tag')
const Step = () => import(/* webpackChunkName: "group-vue" */ '../components/data/Step.vue')
const Chart = () => import(/* webpackChunkName: "group-vue" */ '../components/data/Chart.vue')
const Layout = () => import(/* webpackChunkName: "group-vue" */ '../components/basic/layout.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [{
      path: '/welcome',
      component: Welcome
    },
    {
      path: '/table',
      component: Table
    },
    {
      path: '/tag',
      component: Tag
    },
    {
      path: '/step',
      component: Step
    },
    {
      path: '/chart',
      component: Chart
    },
    {
      path: '/layout',
      component: Layout
    }]
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})

export default router
