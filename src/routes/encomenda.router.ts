import { Router } from 'express';
import { criarEncomenda, buscarEncomendas, atualizarEncomenda } from '../controllers/encomenda.controller.ts';
import { verificarCamposEncomenda } from '../middlewares/verificarCampos.ts';
import { autenticacao } from "../middlewares/autenticacao.ts";

export const encomendaRouter = Router();

encomendaRouter.post('/', verificarCamposEncomenda, criarEncomenda);
encomendaRouter.get('/', buscarEncomendas);
encomendaRouter.put('/:id', atualizarEncomenda);

