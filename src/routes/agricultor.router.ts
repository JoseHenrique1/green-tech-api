import { Router } from "express";
import { 
  cadastrarAgricultor, 
  consultarAgricultorPorEmail,
  atualizarAgricultor
} from "../controllers/agricultor.controller.ts";

export const agricultorRouter = Router();


agricultorRouter.post("/", cadastrarAgricultor);
agricultorRouter.get("/:email", consultarAgricultorPorEmail);
agricultorRouter.put("/:id", atualizarAgricultor);
