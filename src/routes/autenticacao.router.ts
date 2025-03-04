import { Router } from "express";
import { signin } from "../controllers/autenticacao.controller.ts";

export const autenticacaoRouter = Router();

autenticacaoRouter.post("/signin", signin);
