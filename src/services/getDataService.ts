import * as Httphelper from "../utils/HttpHelper";
import fs from "fs-extra";
import path from "path";

export const getDataService = async () => {
    try {
        const data = await fs.readJSON(path.join(__dirname, "../data.json"));

        return Httphelper.ok(data);
    } catch (error) {
        console.log("erro ao ler o arquivo", error);
    }
};
