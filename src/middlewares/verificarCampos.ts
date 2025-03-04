import { Request, Response, NextFunction } from 'express';

export function verificarCamposEstabelecimento(req: Request, res: Response, next: NextFunction) {
    const { email, telefone, nome, senha, latitude, longitude } = req.body;

    if (!nome || !email || !telefone || !senha || !latitude || !longitude) {
        res.status(400).json({
            error: "Campos obrigatórios estão faltando ou estão vazios.",    
        });
        return;
    }

    next();
}

export function verificarCamposEstabelecimentoAtualizacao(req: Request, res: Response, next: NextFunction) {
    const { email, telefone, nome, latitude, longitude } = req.body;

    if (!nome || !email || !telefone || !latitude || !longitude) {
        res.status(400).json({
            error: "Campos obrigatórios estão faltando ou estão vazios.",    
        });
        return;
    }

    next();
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