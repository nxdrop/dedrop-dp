import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    currentLocale: 'en',
    dappTitle: '',
    xsHideCls: 'd-none d-sm-flex',
    xsShowCls: 'd-flex d-sm-none',
    dense: false,
    drawer: false,
  },
  mutations,
  getters: {
    ...getters,
  },
  actions,
}
