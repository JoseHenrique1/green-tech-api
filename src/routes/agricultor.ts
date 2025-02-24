import { Router, Request, Response } from "express";
import { prisma } from "../database/prisma.js";
import { hashPassword } from "../utils/hash-password.js"; 

export const agricultorRouter = Router();


interface Agricultor {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
}

agricultorRouter.post("/", async (req, res) => {
  res.json({ msg: "deu certo" });
});
