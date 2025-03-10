import { Router } from 'express';
import { cadastrarProduto, atualizarProduto, listarProdutoPorId, listarProdutosPorAgricultor, listarProdutosPorNome,
     listarProdutos, deletarProduto, uploadImagemProduto } from '../controllers/produto.controller.js';
import { verificarCamposProduto } from '../middlewares/verificarCampos.js';
import { autenticacao } from "../middlewares/autenticacao.ts";
import { upload } from '../middlewares/multerConfig.ts';
export const produtoRouter = Router();

// falta middleware da autenticação

produtoRouter.post('/', autenticacao, verificarCamposProduto, cadastrarProduto);
produtoRouter.get('/:id', autenticacao, listarProdutoPorId);
produtoRouter.get('/pesquisar/:id', autenticacao, listarProdutosPorAgricultor);
produtoRouter.get('/pesquisar/nome/:nome', autenticacao, listarProdutosPorNome);
produtoRouter.get('/', autenticacao,  listarProdutos);
produtoRouter.put('/:id', autenticacao, atualizarProduto);
produtoRouter.delete('/:id', autenticacao, deletarProduto);
produtoRouter.patch("/:id/imagem", autenticacao, upload.single("imagem"), uploadImagemProduto);
