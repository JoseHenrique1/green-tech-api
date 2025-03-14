import { Request, Response, NextFunction } from "express";

export function verificarCamposCriarInteresse(req: Request, res: Response, next: NextFunction) {
    const { idProduto } = req.body;
    const { idEstabelecimento } = req.params;
  
    if (!idEstabelecimento || !idProduto) {
      res.status(400).json({ error: "Campos obrigatórios ausentes ou inválidos." });
      return;
    }
  
    next();
}

export function verificarCamposListarInteressePorEstabelecimento(req: Request, res: Response, next: NextFunction) {
    if (!req.params.idEstabelecimento) {
      res.status(400).json({ error: "O ID do estabelecimento é obrigatório." });
      return;
    }
    next();
}

export function verificarCamposListarInteressePorProdutos(req: Request, res: Response, next: NextFunction) {
    if (!req.params.idProduto) {
      res.status(400).json({ error: "O ID do produto é obrigatório." });
      return;
    }
    next();
}

export function verificarCamposExcluirInteresse(req: Request, res: Response, next: NextFunction) {
    if (!req.params.idInteresse) {
      res.status(400).json({ error: "O ID do interesse é obrigatório." });
      return;
    }
    next();
}