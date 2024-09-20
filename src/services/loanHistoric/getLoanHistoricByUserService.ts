import * as HttpHelper from "../../utils/HttpHelper";
import { LoanInterface } from "../../models/LoanHistoricInterface";
import * as GetJson from "../../utils/GetJson";

export const getLoanDataByUserService = async (nameUser: string) => {
    try {
        const data: LoanInterface[] = await GetJson.GetLoamHistoricJson()

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
