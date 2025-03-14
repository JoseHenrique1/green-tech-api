import { Router } from "express";
import { criarColheita, atualizarColheita, listarColheitas, deletarColheita } from "../controllers/colheita.controller.ts";
import { autenticacao } from "../middlewares/autenticacao.ts";

export const colheitaRouter = Router();

colheitaRouter.post("/", autenticacao, criarColheita);
colheitaRouter.put("/:id", autenticacao, atualizarColheita);
colheitaRouter.get("/", autenticacao, listarColheitas);
colheitaRouter.delete("/:id", autenticacao, deletarColheita);
