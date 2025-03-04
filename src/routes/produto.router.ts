import { Router } from 'express';
import { cadastrarProduto, atualizarProduto, listarProdutoPorId,
     listarProdutos, deletarProduto } from '../controllers/produto.controller.js';

export const produtoRouter = Router();

// falta middleware da autenticação

produtoRouter.post('/', cadastrarProduto);
produtoRouter.get('/:id', listarProdutoPorId);
produtoRouter.get('/', listarProdutos);
produtoRouter.put('/:id', atualizarProduto);
produtoRouter.delete('/:id', deletarProduto);

