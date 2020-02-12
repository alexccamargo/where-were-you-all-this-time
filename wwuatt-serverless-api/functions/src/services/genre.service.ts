import { Service } from "typedi";
import { Genre } from "../schemas/genre";
import { AddGenreInput } from "../schemas/genre.input";
import { DbService } from "./dbService";

@Service()
export class GenreService {

    constructor(private readonly dbService: DbService) { }

    async getGenres(): Promise<Genre[]> {
        return await this.dbService.get("genres");
    }

    async getGenresByIds(ids?: string[]): Promise<Genre[]> {
        if (!ids) return [];
        const genres = await this.getGenres();
        return genres.filter(x => ids.includes(x.id));
    }

    async getGenre(id: string) {
        return await this.dbService.getById("genres", id);
    }

    async addGenre(genreInput: AddGenreInput): Promise<Genre> {
        return this.dbService.add("genres", genreInput);
    }
}
