import { Request, Response } from "express";
import { prisma } from "../database/prisma.js";

export const cadastrarAgricultor = async (req: Request, res: Response) => {
  res.json({ msg: "deu certo agricultor" });

}

export const atualizarAgricultor = async (req: Request, res: Response) => {
    
}
