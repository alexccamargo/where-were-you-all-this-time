import { Query, Resolver, FieldResolver, Root, Mutation, Arg } from "type-graphql";
import { Movie } from "../schemas/movie";
import { MovieService } from "../services/movie.service";
import { GenreService } from "../services/genre.service";
import { AddMovieInput } from "../schemas/movie.input";

@Resolver(of => Movie)
export class MovieResolver {

  constructor(private readonly movieService: MovieService, private readonly genreService: GenreService) { }

  @Query(() => [Movie])
  async movies() {
    const movies = await this.movieService.getMovies();
    return movies.map(m => new Movie(m));
  }

  @FieldResolver()
  async genres(@Root() movie: Movie) {
    console.log(movie);
    const genres = await this.genreService.getGenresByIds(movie.genreIds);
    return genres || [];
  }

  @Mutation(() => Movie)
  async addMovie(@Arg("data") movieData: AddMovieInput) : Promise<Movie> {
    const movie = await this.movieService.addMovie(movieData);
    return new Movie(movie);
  }
}
