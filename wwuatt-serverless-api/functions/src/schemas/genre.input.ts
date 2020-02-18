import { Field, InputType } from "type-graphql";
import { Genre } from "./genre";

@InputType({ description: "Add genre" })
export class AddGenreInput implements Partial<Genre> {

  constructor(title: string) {
    this.title = title;
  }

  @Field()
  title: string;

}
