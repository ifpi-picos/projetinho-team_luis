import { BorrowedBook } from "../../models/BorrowedBookInterface";
import * as HttpHelper from "../../utils/HttpHelper";
import * as GetJson from "../../utils/GetJson";

export const getBorrowedBooksService = async () => {
    try {
        const borrowedBooks: BorrowedBook[] = await GetJson.GetBorrowedBooksJson()

        if (borrowedBooks.length < 1) {
            return HttpHelper.noContent()
        }

        return HttpHelper.ok(borrowedBooks)
    } catch (error) {
        console.log(error);
        return HttpHelper.internalServerError();
    }
};
