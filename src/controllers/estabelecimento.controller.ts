import { Request, Response } from "express";
import { prisma } from "../database/prisma.js";

export const cadastrarEstabelecimento = async (req: Request, res: Response) => {
    try {
        const { email, telefone, imagem, nome, senha, latitude, longitude } = req.body;

        const novoEstalecimento = await prisma.estabelecimento.create({
            data: {    
                email,    
                telefone, 
                imagem,   
                nome,     
                senha,    
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
        const estabelecimentos = await prisma.estabelecimento.findMany();
        if (estabelecimentos.length > 0) {
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
        const estabelecimento = await prisma.estabelecimento.findMany({
            where: {
                id: String(req.params.id)
            }
        });
        if (estabelecimento.length > 0) {
            res.status(200).json(estabelecimento);
        } else {
            res.status(404).json({ "message": "estabelecimento não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor"});
    }
}

export const consultarEstabelecimentoPorNome = async (req: Request, res: Response) => {
    try {
        const estabelecimento = await prisma.estabelecimento.findMany({
            where: {
                id: String(req.params.nome)
            }
        });
        if (estabelecimento.length > 0) {
            res.status(200).json(estabelecimento);
        } else {
            res.status(404).json({ "message": "estabelecimento não encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor"});
    }
}

export const atualizarEstabelecimento = async (req: Request, res: Response) => {
    
}

export const excluirEstabelecimento = async (req: Request, res: Response) => {
    
}