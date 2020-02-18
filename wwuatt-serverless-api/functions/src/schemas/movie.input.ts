import { Field, InputType } from "type-graphql";
import { Movie } from "./movie";

@InputType({ description: "Add movie" })
export class AddMovieInput implements Partial<Movie> {

  constructor(title: string, genreIds: string[]) {
    this.title = title;
    this.genreIds = genreIds;
  }

  @Field()
  title: string;

  @Field(type => [String])
  genreIds: string[];
}
