import { Movie } from "../schemas/movie";
import admin = require("firebase-admin");

export class MovieService {

    static get movieDb() {
        return admin.database().ref("movies");
    }

    static async getMovies(): Promise<Movie[]> {
        const data = await MovieService.movieDb.once("value");
        return data.val();
    }
}
