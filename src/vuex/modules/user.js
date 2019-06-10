/*
管理user模块相关状态数据的模块
*/

import {
  reqLogout
} from '../../api'

import {
  RECEIVE_USER,
  RESET_USER,
} from '../mutation-types'

const state = {
  user: {}, // 当前登陆用户
}
const mutations = {
  [RECEIVE_USER](state, user) {
    state.user = user
  },
  [RESET_USER](state) {
    state.user = {}
  },
}
const actions = {
  /* 
  退出登陆的异步action
  */
  async logout ({commit}) {
    // 发退出登陆的ajax请求
    const result = await reqLogout()
    // 成功后重置user数据
    if (result.code===0) {
      commit(RESET_USER)
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