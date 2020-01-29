import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import axios from 'axios';
import { serviceUrl } from '../../env.json';

@Resolver()
export class MoviesResolver {

  @Query()
  async movies() {
    const res = await axios.get(`${serviceUrl}/movies`);
    return res.data;
  }

  @Mutation()
  async createMovie(@Args('name') name: string, @Args('imdb') imdb: string) {
    const newMovie = { name, imdb };
    const res = await axios.post(`${serviceUrl}/movies`, newMovie);
    return res.data;
  }
}