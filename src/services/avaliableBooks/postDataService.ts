import { Book } from "../../models/BookInterface";
import * as HttpHelper from "../../utils/HttpHelper";
import { IdGenerator } from "../../utils/IdGenerator";
import * as GetJson from "../../utils/GetJson";
import * as SetJson from "../../utils/SetJson";

export const postDataService = async (
    title: string,
    auth: string,
    yearPublication: number,
    gender: string,
) => {
    if (title && auth && yearPublication && gender) {
        try {
            const books: Book[] = await GetJson.GetAvaliableBooksJson();

            const book: Book = {
                id: await IdGenerator(),
                title,
                auth,
                yearPublication,
                gender,
                borrowed: false,
            };

            books.push(book);

            await SetJson.SetAvaliableBooksJson(books);

            return HttpHelper.created();
        } catch (error) {
            console.log(error);
            return HttpHelper.internalServerError();
        }
    } else {
        return HttpHelper.badRequest();
    }
};
