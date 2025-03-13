import { Request, Response } from "express";
import { prisma } from "../database/prisma.ts"; // Certifique-se de importar a instância do Prisma

// Criar uma avaliação
export const criarAvaliacao = async (req: Request, res: Response) => {
  try {
    const { idEstabelecimento } = req.params;
    const { idAgricultor, nota } = req.body;

    if (!idAgricultor || typeof nota !== "number") {
      return res.status(400).json({ error: "Campos obrigatórios ausentes ou inválidos." });
    }

    const avaliacao = await prisma.avaliacao.create({
      data: {
        idEstabelecimento,
        idAgricultor,
        nota,
      },
    });

    return res.status(201).json(avaliacao);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar avaliação." });
  }
};

// Listar avaliações de um agricultor
export const listarAvaliacoesPorAgricultor = async (req: Request, res: Response) => {
  try {
    const { idAgricultor } = req.params;

    const avaliacoes = await prisma.avaliacao.findMany({
      where: { idAgricultor },
      include: { estabelecimento: true },
    });

    return res.json(avaliacoes);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao listar avaliações do agricultor." });
  }
};

// Listar avaliações feitas por um estabelecimento
export const listarAvaliacoesPorEstabelecimento = async (req: Request, res: Response) => {
  try {
    const { idEstabelecimento } = req.params;

    const avaliacoes = await prisma.avaliacao.findMany({
      where: { idEstabelecimento },
      include: { agricultor: true },
    });

    return res.json(avaliacoes);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao listar avaliações do estabelecimento." });
  }
};

// Excluir uma avaliação
export const excluirAvaliacao = async (req: Request, res: Response) => {
  try {
    const { idAvaliacao } = req.params;

    await prisma.avaliacao.delete({
      where: { id: idAvaliacao },
    });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: "Erro ao excluir avaliação." });
  }
};
