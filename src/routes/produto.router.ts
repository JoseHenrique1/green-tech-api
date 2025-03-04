import { Router } from 'express';
import { cadastrarProduto, atualizarProduto, listarProdutoPorId,
     listarProdutos, deletarProduto } from '../controllers/produto.controller.js';

const router = Router();

// falta middleware da autenticação

router.post('/', cadastrarProduto);
router.get('/:id', listarProdutoPorId);
router.get('/', listarProdutos);
router.put('/:id', atualizarProduto);
router.delete('/:id', deletarProduto);

export default router;