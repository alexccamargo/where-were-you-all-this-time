import { Query, Resolver } from "type-graphql";
import { Movie } from "../schemas/movie";
import { MovieService } from "../services/movie.service";

@Resolver()
export class MovieResolver {

  constructor(private readonly movieService: MovieService) { }

  @Query(() => [Movie])
  async movies() {
    const movies = await this.movieService.getMovies();
    return movies.map(m => new Movie(m));
  }
}
