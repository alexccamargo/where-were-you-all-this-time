import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';
import apollo from '../apolloClient';
import { GET_GENRES } from '../graphql-schemas/genres';

import { GenreModel } from '../models/genre.model';

@Module({
  name: 'GenreModule',
  namespaced: true,
})
export default class GenreModule extends VuexModule {
  genres: GenreModel[] = [];

  lastUpdate?: Date;

  @Mutation
  setGenres(newGenres: GenreModel[]) {
    this.genres = newGenres;
    this.lastUpdate = new Date();
  }

  get allGenres(): GenreModel[] {
    return this.genres || [];
  }

  @Action({ commit: 'setGenres' })
  async getGenres() {
    const response = await apollo.query({
      query: GET_GENRES,
    });

    return response.data.genres;
  }
}
