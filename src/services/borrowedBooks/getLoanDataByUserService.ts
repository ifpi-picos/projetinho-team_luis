import fs from "fs-extra";
import path from "path";
import * as HttpHelper from "../../utils/HttpHelper";
import { LoanInterface } from "../../models/LoanInterface";

export const getLoanDataByUserService = async (nameUser: string) => {
    try {
        const data: LoanInterface[] = await fs.readJSON(
            path.join(__dirname, "../../database/loanData.json"),
        );

        const historicLoanBook = data.filter(
            (data: LoanInterface) => data.nameUser === nameUser,
        );

        if (data.length < 1) {
            return HttpHelper.noContent();
        }

        return HttpHelper.ok(historicLoanBook);
    } catch (error) {
        console.log(error);
        return HttpHelper.internalServerError();
    }
};
