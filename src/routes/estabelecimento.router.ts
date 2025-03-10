import { Router } from 'express';
import { cadastrarEstabelecimento, consultarEstabelecimentos, consultarEstabelecimentoPorId, consultarEstabelecimentoPorNome,
     atualizarEstabelecimento, excluirEstabelecimento} from '../controllers/estabelecimento.controller.js';
import { verificarCamposEstabelecimento, verificarCamposEstabelecimentoAtualizacao } from '../middlewares/verificarCampos.js';

export const estabelecimentoRouter = Router();

// falta middleware da autenticação

estabelecimentoRouter.post('/', verificarCamposEstabelecimento, cadastrarEstabelecimento);
estabelecimentoRouter.get('/:id', consultarEstabelecimentoPorId);
estabelecimentoRouter.get('/pesquisar/:nome', consultarEstabelecimentoPorNome);
estabelecimentoRouter.get('/', consultarEstabelecimentos);
estabelecimentoRouter.put('/:id', verificarCamposEstabelecimentoAtualizacao, atualizarEstabelecimento);
estabelecimentoRouter.delete('/:id', excluirEstabelecimento);

