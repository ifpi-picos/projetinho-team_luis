import * as HttpHelper from "../../utils/HttpHelper";
import * as GetJson from "../../utils/GetJson";

export const getDataService = async () => {
    try {
        const data = await GetJson.GetAvaliableBooksJson()

        return HttpHelper.ok(data);
    } catch (error) {
        console.log("erro ao ler o arquivo", error);
        return HttpHelper.noContent();
    }
};
