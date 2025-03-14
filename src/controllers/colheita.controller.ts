import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Criar Colheita (RF_11)
export const criarColheita = async (req: Request, res: Response) => {
    try {
        const { nomeCultura, dataPlantio, dataPrevistaColheita, latitude, longitude, quantidadePrevista, agricultorId } = req.body;
        
        const novaColheita = await prisma.colheita.create({
            data: {
                nomeCultura,
                dataPlantio: new Date(dataPlantio),
                dataPrevistaColheita: new Date(dataPrevistaColheita),
                latitude,
                longitude,
                quantidadePrevista,
                agricultorId
            },
        });

        res.status(201).json({ message: "Colheita criada com sucesso!", novaColheita });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar colheita" });
    }
};

// Atualizar Colheita (RF_12)
export const atualizarColheita = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nomeCultura, dataPlantio, dataPrevistaColheita, latitude, longitude, quantidadePrevista } = req.body;

        const colheitaAtualizada = await prisma.colheita.update({
            where: { id },
            data: {
                nomeCultura,
                dataPlantio: new Date(dataPlantio),
                dataPrevistaColheita: new Date(dataPrevistaColheita),
                latitude,
                longitude,
                quantidadePrevista
            },
        });

        res.status(200).json({ message: "Colheita atualizada com sucesso!", colheitaAtualizada });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao atualizar colheita" });
    }
};

// Ler Colheitas (RF_13)
export const listarColheitas = async (req: Request, res: Response) => {
    try {
        const colheitas = await prisma.colheita.findMany();
        res.status(200).json(colheitas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar colheitas" });
    }
};

// Deletar Colheita (RF_14)
export const deletarColheita = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await prisma.colheita.delete({ where: { id } });

        res.status(200).json({ message: "Colheita deletada com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar colheita" });
    }
};
