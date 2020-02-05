import admin = require("firebase-admin");
import { Service } from "typedi";
import { Genre } from "../schemas/genre";
import { AddGenreInput } from "../schemas/genre.input";

@Service()
export class GenreService {

    db: admin.database.Database;

    constructor() {
        this.db = admin.database();
    }

    async getGenres(): Promise<Genre[]> {
        const data = await this.db.ref("genres").once("value");
        const result = Object.keys(data.val()).map(key => data.val()[key]);
        return result;
    }

    async getGenre(id: string) {
        const data = await this.db.ref(`genres/${id}`).once("value");
        return data.val();
    }

    async addGenre(genreInput: AddGenreInput): Promise<Genre> {
        const newEntry = await this.db.ref("genres").push();
        const id =  newEntry.key || "";
        if (!id) throw new Error("Error while pushing to array");
        const newGenre = { id, title: genreInput.title }
        await newEntry.set(newGenre);
        return Promise.resolve(newGenre);
    }
}
