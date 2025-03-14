import { Router } from 'express';
import { cadastrarProduto, atualizarProduto, listarProdutoPorId,
     listarProdutos, deletarProduto, uploadImagemProduto } from '../controllers/produto.controller.ts';
import { verificarCamposProduto, verificarParametroId } from '../middlewares/verificarCampos.ts';
import { autenticacao } from "../middlewares/autenticacao.ts";
import { upload } from '../middlewares/multerConfig.ts';
export const produtoRouter = Router();

// falta middleware da autenticação

produtoRouter.post('/', autenticacao, verificarCamposProduto, cadastrarProduto);
produtoRouter.get('/:id', autenticacao, verificarParametroId, listarProdutoPorId);
produtoRouter.get('/', autenticacao, listarProdutos);
produtoRouter.put('/:id', autenticacao, verificarParametroId,  atualizarProduto);
produtoRouter.delete('/:id', autenticacao, verificarParametroId, deletarProduto);
produtoRouter.patch("/:id/imagem", autenticacao, upload.single("imagem"), uploadImagemProduto);
