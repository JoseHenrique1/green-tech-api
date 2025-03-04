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

export const consultarAgricultorPorEmail = async (req: Request, res: Response) => {
  const { email } = req.query;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "O email é obrigatório e deve ser uma string." });
  }

  try {
    const agricultor = await prisma.agricultor.findUnique({
      where: { email: email }
    });

    if (!agricultor) {
      return res.status(404).json({ message: "Agricultor não encontrado." });
    }

    return res.status(200).json(agricultor);
  } catch (error) {
    console.error("Erro ao consultar agricultor por email:", error);
    return res.status(500).json({ message: "Erro interno ao consultar agricultor." });
  }
};

export const atualizarAgricultor = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { imagem, nome, email, telefone, senha, tamanho, latitude, longitude, tiposCultivo } = req.body;

  if (!id) {
    return res.status(400).json({ message: "ID do agricultor é obrigatório." });
  }

  try {
    const agricultorAtualizado = await prisma.agricultor.update({
      where: { id: id }, 
      data: {
        nome,             // Se for passado no corpo
        email,            // Se for passado no corpo
        telefone,         // Se for passado no corpo
        senha,            // Se for passado no corpo (cuidado com a senha, deve ser criptografada antes de salvar)
        tamanho,          // Se for passado no corpo
        latitude,         // Se for passado no corpo
        longitude,        // Se for passado no corpo
        tiposCultivo,     // Se for passado no corpo
      }
    });

    return res.status(200).json(agricultorAtualizado);
  } catch (error) {
    console.error("Erro ao atualizar agricultor:", error);
    return res.status(500).json({ message: "Erro interno ao atualizar agricultor." });
  }
};

