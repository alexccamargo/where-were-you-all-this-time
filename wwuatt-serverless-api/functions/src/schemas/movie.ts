import { ObjectType, Field } from "type-graphql";
import { Genre } from "./genre";

@ObjectType()
export class Movie {

    constructor(movie: Movie) {
        this.title = movie.title;
        this.genres = movie.genres || [];
    }

    @Field(() => String)
    title: string;

    @Field(() => [Genre])
    genres: Genre[] = [];
}