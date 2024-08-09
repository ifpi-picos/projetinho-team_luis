import { Request, Response } from "express";
import { loanBookService } from "../../services/borrowedBooks/loanBookService";

export const loanBookController = async (req: Request, res: Response) => {
    const nameUser: string = req.body;

    const id: number = Number(req.params.id)

    const httpResponse = await loanBookService(nameUser, id)

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body)
    }
};
