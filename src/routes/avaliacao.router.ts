import { Router } from "express";
import { criarAvaliacao, listarAvaliacoesPorAgricultor, listarAvaliacoesPorEstabelecimento, excluirAvaliacao } from "../controllers/avaliacao.controller.ts";
import { autenticacao } from "../middlewares/autenticacao.ts";
import {
  verificarCamposCriarAvaliacao,
  verificarCamposExcluirAvaliacao,
  verificarCamposListarAvaliacoesPorAgricultor,
  verificarCamposListarAvaliacoesPorEstabelecimento
} from "../middlewares/verificarCamposAvaliacao.ts";

export const avaliacaoRouter = Router();

avaliacaoRouter.post("/estabelecimento/:idEstabelecimento/avaliacoes", autenticacao, verificarCamposCriarAvaliacao, criarAvaliacao);
avaliacaoRouter.get("/agricultores/:idAgricultor/avaliacoes", autenticacao, verificarCamposListarAvaliacoesPorAgricultor, listarAvaliacoesPorAgricultor);
avaliacaoRouter.get("/estabelecimento/:idEstabelecimento/avaliacoes", autenticacao, verificarCamposListarAvaliacoesPorEstabelecimento, listarAvaliacoesPorEstabelecimento);
avaliacaoRouter.delete("/estabelecimento/:idEstabelecimento/avaliacoes/:idAvaliacao", autenticacao,verificarCamposExcluirAvaliacao, excluirAvaliacao);