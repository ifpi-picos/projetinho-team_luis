import fs from "fs-extra";
import * as HttpHelper from "../../utils/HttpHelper";
import { Book } from "../../models/BookInterface";
import path from "path";

export const deleteBookService = async (id: number) => {
    if (id) {
        try {
            const books: Book[] = await fs.readJSON(
                path.join(__dirname, "../../database/avaliableBooks.json"),
            );

            const idBookToRemove = books.findIndex(
                (book: Book) => book.id === id,
            );

            books.splice(idBookToRemove, 1);

            await fs.writeJSON(
                path.join(__dirname, "../../database/avaliableBooks.json"),
                books,
            );

            return HttpHelper.ok("Item Deletado!");
        } catch (error) {
            console.log(error);
            return HttpHelper.internalServerError();
        }
    } else {
        return HttpHelper.badRequest();
    }
};
