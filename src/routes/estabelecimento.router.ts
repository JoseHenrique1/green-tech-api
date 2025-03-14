import { Router } from 'express';
import { cadastrarEstabelecimento, consultarEstabelecimentos, consultarEstabelecimentoPorId,
     atualizarEstabelecimento, uploadImagemEstabelecimento} from '../controllers/estabelecimento.controller.ts';
import { verificarCamposEstabelecimento, verificarCamposEstabelecimentoAtualizacao, verificarParametroId } from '../middlewares/verificarCampos.ts';
import { autenticacao } from "../middlewares/autenticacao.ts";
import { upload } from '../middlewares/multerConfig.ts';
export const estabelecimentoRouter = Router();

// falta middleware da autenticação

estabelecimentoRouter.post('/', verificarCamposEstabelecimento, cadastrarEstabelecimento);
estabelecimentoRouter.get('/:id', autenticacao, verificarParametroId, consultarEstabelecimentoPorId);
estabelecimentoRouter.get('/', autenticacao, consultarEstabelecimentos);
estabelecimentoRouter.put('/:id', autenticacao, verificarParametroId, verificarCamposEstabelecimentoAtualizacao, atualizarEstabelecimento);
estabelecimentoRouter.patch("/:id/imagem",autenticacao, upload.single("imagem"), uploadImagemEstabelecimento);


