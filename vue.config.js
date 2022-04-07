const { resolveAlias } = require('./ci/vcli-conf/resolve-alias')

module.exports = {
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false,
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        ...resolveAlias,
      },
    },
  },
}
