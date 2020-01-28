import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class MoviesResolver {
  moviesMock = [
    { id: 0, name: 'Os imprestaveis', description: 'Aquele filme que todo mundo impresta para todo mundo.' },
    { id: 0, name: 'Afenzas Famuezas', description: 'Of c* is Rol*.' },
  ];

  @Query()
  movies() {
    return this.moviesMock;
  }

  @Mutation()
  createMovie(@Args('name') name: string, @Args('description') description: string) {
    const id = this.moviesMock.length;
    const newMovie = { id, name, description };
    this.moviesMock.push(newMovie);
    return newMovie;
  }
}