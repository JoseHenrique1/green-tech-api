import { Router } from 'express';
import { cadastrarEstabelecimento, consultarEstabelecimentos, consultarEstabelecimentoPorId, consultarEstabelecimentoPorNome,
     atualizarEstabelecimento, excluirEstabelecimento} from '../controllers/estabelecimento.controller.js';

export const estabelecimentoRouter = Router();

// falta middleware da autenticação

estabelecimentoRouter.post('/', cadastrarEstabelecimento);
estabelecimentoRouter.get('/:id', consultarEstabelecimentoPorId);
estabelecimentoRouter.get('/pesquisar/:id', consultarEstabelecimentoPorNome);
estabelecimentoRouter.get('/', consultarEstabelecimentos);
estabelecimentoRouter.put('/:id', atualizarEstabelecimento);
estabelecimentoRouter.delete('/:id', excluirEstabelecimento);

