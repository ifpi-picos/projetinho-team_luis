import { Request, Response } from "express";
import { getBorrowedBooksService } from "../../services/borrowedBooks/getBorrowedBooksService";

export const getBorrowedBooksController = async (req: Request, res: Response) => {
    const httpResponse = await getBorrowedBooksService()

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body)
    }
}