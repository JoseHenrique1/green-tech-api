import { Request, Response } from "express";
import { prisma } from "../database/prisma.js";

export const cadastrarProduto = async (req: Request, res: Response) => {
    try {
        const { nome, imagem, preco, disponibilidade, certificacoes, quantidade, agricultorId } = req.body;

        const novoProduto = await prisma.produto.create({
            data: {
                imagem,
                nome,
                preco,
                disponibilidade,
                certificacoes,
                quantidade,
                agricultorId,
            },
        });
        res.status(201).json({ "message": "Produto cadastrado com sucesso!", novoProduto });
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor" });
    }
}

export const listarProdutos = async (req: Request, res: Response) => {
    try {
        const produtos = await prisma.produto.findMany();
        if (produtos.length > 0) {
            res.status(200).json(produtos);
        } else {
            res.status(404).json({ "message": "Sem produtos cadastrados!" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor"});
    }
}

export const listarProdutoPorId = async (req: Request, res: Response) => {
    try {
        const produto = await prisma.produto.findUnique({
            where: {
                id: String(req.params.id)
            }
        });
        if (produto) {
            res.status(200).json(produto);
        } else {
            res.status(404).json({ "message": "Produto não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor"});
    }
}

export const listarProdutoPorAgricultor = async (req: Request, res: Response) => {
    try {
        const produto = await prisma.produto.findMany({
            where: {
                agricultorId: String(req.params.id)
            }
        });
        if (produto) {
            res.status(200).json(produto);
        } else {
            res.status(404).json({ "message": "Produto não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor"});
    }
}

export const atualizarProduto = async (req: Request, res: Response) => {

}

export const deletarProduto = async (req: Request, res: Response) => {
    try {
        const produto = await prisma.produto.findUnique({
            where: {
                id: String(req.params.id),
            }
        });

        if (produto != null) {
            await prisma.produto.delete({
                where: {
                    id: String(req.params.id),
                }
            });
            res.status(200).json({ "message": "Produto excluido" });
        } else {
            res.status(404).json({ "message": "Produto não encontrado" });
        }

    } catch (error) {
        res.status(500).json({ error: "Erro do servidor"});
    }
}