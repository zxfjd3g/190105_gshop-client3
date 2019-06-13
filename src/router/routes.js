// import MSite from '../pages/MSite/MSite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'

// import() : 被引入的模块进行单独打包
// 包含import()的组件函数开始不执行,  第一次请求时才执行(才去请求加载对应的打包文件)
const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')


import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import Goods from '../pages/Shop/Goods/Goods.vue'
import Ratings from '../pages/Shop/Ratings/Ratings.vue'
import Info from '../pages/Shop/Info/Info.vue'
import NotFound from '../pages/NotFound/NotFound.vue'

import A from '../pages/test/A.vue'
import B from '../pages/test/B.vue'
import B1 from '../pages/test/B1.vue'
import B2 from '../pages/test/B2.vue'


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

  {
    path: '/a',
    component: A
  }, {
    path: '/b',
    component: B,
    children: [{
        path: '/b/b1',
        component: B1
      },
      {
        path: '/b/b2',
        component: B2
      },
    ]
  },

  { // 当访问根路径自动重定向到/miste
    path: '/',
    redirect: '/msite'
  }
]
