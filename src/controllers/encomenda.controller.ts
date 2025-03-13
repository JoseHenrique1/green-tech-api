import { Request, Response, NextFunction } from "express";
import { prisma } from "../database/prisma.ts";



export const criarEncomenda = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { nome, quantidade, preco, estabelecimentoId } = req.body;
        
        const novaEncomenda = await prisma.encomenda.create({
            data: {
                nome,
                quantidade,
                preco,
                estabelecimentoId,
            },
        });
        res.status(201).json({ "message": "Encomenda criada com sucesso!", novaEncomenda });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro do servidor" });
        return;
    }
};
