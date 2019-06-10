/*
管理msite相关状态数据的模块
*/
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
} from '../mutation-types'

const state = {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {}, // 当前地址信息对象
  categorys: [], // 商品分类的数组
  shops: [], // 商家数组
}
const mutations = {
  [RECEIVE_ADDRESS](state, address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, shops) {
    state.shops = shops
  },
}
const actions = {
  /* 
  获取地址的异步action
  */
  async getAddress ({commit, state}) {// state是当前模块的state
    const {longitude, latitude} = state
    // 1. 执行异步(发ajax请求获取数据)
    const result = await reqAddress(longitude, latitude)
    // 2. 成功后, 提交mutation更新状态数据
    if (result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },

  /* 
  获取商品分类列表的异步action
  */
  async getCategorys ({commit}, cb) {
    // 1. 执行异步(发ajax请求获取数据)
    const result = await reqCategorys()
    // 2. 成功后, 提交mutation更新状态数据
    if (result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)

      // 在commit()之后执行cb函数
      typeof cb === 'function' && cb()
    }
  },

  /* 
  获取商家列表的异步action
  */
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    // 1. 执行异步(发ajax请求获取数据)
    const result = await reqShops(longitude, latitude)
    // 2. 成功后, 提交mutation更新状态数据
    if (result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  },
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}