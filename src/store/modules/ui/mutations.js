import * as types from './mutation-types'

export default {
  /**
   *
   * @param {*} state
   * @param {*} walletState
   */
  [types.UPD_CURRENT_LOCALE](state, locale) {
    state.currentLocale = locale
  },
}
