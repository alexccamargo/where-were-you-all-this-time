import { Movie } from "../schemas/movie";

export interface IMovieService {
    getMovies(): Promise<Movie[]>;
}
