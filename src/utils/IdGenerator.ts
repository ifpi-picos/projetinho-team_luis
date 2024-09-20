import fs from "fs-extra";
import { Book } from "../models/BookInterface";
import path from "path";

export const IdGenerator = async () => {
    const books: Book[] = await fs.readJSON(
        path.join(__dirname, "../database/avaliableBooks.json"),
    );

    if (books.length < 1) {
        return 1;
    }

    const lastId: number = books[books.length - 1].id;

    return lastId + 1;
};
