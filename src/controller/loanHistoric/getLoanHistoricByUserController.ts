import { Request, Response } from "express";
import { getLoanDataByUserService } from "../../services/loanHistoric/getLoanHistoricByUserService";

export const getLoanHistoricByUserController = async (
    req: Request,
    res: Response,
) => {
    const nameUser: string = req.params.nameUser;

    const httpResponse = await getLoanDataByUserService(nameUser);

    if (httpResponse) {
        res.status(httpResponse.status).json(httpResponse.body);
    }
};
