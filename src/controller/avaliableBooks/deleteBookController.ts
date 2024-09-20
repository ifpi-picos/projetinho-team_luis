import { Request, Response } from "express";
import { deleteBookService } from "../../services/avaliableBooks/deleteBookService";

export const deleteBookController = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id);

    const httpResponse = await deleteBookService(id);

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body);
    }
};
