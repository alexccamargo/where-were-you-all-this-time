import admin = require("firebase-admin");
import { Service } from "typedi";

@Service()
export class DbService {

    db: admin.database.Database;

    constructor() {
        this.db = admin.database();
    }

    async get(refName: string): Promise<any> {
        const data = await this.db.ref(refName).once("value");
        return Object.keys(data.val()).map(key => data.val()[key]);
    }

    async getById(refName: string, id: string) {
        const data = await this.db.ref(`${refName}/${id}`).once("value");
        return data.val();
    }

    async add(refName: string, data: any): Promise<any> {
        const newEntry = await this.db.ref(refName).push();
        const id =  newEntry.key || "";
        if (!id) throw new Error("Error while pushing to array");
        const newData = { id, ...data }
        await newEntry.set(newData);
        return Promise.resolve(newData);
    }
}
