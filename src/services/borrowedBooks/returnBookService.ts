import * as HttpHelper from "../../utils/HttpHelper";
import { Book } from "../../models/BookInterface";
import { BorrowedBook } from "../../models/BorrowedBookInterface";
import * as GetJson from "../../utils/GetJson";
import * as SetJson from "../../utils/SetJson";

export const returnBookService = async (
    id: number,
    nameUser: string,
    loanDate: string,
    returnDate: string,
) => {
    if (id && nameUser && loanDate && returnDate) {
        try {
            const avaliableBooks: Book[] =
                await GetJson.GetAvaliableBooksJson();

            const borrowedBooks: BorrowedBook[] =
                await GetJson.GetBorrowedBooksJson();

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

            avaliableBooks[id - 1].borrowed = false;
            borrowedBooks.splice(idReturnBook, 1);

            await SetJson.SetAvaliableBooksJson(avaliableBooks);
            await SetJson.SetBorrowedBooksJson(borrowedBooks);

            return HttpHelper.ok("Livro Devolvido!");
        } catch (error) {
            console.log(error);
            return HttpHelper.internalServerError();
        }
    } else {
        return HttpHelper.badRequest();
    }
};
