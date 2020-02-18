import Vue from 'vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost';

import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

const apolloClient = new ApolloClient<{}>({
  uri: process.env.VUE_APP_SERVICE_URL,
});

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
  render: h => h(App),
}).$mount('#app');
