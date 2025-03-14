import { Router } from "express";
import { criarInteresse, listarInteressePorProduto, excluirInteresse, listarInteressePorEstabelecimento } from "../controllers/interesse.controller.ts";
import { autenticacao } from "../middlewares/autenticacao.ts";
import { verificarCamposCriarInteresse, verificarCamposListarInteressePorEstabelecimento, verificarCamposListarInteressePorProdutos, verificarCamposExcluirInteresse } from "../middlewares/verificarCamposInteresse.ts";

export const interesseRouter = Router();

interesseRouter.post("/:idEstabelecimento", autenticacao, verificarCamposCriarInteresse, criarInteresse);
interesseRouter.get("/produto/:idProduto", autenticacao, verificarCamposListarInteressePorProdutos, listarInteressePorProduto);
interesseRouter.get("/estabelecimento/:idEstabelecimento", autenticacao,verificarCamposListarInteressePorEstabelecimento, listarInteressePorEstabelecimento);
interesseRouter.delete("/:idInteresse", autenticacao, verificarCamposExcluirInteresse, excluirInteresse);