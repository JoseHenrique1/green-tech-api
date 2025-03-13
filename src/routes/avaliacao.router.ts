import { Router } from "express";
import { criarAvaliacao, listarAvaliacoesPorAgricultor, listarAvaliacoesPorEstabelecimento, excluirAvaliacao } from "../controllers/avaliacao.controller.ts";
import { autenticacao } from "../middlewares/autenticacao.ts";

export const avaliacaoRouter = Router();

avaliacaoRouter.post("/estabelecimento/:idEstabelecimento/avaliacoes", autenticacao, criarAvaliacao);
avaliacaoRouter.get("/agricultores/:idAgricultor/avaliacoes", listarAvaliacoesPorAgricultor);
avaliacaoRouter.get("/estabelecimento/:idEstabelecimento/avaliacoes", listarAvaliacoesPorEstabelecimento);
avaliacaoRouter.delete("/estabelecimento/:idEstabelecimento/avaliacoes/:idAvaliacao", autenticacao, excluirAvaliacao);