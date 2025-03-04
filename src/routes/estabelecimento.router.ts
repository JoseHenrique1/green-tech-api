import { Router } from 'express';
import { cadastrarEstabelecimento, consultarEstabelecimento, consultarEstabelecimentoPorId,
     atualizarEstabelecimento, excluirEstabelecimento} from '../controllers/estabelecimento.controller.js';

export const estabelecimentoRouter = Router();

// falta middleware da autenticação

estabelecimentoRouter.post('/', cadastrarEstabelecimento);
estabelecimentoRouter.get('/:id', consultarEstabelecimentoPorId);
estabelecimentoRouter.get('/', consultarEstabelecimento);
estabelecimentoRouter.put('/:id', atualizarEstabelecimento);
estabelecimentoRouter.delete('/:id', excluirEstabelecimento);

