import { Router } from "express";
import { agricultorRouter } from "./agricultor.router.js";
import { estabelecimentoRouter } from "./estabelecimento.router.js";
import { produtoRouter } from "./produto.router.js";

export const router = Router();

router.use("/agricultores", agricultorRouter);
router.use("/estabelecimento", estabelecimentoRouter);
router.use("/produto", produtoRouter);