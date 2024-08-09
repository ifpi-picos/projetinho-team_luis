import { Request, Response } from "express";
import { getDataService } from "../../services/avaliableBooks/getDataService";

export const getDataController = async (req: Request, res: Response) => {
    const httpResponse = await getDataService();

    if (httpResponse) {
        return res.status(httpResponse.status).json(httpResponse.body);
    }
};
