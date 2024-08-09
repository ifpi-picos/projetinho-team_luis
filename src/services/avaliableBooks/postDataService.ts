import path from "path";
import { Book } from "../../models/BookInterface";
import * as HttpHelper from "../../utils/HttpHelper";
import fs from "fs-extra";
import { IdGenerator } from "../../utils/IdGenerator";

export const postDataService = async (
    title: string,
    auth: string,
    yearPublication: number,
    gender: string,
) => {
    if (title && auth && yearPublication && gender) {
        const book: Book = {
            id: await IdGenerator(),
            title,
            auth,
            yearPublication,
            gender,
        };

        try {
            const books: Book[] = await fs.readJSON(
                path.join(__dirname, "../../database/avaliableBooks.json"),
            );

            books.push(book);

            await fs.writeJSON(
                path.join(__dirname, "../../database/avaliableBooks.json"),
                books,
            );
            return HttpHelper.created();
        } catch (error) {
            console.log(error);
            return HttpHelper.internalServerError();
        }
    } else {
        return HttpHelper.badRequest();
    }
};
