import { Router } from "express";
import { getDataController } from "./controller/getDataController";
import { postDataController } from "./controller/postDataController";
import { updateBookController } from "./controller/updateBookController";
import { deleteBookController } from "./controller/deleteBookController";

export const router = Router();

router.get("/", getDataController);
router.post("/", postDataController);
router.patch("/:id", updateBookController);
router.delete("/:id", deleteBookController);
