import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';
import apollo from '../apolloClient';
// import { LOGIN } from '../graphql-schemas/auth';

@Module({
  name: 'AuthModule',
  namespaced: true,
})
export default class AuthModule extends VuexModule {
  auth: any = {};

  @Mutation
  setAuth(newAuth: any) {
    this.auth = newAuth;
  }

  get isLogged(): any {
    return !!this.auth.token;
  }

  @Action({ commit: 'setAuth' })
  async login() {
    // const response = await apollo.query({
    //   query: LOGIN,
    // });

    // return response.data.auth;
    return null;
  }
}
