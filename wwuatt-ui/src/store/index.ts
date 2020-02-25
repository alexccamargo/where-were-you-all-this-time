import Vue from 'vue';
import Vuex from 'vuex';

import GenreModule from './genre.store';
import AuthModule from './auth.store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAppLoading: false,
  },
  mutations: {
    changeAppLoadingState(state: any, appLoadingState) {
      state.isAppLoading = appLoadingState;
    },
  },
  actions: {
  },
  modules: {
    AuthModule,
    GenreModule,
  },
});
