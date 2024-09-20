import { Request, Response } from "express";
import { Book } from "../../models/BookInterface";
import { updateBookService } from "../../services/avaliableBooks/updateBookService";

export const updateBookController = async (req: Request, res: Response) => {
    const bookUpdated: Book = req.body;

    const id: number = Number(req.params.id);

    const httpResponse = await updateBookService(
        id,
        bookUpdated.title,
        bookUpdated.auth,
        bookUpdated.yearPublication,
        bookUpdated.gender,
    );

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body);
    }
};
