import { Query, Resolver } from "type-graphql";
import { Movie } from "../schemas/movie";
import { MovieService } from "../services/movie.service";

@Resolver()
export class MovieResolver {
  @Query(() => [Movie])
  async movies() {
    return MovieService.getMovies()
  }
}
