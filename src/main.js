import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import store from './vuex/store'

Vue.config.productionTip = false

// 注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, // 配置路由器
  store, // 配置vuex的store
})
