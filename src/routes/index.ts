import { Router } from "express";
import { autenticacaoRouter } from "./autenticacao.router.ts";
import { agricultorRouter } from "./agricultor.router.js";
import { estabelecimentoRouter } from "./estabelecimento.router.js";
import { produtoRouter } from "./produto.router.js";
import { avaliacaoRouter } from "./avaliacao.router.ts";
import { encomendaRouter } from "./encomenda.router.js";
import { interesseRouter } from "./interesse.router.ts";

export const router = Router();

router.use("/auth", autenticacaoRouter);
router.use("/agricultores", agricultorRouter);
router.use("/estabelecimento", estabelecimentoRouter);
router.use("/produto", produtoRouter);
router.use("/interesse", interesseRouter);
router.use("/", avaliacaoRouter);
router.use("/encomenda", encomendaRouter);

