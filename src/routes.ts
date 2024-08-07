import { Router } from "express";
import { getDataController } from "./controller/getDataController";

export const router = Router();

router.get("/", getDataController)
