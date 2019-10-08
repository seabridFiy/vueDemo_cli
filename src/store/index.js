import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'

Vue.use(Vuex)

const state = {
    author: '陈佳搏'
}

export default new Vuex.Store({
  state,
  modules,
  actions,
  mutations
})
