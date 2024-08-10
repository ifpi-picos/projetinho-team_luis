import fs from "fs-extra";
import path from "path";
import { Book } from "../../models/BookInterface";
import * as HttpHelper from "../../utils/HttpHelper";
import { BorrowedBook } from "../../models/BorrowedBookInterface";
import { loanDate, returnDate } from "../../utils/dateGenerator";
import { LoanInterface } from "../../models/LoanInterface";

export const loanBookService = async (nameUser: string, id: number) => {
    if (nameUser && id) {
        try {
            const avaliableBooks: Book[] = await fs.readJSON(
                path.join(__dirname, "../../database/avaliableBooks.json"),
            );
            const borrowedBooks: BorrowedBook[] = await fs.readJSON(
                path.join(__dirname, "../../database/borrowedBooks.json"),
            );
            const loanData: LoanInterface[] = await fs.readJSON(
                path.join(__dirname, "../../database/loanData.json"),
            );

            const indexAvaliableBook = avaliableBooks.findIndex(
                (book: Book) => book.id === id,
            );
            const avaliableBook = avaliableBooks.find(
                (book: Book) => book.id === id,
            );

            if (
                indexAvaliableBook === -1 ||
                !avaliableBook ||
                avaliableBook.borrowed === true
            ) {
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

            const loanHistoric: LoanInterface = {
                idBook: id,
                nameUser,
                loanDate: loanDate(),
                returnDate: returnDate(),
            };

            avaliableBooks[indexAvaliableBook].borrowed = true;

            loanData.push(loanHistoric)
            borrowedBooks.push(borrowedBook);

            await fs.writeJSON(
                path.join(__dirname, "../../database/avaliableBooks.json"),
                avaliableBooks,
            );

            await fs.writeJSON(
                path.join(__dirname, "../../database/borrowedBooks.json"),
                borrowedBooks,
            );

            await fs.writeJSON(
                path.join(__dirname, "../../database/loanData.json"),
                loanData,
            );

            return HttpHelper.ok("Livro Recebido!");
        } catch (error) {
            console.log(error);
            return HttpHelper.internalServerError();
        }
    } else {
        return HttpHelper.badRequest();
    }
};
