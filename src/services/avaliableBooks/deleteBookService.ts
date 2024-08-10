import * as HttpHelper from "../../utils/HttpHelper";
import { Book } from "../../models/BookInterface";
import * as GetJson from "../../utils/GetJson";
import * as SetJson from "../../utils/SetJson";

export const deleteBookService = async (id: number) => {
    if (id) {
        try {
            const books: Book[] = await GetJson.GetAvaliableBooksJson();

            const idBookToRemove = books.findIndex(
                (book: Book) => book.id === id,
            );

            books.splice(idBookToRemove, 1);

            await SetJson.SetAvaliableBooksJson(books);

            return HttpHelper.ok("Item Deletado!");
        } catch (error) {
            console.log(error);
            return HttpHelper.internalServerError();
        }
    } else {
        return HttpHelper.badRequest();
    }
};
