import { login } from '@/api/login'
import { getUserInfoAPI, getUserDetailById } from '@/api/user'

export default {
  namespaced: true,
  state: {
    token: null,
    userInfo: {},
    hrsaasTime: 0
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    },
    ROMOVE_USER_INFO(state) {
      state.userInfo = {}
    },
    ROMOVE_TOKEN(state) {
      state.token = null
    },
    SET_HRSAAS_TIME(state, hrsaasTime) {
      state.hrsaasTime = hrsaasTime
    }
  },
  actions: {
    async loginAction({ commit }, loginData) {
      const data = await login(loginData)
      // console.log(data)
      commit('SET_TOKEN', data)
      commit('SET_HRSAAS_TIME', new Date().getTime())
    },
    async getUserInfo({ commit }) {
      // console.log(111)
      const res = await getUserInfoAPI()
      const res1 = await getUserDetailById(res.userId)
      const result = { ...res, ...res1 }
      // console.log(data)
      commit('SET_USER_INFO', result)
      return JSON.parse(JSON.stringify(result))
    },
    logout({ commit }) {
      commit('ROMOVE_USER_INFO')
      commit('ROMOVE_TOKEN')
    }
  }
}
