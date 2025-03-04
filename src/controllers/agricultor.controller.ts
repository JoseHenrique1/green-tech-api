import { Request, Response } from "express";
import { prisma } from "../database/prisma.js";
import { hashPassword } from "../utils/hash-password.ts";

export const cadastrarAgricultor = async (req: Request, res: Response) => {
  try {
    const { nome, email, telefone, senha, tamanho, latitude, longitude, tiposCultivo } = req.body;

    if (!nome || !email || !telefone || !senha || !tamanho || !latitude || !longitude || !tiposCultivo) {
      res.status(400).json({ msg: "Todos os campos são obrigatórios" });
      return
    }

    const agricultorExistente = await prisma.agricultor.findUnique({
      where: {
        email: email,
      },
    });

    if (agricultorExistente) {
      res.status(400).json({ msg: "Já existe um agricultor com esse email" });
      return
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

    res.status(201).json({ msg: "Agricultor cadastrado com sucesso", agricultor });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erro ao cadastrar agricultor" });
    return;
  }
};

export const consultarAgricultorPorEmail = async (req: Request, res: Response) => {
  const { email } = req.params
  console.log(JSON.stringify(req.params, null, 2));
  

  if (!email || typeof email !== "string") {
    res.status(400).json({ message: "O email é obrigatório e deve ser uma string." });
    return;
  }

  try {
    const agricultor = await prisma.agricultor.findUnique({
      where: { email: email }
    });

    if (!agricultor) {
      res.status(404).json({ message: "Agricultor não encontrado." });
      return;
    }

    res.status(200).json(agricultor);
    return;
  } catch (error) {
    console.error("Erro ao consultar agricultor por email:", error);
    res.status(500).json({ message: "Erro interno ao consultar agricultor." });
    return;
  }
};

export const atualizarAgricultor = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { imagem, nome, email, telefone, senha, tamanho, latitude, longitude, tiposCultivo } = req.body;

  if (!id) {
    res.status(400).json({ message: "ID do agricultor é obrigatório." });
    return;
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

    res.status(200).json(agricultorAtualizado);
    return;
  } catch (error) {
    console.error("Erro ao atualizar agricultor:", error);
    res.status(500).json({ message: "Erro interno ao atualizar agricultor." });
    return;
  }
};

