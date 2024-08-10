import { Router } from "express";
import { getDataController } from "./controller/avaliableBooks/getDataController";
import { postDataController } from "./controller/avaliableBooks/postDataController";
import { updateBookController } from "./controller/avaliableBooks/updateBookController";
import { deleteBookController } from "./controller/avaliableBooks/deleteBookController";
import { loanBookController } from "./controller/borrowedBooks/loanBookController";
import { returnBookController } from "./controller/borrowedBooks/returnBookController";
import { getBorrowedBooksController } from "./controller/borrowedBooks/getBorrowedBooksController";
import { getloanDataController } from "./controller/borrowedBooks/getLoanDataByBooksController";
import { getLoanDataByUserController } from "./controller/borrowedBooks/getLoanDataByUserController";

export const router = Router();

router.get("/", getDataController);
router.post("/", postDataController);
router.patch("/:id", updateBookController);
router.delete("/:id", deleteBookController);

router.post("/receber-livro/:id", loanBookController);
router.post("/devolver-livro/:id", returnBookController);
router.get("/livros-emprestados", getBorrowedBooksController);
router.get("/dados-livro/:id", getloanDataController);
router.get("/dados-user/:nameUser", getLoanDataByUserController);
