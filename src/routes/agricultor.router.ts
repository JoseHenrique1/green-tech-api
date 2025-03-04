import { Router } from "express";
import { cadastrarAgricultor } from "../controllers/agricultor.controller.js";

export const agricultorRouter = Router();


agricultorRouter.post("/", cadastrarAgricultor);
