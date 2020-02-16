import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { GenreService } from "../services/genre.service";
import { Genre } from "../schemas/genre";
import { AddGenreInput } from "../schemas/genre.input";


@Resolver()
export class GenreResolver {

  constructor(private readonly genreService: GenreService) { }

  @Query(() => [Genre])
  async genres() {
    const genres = await this.genreService.getGenres();
    return genres.map(g => new Genre(g));
  }

  @Query(() => Genre)
  async genre(@Arg("id") id: string) {
    const genre = await this.genreService.getGenre(id);
    return new Genre(genre);
  }

  @Mutation(() => Genre)
  async addGenre(@Arg("data") genreData: AddGenreInput) : Promise<Genre> {
    const genre = await this.genreService.addGenre(genreData);
    return new Genre(genre);
  }
}
