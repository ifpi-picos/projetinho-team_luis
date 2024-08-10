import fs from "fs-extra";
import path from "path";
import { LoanInterface } from "../models/LoanHistoricInterface";
import { BorrowedBook } from "../models/BorrowedBookInterface";
import { Book } from "../models/BookInterface";

export const SetAvaliableBooksJson = async (data: Book[]) => {
    return await fs.writeJson(
        path.join(__dirname, "../database/avaliableBooks.json"),
        data,
    );
};

export const SetBorrowedBooksJson = async (data: BorrowedBook[]) => {
    return await fs.writeJSON(
        path.join(__dirname, "../database/borrowedBooks.json"),
        data,
    );
};

export const SetLoamHistoricJson = async (data: LoanInterface[]) => {
    return await fs.writeJSON(
        path.join(__dirname, "../database/loanHistoric.json"),
        data,
    );
};
