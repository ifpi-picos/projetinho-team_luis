import * as HttpHelper from "../../utils/HttpHelper";
import fs from "fs-extra";
import path from "path";

export const getDataService = async () => {
    try {
        const data = await fs.readJSON(
            path.join(__dirname, "../../database/avaliableBooks.json"),
        );

        return HttpHelper.ok(data);
    } catch (error) {
        console.log("erro ao ler o arquivo", error);
        return HttpHelper.noContent();
    }
};
