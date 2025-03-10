import { Router } from "express";
import { 
  cadastrarAgricultor, 
  consultarAgricultorPorEmail,
  atualizarAgricultor,
  uploadImagemAgricultor
} from "../controllers/agricultor.controller.ts";
import { autenticacao } from "../middlewares/autenticacao.ts";
import { upload } from "../middlewares/multerConfig.ts";
export const agricultorRouter = Router();


agricultorRouter.post("/", cadastrarAgricultor);
agricultorRouter.get("/:id", autenticacao ,consultarAgricultorPorEmail);
agricultorRouter.put("/:id", atualizarAgricultor);
agricultorRouter.patch("/:id/imagem", upload.single("imagem"), uploadImagemAgricultor);
