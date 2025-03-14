import { Router } from 'express';
import { criarEncomenda, buscarEncomendas, atualizarEncomenda, deletarEncomenda, statusEncomenda } from '../controllers/encomenda.controller.ts';
import { verificarCamposEncomenda } from '../middlewares/verificarCampos.ts';
import { autenticacao } from "../middlewares/autenticacao.ts";

export const encomendaRouter = Router();

encomendaRouter.post('/', autenticacao, verificarCamposEncomenda, criarEncomenda);
encomendaRouter.get('/', autenticacao, buscarEncomendas);
encomendaRouter.put('/:id', autenticacao, atualizarEncomenda);
encomendaRouter.delete('/:id', autenticacao, deletarEncomenda);
encomendaRouter.patch('/:id', autenticacao, statusEncomenda);
