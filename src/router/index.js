/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from "vue-router"
import routes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  // 应用中所有路由
  routes
})

const paths = ['/a', '/b']

// 注册全局前置守卫
router.beforeEach((to, from, next) => {
  console.log('全局 beforeEach', to, from)
  // 如果目标路由是否需要检查登陆的
  const path = to.path
  if (paths.indexOf(path)!==-1) {
    // 如果不没有登陆, 直接跳转到login
    if (!Vue.store.state.user.user._id) {
      return next('/login')
    }
  }
  // 放行
  next()
}) 

export default router
