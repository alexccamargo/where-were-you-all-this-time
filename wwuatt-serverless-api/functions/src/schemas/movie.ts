import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Movie {

    constructor(title: string) {
        this.title= title;
    }

    @Field(() => String)
    title: string;
    
    rate?: number;
}