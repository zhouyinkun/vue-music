import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import recommendRouter from './recommend'
import singerRouter from './singer'
import rankRouter from './rank'
import searchRouter from './search'
=======
import Home from '../views/Home.vue'
>>>>>>> 52706da33b5ff74aa2de99384cbf0a450a2ce3a8

Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
    //这种切换路由是：当切换到about时才会加载about路由，对于大项目来说更好一些
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    recommendRouter,
    singerRouter,
    rankRouter,
    searchRouter,
    //重定向：当路径找不到时默认到movie页面
    {
      path : '/*',
      redirect : '/recommend'
    }
=======
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
>>>>>>> 52706da33b5ff74aa2de99384cbf0a450a2ce3a8
]

const router = new VueRouter({
  mode: 'history',
<<<<<<< HEAD
  //base: process.env.BASE_URL,
  //根目录下设置路由
  base: 'music',
=======
  base: process.env.BASE_URL,
>>>>>>> 52706da33b5ff74aa2de99384cbf0a450a2ce3a8
  routes
})

export default router
