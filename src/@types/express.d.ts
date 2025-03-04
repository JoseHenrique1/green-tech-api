type User = { 
  id: string, 
  email: string, 
  tipo: "agricultor" | "estabelecimento" 
}

declare namespace Express {
      export interface Request {
          user: User;
      }
}