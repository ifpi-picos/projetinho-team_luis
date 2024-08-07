import { Router } from "express";
import { getDataController } from "./controller/getDataController";
import { postDataController } from "./controller/postDataController";

export const router = Router();

router.get("/", getDataController);
router.post("/", postDataController);
