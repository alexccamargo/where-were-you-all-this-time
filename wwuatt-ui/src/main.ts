import Vue from 'vue';
import VueApollo from 'vue-apollo';

import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import apolloClient from './apolloClient';
import i18n from './i18n';

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.config.productionTip = false;
Vue.use(VueApollo);

new Vue({
  router,
  store,
  apolloProvider,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app');
