import { Request, Response } from "express";
import { prisma } from "../database/prisma.js";
import { hashPassword } from "../utils/hash-password.ts";
import path from "path";

export const cadastrarEstabelecimento = async (req: Request, res: Response) => {
    try {
        const { email, telefone, nome, senha, latitude, longitude } = req.body;
        const senhaHash = await hashPassword(senha);
        const novoEstalecimento = await prisma.estabelecimento.create({
            data: {    
                email,    
                telefone,   
                nome,     
                senha: senhaHash,    
                latitude, 
                longitude 
            },
        });
        res.status(201).json({ "message": "Estabelecimento cadastrado com sucesso!", novoEstalecimento});
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor"});
    }
}

export const consultarEstabelecimentos = async (req: Request, res: Response) => {
    try {
        const nome = typeof req.query.nome === 'string' ? req.query.nome : undefined;

        const whereClause = nome ? { nome: { contains: nome} } : {};

        const estabelecimentos = await prisma.estabelecimento.findMany({ where: whereClause });

        if (estabelecimentos) {
            res.status(200).json(estabelecimentos);
        } else {
            res.status(404).json({ "message": "Sem estabelecimentos cadastrados!" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor"});
    }
}

export const consultarEstabelecimentoPorId = async (req: Request, res: Response) => {
    try {
        const estabelecimento = await prisma.estabelecimento.findUnique({
            where: {
                id: String(req.params.id)
            }
        });
        if (estabelecimento) {
            res.status(200).json(estabelecimento);
        } else {
            res.status(404).json({ "message": "estabelecimento não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor"});
    }
}


export const atualizarEstabelecimento = async (req: Request, res: Response) => {
    try {
        const { email, telefone, nome, latitude, longitude } = req.body;

        const estalecimentoAtualizado = await prisma.estabelecimento.update({
            where: {
                id: String(req.params.id)
            },
            data: {    
                email,    
                telefone,   
                nome,       
                latitude, 
                longitude 
            },
        });
        res.status(201).json({ "message": "Estabelecimento atualizado com sucesso!", estalecimentoAtualizado});
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor"});
    }
}

export const uploadImagemEstabelecimento = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    
    if (!req.file) {
      res.status(400).json({ msg: "Nenhum arquivo enviado." });
      return;
    }

    const filePath = path.join("/upload", req.file.filename);

    const estabelecimentoAtualizado = await prisma.estabelecimento.update({
      where: { id },
      data: { imagem: filePath }
    });

    res.status(200).json({ msg: "Imagem enviada com sucesso!", estabelecimento: estabelecimentoAtualizado });
    return
  } catch (error) {
    console.error("Erro ao fazer upload da imagem:", error);
    res.status(501).json({ msg: "Erro interno ao fazer upload da imagem." });
    return;
  }
};