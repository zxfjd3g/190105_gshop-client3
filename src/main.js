import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/Header/Header.vue'

Vue.config.productionTip = false

// 注册全局组件
Vue.component('Header', Header)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, // 配置路由器
})
