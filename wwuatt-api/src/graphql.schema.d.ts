
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class Movie {
    id: number;
    name: string;
    description: string;
}

export abstract class IMutation {
    abstract createMovie(name: string, description: string): Movie | Promise<Movie>;
}

export abstract class IQuery {
    abstract movies(): Movie[] | Promise<Movie[]>;
}
