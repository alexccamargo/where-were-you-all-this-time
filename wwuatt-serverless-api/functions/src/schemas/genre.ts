import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Genre {

    constructor(genre: Genre) {
        this.title= genre.title;
        this.id = genre.id;
    }

    @Field(() => ID)
    id: string;

    @Field(() => String)
    title: string;
}