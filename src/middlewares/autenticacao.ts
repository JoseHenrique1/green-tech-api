import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = "seuSegredoAqui"; 
export const autenticacao = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as { id: string, email: string, tipo: "agricultor" | "estabelecimento" };

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
