import { Request, Response, NextFunction } from "express";

export function verificarCamposCriarAvaliacao(req: Request, res: Response, next: NextFunction) {
  const { idAgricultor, nota } = req.body;
  const { idEstabelecimento } = req.params;

  if (!idEstabelecimento || !idAgricultor || typeof nota !== "number") {
    res.status(400).json({ error: "Campos obrigatórios ausentes ou inválidos." });
    return;
  }

  next();
}

export function verificarCamposListarAvaliacoesPorAgricultor(req: Request, res: Response, next: NextFunction) {
  const { idAgricultor } = req.params;

  if (!idAgricultor) {
    res.status(400).json({ error: "O ID do agricultor é obrigatório." });
    return;
  }

  next();
}

export function verificarCamposListarAvaliacoesPorEstabelecimento(req: Request, res: Response, next: NextFunction) {
  const { idEstabelecimento } = req.params;

  if (!idEstabelecimento) {
    res.status(400).json({ error: "O ID do estabelecimento é obrigatório." });
    return;
  }

  next();
}

export function verificarCamposExcluirAvaliacao(req: Request, res: Response, next: NextFunction) {
  const { idAvaliacao } = req.params;

  if (!idAvaliacao) {
    res.status(400).json({ error: "O ID da avaliação é obrigatório." });
    return;
  }

  next();
}
