import { Router } from "express";
import { 
  cadastrarAgricultor, 
  consultarAgricultorPorEmail,
  atualizarAgricultor
} from "../controllers/agricultor.controller.ts";
import { autenticacao } from "../middlewares/autenticacao.ts";
export const agricultorRouter = Router();


agricultorRouter.post("/", cadastrarAgricultor);
agricultorRouter.get("/:email", autenticacao ,consultarAgricultorPorEmail);
agricultorRouter.put("/:id", atualizarAgricultor);
