import { Router } from "express";
import { agricultorPost } from "../controllers/agricultor.controller.js";

export const agricultorRouter = Router();


agricultorRouter.post("/a", agricultorPost);
