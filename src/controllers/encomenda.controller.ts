import { Request, Response, NextFunction } from "express";
import { prisma } from "../database/prisma.ts";

export const buscarEncomendas = async (req: Request, res: Response) => {
    try {
        const nome = typeof req.query.nome === 'string' ? req.query.nome : undefined;
        if (!nome) {
            res.status(400).json({ error: "O parâmetro 'nome' é obrigatório." });
            return;
        }

        const encomendas = await prisma.encomenda.findMany({ 
            where: { nome: { contains: nome } }
        });

        if (encomendas.length > 0) {
            res.status(200).json(encomendas);
            return;
        } else {
            res.status(404).json({ "message": "Nenhuma encomenda encontrada!" });
            return;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro do servidor" });
        return;
    }
};


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

export const atualizarEncomenda = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nome, quantidade, preco, estabelecimentoId } = req.body;

        const encomendaAtualizada = await prisma.encomenda.update({
            where: { id },
            data: {
                nome,
                quantidade,
                preco,
                estabelecimentoId,
            },
        });

        res.status(200).json({ "message": "Encomenda atualizada com sucesso!", encomendaAtualizada });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro do servidor" });
        return;
    }
}

export const deletarEncomenda = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // não pode deletar a encomenda se o status for aceito
        const encomenda = await prisma.encomenda.findUnique({ where: { id } });
        if (encomenda && encomenda.status === "aceito") {
            res.status(400).json({ error: "Não é possível deletar uma encomenda com status 'aceito'." });
            return;
        }

        await prisma.encomenda.delete({ where: { id } });

        res.status(200).json({ "message": "Encomenda deletada com sucesso!" });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro do servidor" });
        return;
    }
}

export const statusEncomenda = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const encomendaAtualizada = await prisma.encomenda.update({
            where: { id },
            data: {
                status,
            },
        });

        res.status(200).json({ "message": "Status da encomenda atualizado com sucesso!", encomendaAtualizada });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro do servidor" });
        return;
    }
}