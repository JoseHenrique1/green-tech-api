import { Request, Response } from "express";
import { prisma } from "../database/prisma.js";

export const criarAvaliacao = async (req: Request, res: Response) => {
  try {
    const { idAgricultor, idEstabelecimento, nota } = req.body;

    if (!idAgricultor || !idEstabelecimento || nota === undefined) {
      res.status(400).json({ msg: "Todos os campos obrigatórios devem ser preenchidos." });
      return;
    }

    const avaliacao = await prisma.avaliacao.create({
      data: {
        idAgricultor,
        idEstabelecimento,
        nota
      },
    });

    res.status(201).json({ msg: "Avaliação cadastrada com sucesso", avaliacao });
  } catch (error) {
    console.error("Erro ao cadastrar avaliação:", error);
    res.status(500).json({ msg: "Erro ao cadastrar avaliação" });
  }
};

export const listarAvaliacoesPorAgricultor = async (req: Request, res: Response) => {
  const { idAgricultor } = req.params;

  try {
    const avaliacoes = await prisma.avaliacao.findMany({
      where: { idAgricultor },
      include: { estabelecimento: true },
    });

    res.status(200).json(avaliacoes);
  } catch (error) {
    console.error("Erro ao listar avaliações:", error);
    res.status(500).json({ msg: "Erro ao buscar avaliações" });
  }
};

export const listarAvaliacoesPorEstabelecimento = async (req: Request, res: Response) => {
  const { idEstabelecimento } = req.params;

  try {
    const avaliacoes = await prisma.avaliacao.findMany({
      where: { idEstabelecimento },
      include: { agricultor: true },
    });

    res.status(200).json(avaliacoes);
  } catch (error) {
    console.error("Erro ao listar avaliações:", error);
    res.status(500).json({ msg: "Erro ao buscar avaliações" });
  }
};

export const excluirAvaliacao = async (req: Request, res: Response) => {
  const { idAgricultor, idEstabelecimento } = req.params;

  try {
    await prisma.avaliacao.delete({
      where: { idAgricultor_idEstabelecimento: { idAgricultor, idEstabelecimento } },
    });

    res.status(200).json({ msg: "Avaliação removida com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir avaliação:", error);
    res.status(500).json({ msg: "Erro ao excluir avaliação" });
    return;
  }
};


