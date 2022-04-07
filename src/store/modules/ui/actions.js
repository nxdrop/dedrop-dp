import * as types from './mutation-types'

export const changeLocale = ({ commit }, locale = 'en') => {
  commit(types.UPD_CURRENT_LOCALE, locale)
}
