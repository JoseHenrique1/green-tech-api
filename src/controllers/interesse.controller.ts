import { Request, Response } from "express";
import { prisma } from "../database/prisma.ts"; 

export const criarInteresse = async (req: Request, res: Response) => {
  try {
    const { idEstabelecimento } = req.params;
    const { idProduto } = req.body;

    if (!idProduto) {
      res.status(400).json({ error: "Id do produto não definido" });
      return;
    }

    const interesse = await prisma.interesse.create({
      data: {
        idEstabelecimento,
        idProduto,
      },
    });

    res.status(201).json(interesse);
    return;
  } catch (error) {
    res.status(500).json({ error: "Erro ao definir interesse." });
    return;
  }
};

export const listarInteressePorEstabelecimento = async (req: Request, res: Response) => {
  try {
    const { idEstabelecimento } = req.params;

    const interesses = await prisma.interesse.findMany({
      where: { idEstabelecimento },
    });

    res.status(200).json(interesses);
    return;
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar interesses do estabelecimento" });
    return;
  }
};

export const listarInteressePorProduto = async (req: Request, res: Response) => {
  try {
    const { idProduto } = req.params;

    const interesses = await prisma.interesse.findMany({
      where: { idProduto },
    });

    res.status(200).json(interesses);
    return;
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar interesses em um determinado produto" });
    return;
  }
};


export const excluirInteresse = async (req: Request, res: Response) => {
  try {
    const { idInteresse } = req.params;

    await prisma.interesse.delete({
      where: { id: idInteresse }
    });

    res.status(204).send();
    return;
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir Interesse!" });
    return;
  }
};
