import { Book } from "../../models/BookInterface";
import * as HttpHelper from "../../utils/HttpHelper";
import * as GetJson from "../../utils/GetJson";
import * as SetJson from "../../utils/SetJson";

export const updateBookService = async (
    id: number,
    title: string,
    auth: string,
    yearPublication: number,
    gender: string,
) => {
    if (title && auth && yearPublication && gender) {
        try {
            const books: Book[] = await GetJson.GetAvaliableBooksJson();

            if (books.length < 1) {
                return HttpHelper.noContent();
            }

            const indexBook = books.findIndex((book: Book) => book.id === id);

            const bookUpdated = {
                id,
                title,
                auth,
                yearPublication,
                gender,
                borrowed: books[indexBook].borrowed,
            };

            books[indexBook] = bookUpdated;

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
