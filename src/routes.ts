import { Router } from "express";
import { getDataController } from "./controller/avaliableBooks/getDataController";
import { postDataController } from "./controller/avaliableBooks/postDataController";
import { updateBookController } from "./controller/avaliableBooks/updateBookController";
import { deleteBookController } from "./controller/avaliableBooks/deleteBookController";

export const router = Router();

router.get("/", getDataController);
router.post("/", postDataController);
router.patch("/:id", updateBookController);
router.delete("/:id", deleteBookController);
