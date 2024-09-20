import { Request, Response } from "express";
import { returnBookService } from "../../services/borrowedBooks/returnBookService";

export const returnBookController = async (req: Request, res: Response) => {
    const body = req.body

    const id: number = Number(req.params.id)

    const httpResponse = await returnBookService(id, body.nameUser, body.loanDate, body.returnDate)

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body)
    }
}