import fs from "fs-extra";
import path from "path";
import { BorrowedBook } from "../../models/BorrowedBookInterface";
import * as HttpHelper from "../../utils/HttpHelper";

export const getBorrowedBooksService = async () => {
    try {
        const borrowedBooks: BorrowedBook[] = await fs.readJSON(
            path.join(__dirname, "../../database/borrowedBooks.json"),
        );

        if (borrowedBooks.length < 1) {
            return HttpHelper.noContent()
        }

        return HttpHelper.ok(borrowedBooks)
    } catch (error) {
        console.log(error);
        return HttpHelper.internalServerError();
    }
};
