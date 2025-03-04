import { Request, Response } from "express";
import { prisma } from "../database/prisma.js";
import { hashPassword } from "../utils/hash-password.ts";

export const cadastrarAgricultor = async (req: Request, res: Response) => {
  try {
    const { nome, email, telefone, senha, tamanho, latitude, longitude, tiposCultivo } = req.body;

    if (!nome || !email || !telefone || !senha || !tamanho || !latitude || !longitude || !tiposCultivo) {
      return res.status(400).json({ msg: "Todos os campos são obrigatórios" });
    }

    const agricultorExistente = await prisma.agricultor.findUnique({
      where: {
        email: email,
      },
    });

    if (agricultorExistente) {
      return res.status(400).json({ msg: "Já existe um agricultor com esse email" });
    }

    const senhaHash = await hashPassword(senha);

    const agricultor = await prisma.agricultor.create({
      data: {
        nome,
        email,
        telefone,
        senha: senhaHash, 
        tamanho,
        latitude,
        longitude,
        tiposCultivo,
      },
    });

    return res.status(201).json({ msg: "Agricultor cadastrado com sucesso", agricultor });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Erro ao cadastrar agricultor" });
  }
};


export const atualizarAgricultor = async (req: Request, res: Response) => {
    
}
