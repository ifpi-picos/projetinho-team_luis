import { Book } from "../../models/BookInterface";
import * as HttpHelper from "../../utils/HttpHelper";
import fs from "fs-extra";
import path from "path";

export const updateBookService = async (
    id: number,
    title: string,
    auth: string,
    yearPublication: number,
    gender: string,
) => {
    if (title && auth && yearPublication && gender) {
        try {
            const books: Book[] = await fs.readJSON(
                path.join(__dirname, "../../database/avaliableBooks.json"),
            );

            if (books.length < 1) {
                return HttpHelper.noContent();
            }

            const indexBook = books.findIndex((book: Book) => book.id === id);

            const bookUpdated = {
                id,
                title,
                auth,
                yearPublication,
                gender,
            };

            books[indexBook] = bookUpdated;

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
