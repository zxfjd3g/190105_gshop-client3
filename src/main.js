import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import CartControl from './components/CartControl/CartControl.vue'
import Split from './components/Split/Split.vue'
import store from './vuex/store'
import './validate'
import './mock/mock-server'
import './filters'

Vue.config.productionTip = false

// 注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component('CartControl', CartControl)
Vue.component('Split', Split)
Vue.component(Button.name, Button) // mt-button

Vue.prototype.$eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, // 配置路由器
  store, // 配置vuex的store
})
