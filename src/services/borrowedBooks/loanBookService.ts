import fs from "fs-extra";
import path from "path";
import { Book } from "../../models/BookInterface";
import * as HttpHelper from "../../utils/HttpHelper";
import { BorrowedBook } from "../../models/BorrowedBookInterface";
import { loanDate, returnDate } from "../../utils/dateGenerator";

export const loanBookService = async (nameUser: string, id: number) => {
    if (nameUser && id) {
        try {
            const avaliableBooks: Book[] = await fs.readJSON(
                path.join(__dirname, "../../database/avaliableBooks.json"),
            );
            const borrowedBooks: BorrowedBook[] = await fs.readJSON(
                path.join(__dirname, "../../database/borrowedBooks.json"),
            );

            const indexAvaliableBook = avaliableBooks.findIndex(
                (book: Book) => book.id === id,
            );
            const avaliableBook = avaliableBooks.find(
                (book: Book) => book.id === id,
            );

            if (indexAvaliableBook === -1 || !avaliableBook) {
                return HttpHelper.noContent();
            }

            const borrowedBook: BorrowedBook = {
                id,
                nameUser,
                loanDate: loanDate(),
                returnDate: returnDate(),
                title: avaliableBook.title,
                auth: avaliableBook.auth,
                yearPublication: avaliableBook.yearPublication,
                gender: avaliableBook.gender,
            };

            avaliableBooks.splice(indexAvaliableBook, 1);
            borrowedBooks.push(borrowedBook);

            await fs.writeJSON(
                path.join(__dirname, "../../database/avaliableBooks.json"),
                avaliableBooks,
            );

            await fs.writeJSON(
                path.join(__dirname, "../../database/borrowedBooks.json"),
                borrowedBooks,
            );

            return HttpHelper.ok('Livro Recebido!')
        } catch (error) {
            console.log(error);
            return HttpHelper.internalServerError();
        }
    } else {
        return HttpHelper.badRequest();
    }
};
