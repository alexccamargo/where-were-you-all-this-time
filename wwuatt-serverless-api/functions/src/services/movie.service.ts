import { Service } from "typedi";
import { Movie } from "../schemas/movie";
import { AddMovieInput } from "../schemas/movie.input";
import { DbService } from "./dbService";

@Service()
export class MovieService {

    constructor(private readonly dbService: DbService) { }

    async getMovies(): Promise<Movie[]> {
        return await this.dbService.get("movies");
    }

    async addMovie(movieInput: AddMovieInput) : Promise<Movie>{
        const newMovie =  await this.dbService.add("movies", movieInput);
        return Promise.resolve(new Movie(newMovie));
    }
}
