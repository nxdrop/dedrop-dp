import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import zhHans from 'vuetify/lib/locale/zh-Hans'
import zhHant from 'vuetify/lib/locale/zh-Hant'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { zhHans, zhHant },
    current: 'zhHans',
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#6B72EA',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
})
