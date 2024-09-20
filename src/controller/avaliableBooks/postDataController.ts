import { Request, Response } from "express";
import { Book } from "../../models/BookInterface";
import { postDataService } from "../../services/avaliableBooks/postDataService";

export const postDataController = async (req: Request, res: Response) => {
    const book: Book = req.body;

    const httpResponse = await postDataService(
        book.title,
        book.auth,
        book.yearPublication,
        book.gender,
    );

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body);
    }
};
