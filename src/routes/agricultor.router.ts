import { Router } from "express";
import { 
  cadastrarAgricultor, 
  consultarAgricultorPorEmail,
  atualizarAgricultor,
  uploadImagemAgricultor
} from "../controllers/agricultor.controller.ts";
import { 
  verificarCamposAgricultor,
  verificarIdAgricultor,
  verificarCamposAtualizacaoAgricultor
 } from "../middlewares/verificarCamposAgricultor.ts";
import { autenticacao } from "../middlewares/autenticacao.ts";
import { upload } from "../middlewares/multerConfig.ts";
export const agricultorRouter = Router();


agricultorRouter.post("/", verificarCamposAgricultor, cadastrarAgricultor);
agricultorRouter.get("/:id", autenticacao, verificarIdAgricultor, consultarAgricultorPorEmail);
agricultorRouter.put("/:id", autenticacao, verificarCamposAtualizacaoAgricultor,atualizarAgricultor);
agricultorRouter.patch("/:id/imagem", autenticacao, upload.single("imagem"), uploadImagemAgricultor);
