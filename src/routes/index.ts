import { Router } from "express";
import { autenticacaoRouter } from "./autenticacao.router.ts";
import { agricultorRouter } from "./agricultor.router.ts";
import { estabelecimentoRouter } from "./estabelecimento.router.ts";
import { produtoRouter } from "./produto.router.ts";
import { avaliacaoRouter } from "./avaliacao.router.ts";
import { encomendaRouter } from "./encomenda.router.ts";
import { interesseRouter } from "./interesse.router.ts";
import { colheitaRouter } from "./colheita.router.ts";

export const router = Router();

router.use("/auth", autenticacaoRouter);
router.use("/agricultores", agricultorRouter);
router.use("/estabelecimento", estabelecimentoRouter);
router.use("/produto", produtoRouter);
router.use("/interesse", interesseRouter);
router.use("/", avaliacaoRouter);
router.use("/encomenda", encomendaRouter);
router.use("/colheita", colheitaRouter);

