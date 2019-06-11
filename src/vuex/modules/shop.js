/*
管理商家模块相关状态数据的模块
*/
import Vue from "vue";
import {
  reqGoods,
  reqRatings,
  reqInfo
} from '../../api'
import {
  RECEIVE_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
} from '../mutation-types'


const state = {
  goods: [], // 商品列表
  ratings: [], // 商家评价列表
  info: {}, // 商家信息
}
const mutations = {
  [RECEIVE_INFO](state, {info}) { // 接收包含数据的对象
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },

  /* 
  给一个响应式对象添加一个新的属性, 没有数据绑定

  */
  [ADD_FOOD_COUNT](state, {food}) {
    if (!food.count) { // 第一次
      // food.count = 1  // 给food添加一个新的属性
      // food.name = "xxx"
      // 为响应式对象添加一个属性，确保新属性也是响应式的，并且能够触发视图更新
      Vue.set(food, 'count', 1)
    } else {
      food.count++
    }
  },

  [REDUCE_FOOD_COUNT](state, {food}) {
    if (food.count>0) {
      food.count--
    }
    
  },
}
const actions = {
  /* 
  获取商家信息的异步action
  */
  async getInfo ({commit}) {
    // 发送异步ajax请求
    const result = await reqInfo()
    // 成功后,提交mutation去更新状态数据
    if (result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

  /* 
  获取商品列表的异步action
  */
  async getGoods ({commit}) {
    // 发送异步ajax请求
    const result = await reqGoods()
    // 成功后,提交mutation去更新状态数据
    if (result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  },

  /* 
  获取评价列表的异步action
  */
  async getRatings ({commit}) {
    // 发送异步ajax请求
    const result = await reqRatings()
    // 成功后,提交mutation去更新状态数据
    if (result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },

  /* 
  更新指定food的数量
  */
  updateFoodCount ({commit}, {isAdd, food}) {
    if (isAdd) { // 增加
      commit(ADD_FOOD_COUNT, {food})
    } else { // 减少
      commit(REDUCE_FOOD_COUNT, {food})
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}