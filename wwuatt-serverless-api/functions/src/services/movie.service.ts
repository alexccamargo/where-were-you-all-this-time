import { Movie } from "../schemas/movie";
import admin = require("firebase-admin");
import { IMovieService } from "./services.interfaces";

export class MovieService implements IMovieService {

    movieDb: admin.database.Reference;

    constructor() {
        this.movieDb = admin.database().ref("movies");
    }

    async getMovies(): Promise<Movie[]> {
        const data = await this.movieDb.once("value");
        return data.val();
    }
}
