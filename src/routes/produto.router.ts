import { Router } from 'express';
import { cadastrarProduto, atualizarProduto, listarProdutoPorId, listarProdutosPorAgricultor, listarProdutosPorNome,
     listarProdutos, deletarProduto } from '../controllers/produto.controller.js';
import { verificarCamposProduto } from '../middlewares/verificarCampos.js';

export const produtoRouter = Router();

// falta middleware da autenticação

produtoRouter.post('/', verificarCamposProduto, cadastrarProduto);
produtoRouter.get('/:id', listarProdutoPorId);
produtoRouter.get('/pesquisar/:id', listarProdutosPorAgricultor);
produtoRouter.get('/pesquisar/nome/:nome', listarProdutosPorNome);
produtoRouter.get('/', listarProdutos);
produtoRouter.put('/:id', atualizarProduto);
produtoRouter.delete('/:id', deletarProduto);

