import { Query, Resolver } from "type-graphql";
import { Movie } from "../schemas/movie";
import { IMovieService } from "../services/services.interfaces";
import { MovieService } from "../services/movie.service";

@Resolver()
export class MovieResolver {

  public movieService: IMovieService;

  constructor() { 
    this.movieService = new MovieService();
  }

  @Query(() => [Movie])
  async movies() {
    return this.movieService.getMovies()
  }
}
