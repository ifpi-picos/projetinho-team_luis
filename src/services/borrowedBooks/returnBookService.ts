import fs from "fs-extra";
import * as HttpHelper from "../../utils/HttpHelper";
import path from "path";
import { Book } from "../../models/BookInterface";
import { BorrowedBook } from "../../models/BorrowedBookInterface";
import { IdGenerator } from "../../utils/IdGenerator";

export const returnBookService = async (
    id: number,
    nameUser: string,
    loanDate: string,
    returnDate: string,
) => {
    if (id && nameUser && loanDate && returnDate) {
        try {
            const avaliableBooks: Book[] = await fs.readJSON(
                path.join(__dirname, "../../database/avaliableBooks.json"),
            );
            const borrowedBooks: BorrowedBook[] = await fs.readJSON(
                path.join(__dirname, "../../database/borrowedBooks.json"),
            );

            const returnBook: BorrowedBook | undefined = borrowedBooks.find(
                (book: BorrowedBook) =>
                    book.id === id &&
                    book.nameUser === nameUser &&
                    book.loanDate === loanDate &&
                    book.returnDate === returnDate,
            );

            const idReturnBook = borrowedBooks.findIndex(
                (book: BorrowedBook) => book.id === id,
            );

            if (!returnBook || idReturnBook === -1) {
                return HttpHelper.notFound();
            }

            const reavaliableBook: Book = {
                id: await IdGenerator(),
                title: returnBook.title,
                auth: returnBook.auth,
                yearPublication: returnBook.yearPublication,
                gender: returnBook.gender,
            };

            avaliableBooks.push(reavaliableBook);
            borrowedBooks.splice(idReturnBook, 1);

            await fs.writeJSON(
                path.join(__dirname, "../../database/avaliableBooks.json"),
                avaliableBooks,
            );

            await fs.writeJSON(
                path.join(__dirname, "../../database/borrowedBooks.json"),
                borrowedBooks,
            );

            return HttpHelper.ok("Livro Devolvido!");
        } catch (error) {
            console.log(error);
            return HttpHelper.internalServerError();
        }
    } else {
        return HttpHelper.badRequest();
    }
};
