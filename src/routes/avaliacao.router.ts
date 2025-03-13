import { Router } from "express";
import { criarAvaliacao, listarAvaliacoesPorAgricultor, listarAvaliacoesPorEstabelecimento, excluirAvaliacao } from "../controllers/avaliacao.controller.ts";
import { autenticacao } from "../middlewares/autenticacao.ts";

export const avaliacaoRouter = Router();

avaliacaoRouter.post("/", autenticacao, criarAvaliacao);
avaliacaoRouter.get("/agricultor/:idAgricultor", listarAvaliacoesPorAgricultor);
avaliacaoRouter.get("/estabelecimento/:idEstabelecimento", listarAvaliacoesPorEstabelecimento);
avaliacaoRouter.delete("/:idAgricultor/:idEstabelecimento", autenticacao, excluirAvaliacao);