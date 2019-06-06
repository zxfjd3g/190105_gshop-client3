import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import Goods from '../pages/Shop/Goods/Goods.vue'
import Ratings from '../pages/Shop/Ratings/Ratings.vue'
import Info from '../pages/Shop/Info/Info.vue'

export default [
  {
    path: '/msite',
    component: MSite,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFoot: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/goods',
        component: Goods
      },
      {
        path: '/shop/ratings',
        component: Ratings
      },
      {
        path: '/shop/info',
        component: Info
      },
      { 
        path: '/shop',
        redirect: '/shop/goods'
      }
    ]
  },

  { // 当访问根路径自动重定向到/miste
    path: '/',
    redirect: '/msite'
  }
]
