import { Response, Request } from "express";
import { prisma } from "../database/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = "seuSegredoAqui"; 

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, senha, tipo } = req.body;

    if (!email || !senha || !tipo) {
      res.status(400).json({ message: "Email, senha e tipo são obrigatórios." });
      return;
    }

    if (!["agricultor", "estabelecimento"].includes(tipo)) {
      res.status(400).json({ message: "Tipo inválido. Escolha entre 'agricultor' ou 'estabelecimento'." });
      return;
    }
  
    const usuario = tipo === "agricultor"
      ? await prisma.agricultor.findUnique({ where: { email } })
      : await prisma.estabelecimento.findUnique({ where: { email } });

    if (!usuario) {
      res.status(404).json({ message: "Usuário não encontrado." });
      return;
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      res.status(401).json({ message: "Credenciais inválidas." });
      return;
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, tipo },
      SECRET_KEY,
      { expiresIn: "2h" }
    );

    res.json({
      message: "Login bem-sucedido!",
      token,
      usuario: {
        id: usuario.id,
        email: usuario.email,
        nome: usuario.nome,
        tipo
      }
    });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Erro interno no servidor." });
    return;
  }
};
