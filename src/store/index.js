import Vue from 'vue'
import Vuex from 'vuex'

import ui from './modules/ui'
import biz from './modules/biz'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ui,
    biz,
  },
})
