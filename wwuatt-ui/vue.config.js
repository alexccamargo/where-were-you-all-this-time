module.exports = {
  transpileDependencies: [
    'vuetify',
    'vuex-module-decorators',
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'pt',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
};
