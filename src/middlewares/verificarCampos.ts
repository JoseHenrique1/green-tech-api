import { Request, Response, NextFunction } from 'express';
import { validarEmail } from '../utils/validarEmail.ts';
import { validarTelefone } from '../utils/validarTelefone.ts';

function verificarCamposObrigatorios(req: Request, res: Response, next: NextFunction, isUpdate = false) {
    const { email, telefone, nome, senha, latitude, longitude, cpf } = req.body;

    if (!nome || !email || !telefone || !latitude || !longitude || (!isUpdate && !senha) || (!isUpdate && !cpf)) {
        return res.status(400).json({ error: "Campos obrigatórios estão faltando ou estão vazios." });
    }

    if (!validarEmail(email)) {
        return res.status(400).json({ error: "E-mail inválido." });
    }

    if (!validarTelefone(telefone)) {
        return res.status(400).json({ error: "Telefone inválido. Use o formato (XX) XXXXX-XXXX." });
    }

    next();
}

export function verificarCamposEstabelecimento(req: Request, res: Response, next: NextFunction) {
    verificarCamposObrigatorios(req, res, next);
}

export function verificarCamposEstabelecimentoAtualizacao(req: Request, res: Response, next: NextFunction) {
    verificarCamposObrigatorios(req, res, next, true);
}

export function verificarCamposProduto(req: Request, res: Response, next: NextFunction) {
    const { nome, preco, disponibilidade, certificacoes, quantidade, agricultorId} = req.body;

    if (!nome || !preco || !disponibilidade || !quantidade || !agricultorId || !certificacoes) {
        res.status(400).json({
            error: "Campos obrigatórios estão faltando ou estão vazios.",    
        });
        return;
    }

    next();
}