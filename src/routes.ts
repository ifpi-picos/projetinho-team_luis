import { Router } from "express";
import { getDataController } from "./controller/avaliableBooks/getDataController";
import { postDataController } from "./controller/avaliableBooks/postDataController";
import { updateBookController } from "./controller/avaliableBooks/updateBookController";
import { deleteBookController } from "./controller/avaliableBooks/deleteBookController";
import { loanBookController } from "./controller/borrowedBooks/loanBookController";

export const router = Router();

router.get("/", getDataController);
router.post("/", postDataController);
router.patch("/:id", updateBookController);
router.delete("/:id", deleteBookController);

router.post("/receber-livro/:id", loanBookController);
