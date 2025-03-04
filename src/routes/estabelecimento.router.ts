import { Router } from 'express';
import { cadastrarEstabelecimento, consultarEstabelecimento, consultarEstabelecimentoPorId,
     atualizarEstabelecimento, excluirEstabelecimento} from '../controllers/estabelecimento.controller.js';

const router = Router();

router.post('/', cadastrarEstabelecimento);
router.get('/:id', consultarEstabelecimentoPorId);
router.get('/', consultarEstabelecimento);
router.put('/:id', atualizarEstabelecimento);
router.delete('/:id', excluirEstabelecimento);

export default router;