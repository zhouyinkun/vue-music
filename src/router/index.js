import Vue from 'vue'
import VueRouter from 'vue-router'
import recommendRouter from './recommend'
import singerRouter from './singer'
import rankRouter from './rank'
import searchRouter from './search'

Vue.use(VueRouter)

const routes = [
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
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  //根目录下设置路由
  base: 'music',
  routes
})

export default router
