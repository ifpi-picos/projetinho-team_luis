import { Request, Response } from "express";
import { getloanDataService } from "../../services/loanHistoric/getLoanHistoricByBooksServices";

export const getloanHistoricByBookController = async (
    req: Request,
    res: Response,
) => {
    const id: number = Number(req.params.id);

    const httpResponse = await getloanDataService(id);

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body);
    }
};
