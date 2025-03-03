import { Request, Response } from "express";
import { prisma } from "../database/prisma.js";
import { hashPassword } from "../utils/hash-password.js"; 

export const agricultorPost = async (req: Request, res: Response) => {
  res.json({ msg: "deu certo" });
};