import { Movie } from "../schemas/movie";
import admin = require("firebase-admin");
import { Service } from "typedi";

@Service()
export class MovieService {

    movieDb: admin.database.Reference;

    constructor() {
        this.movieDb = admin.database().ref("movies");
    }

    async getMovies(): Promise<Movie[]> {
        const data = await this.movieDb.once("value");
        return data.val();
    }
}
