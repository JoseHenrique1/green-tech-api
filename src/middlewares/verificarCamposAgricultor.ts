import { Request, Response, NextFunction } from "express";

export function verificarCamposAgricultor(req: Request, res: Response, next: NextFunction) {
  const { nome, email, telefone, senha, tamanho, latitude, longitude, tiposCultivo } = req.body;

  if (!nome || !email || !telefone || !senha || !tamanho || !latitude || !longitude || !tiposCultivo) {
      res.status(400).json({ error: "Todos os campos são obrigatórios." });
      return;
  }

  next();
}

// Verifica se o ID do agricultor foi passado na requisição
export function verificarIdAgricultor(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  if (!id) {
      res.status(400).json({ error: "ID do agricultor é obrigatório." });
      return;
  }

  next();
}

// Verifica os campos ao atualizar um agricultor (pelo menos um campo deve ser enviado)
export function verificarCamposAtualizacaoAgricultor(req: Request, res: Response, next: NextFunction) {
  const { nome, email, telefone, senha, tamanho, latitude, longitude, tiposCultivo } = req.body;

  if (!nome && !email && !telefone && !senha && !tamanho && !latitude && !longitude && !tiposCultivo) {
      res.status(400).json({ error: "Pelo menos um campo deve ser atualizado." });
      return;
  }

  next();
}