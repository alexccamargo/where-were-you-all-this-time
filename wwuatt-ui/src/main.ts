import Vue from 'vue';
import VueApollo from 'vue-apollo';
import GAuth from 'vue-google-oauth2';

import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import apolloClient from './apolloClient';
import i18n from './i18n';

Vue.config.productionTip = false;
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);

const gauthOption = {
  clientId: '815319278591-0lrml1rfnfptfacu52sv9t6n31ejmd4d.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account',
};

Vue.use(GAuth, gauthOption);

new Vue({
  router,
  store,
  apolloProvider,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app');
