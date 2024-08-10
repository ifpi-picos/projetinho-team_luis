import { Book } from "../../models/BookInterface";
import * as HttpHelper from "../../utils/HttpHelper";
import { BorrowedBook } from "../../models/BorrowedBookInterface";
import { loanDate, returnDate } from "../../utils/dateGenerator";
import { LoanInterface } from "../../models/LoanHistoricInterface";
import * as GetJson from "../../utils/GetJson";
import * as SetJson from "../../utils/SetJson";

export const loanBookService = async (nameUser: string, id: number) => {
    if (nameUser && id) {
        try {
            const avaliableBooks: Book[] =
                await GetJson.GetAvaliableBooksJson();

            const borrowedBooks: BorrowedBook[] =
                await GetJson.GetBorrowedBooksJson();

            const loanHistoric: LoanInterface[] =
                await GetJson.GetLoamHistoricJson();

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

            const loanHistoricData: LoanInterface = {
                idBook: id,
                nameUser,
                loanDate: loanDate(),
                returnDate: returnDate(),
            };

            avaliableBooks[indexAvaliableBook].borrowed = true;

            loanHistoric.push(loanHistoricData);
            borrowedBooks.push(borrowedBook);

            await SetJson.SetAvaliableBooksJson(avaliableBooks);

            await SetJson.SetBorrowedBooksJson(borrowedBooks);

            await SetJson.SetLoamHistoricJson(loanHistoric);

            return HttpHelper.ok("Livro Recebido!");
        } catch (error) {
            console.log(error);
            return HttpHelper.internalServerError();
        }
    } else {
        return HttpHelper.badRequest();
    }
};
