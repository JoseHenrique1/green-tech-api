import { Request, Response } from "express";
import { prisma } from "../database/prisma.js";
import path from "path";

export const cadastrarProduto = async (req: Request, res: Response) => {
    try {
        const { nome, preco, disponibilidade, certificacoes, quantidade, agricultorId } = req.body;
        console.log(req.body);
        

        const novoProduto = await prisma.produto.create({
            data: {
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
        console.log(error);
        
        res.status(500).json({ error: "Erro do servidor" });
    }
}

export const listarProdutos = async (req: Request, res: Response) => {
    try {
        const nome = typeof req.query.nome === 'string' ? req.query.nome : undefined;

        const whereClause = nome ? { nome: { contains: nome} } : {};

        const produtos = await prisma.produto.findMany({ where: whereClause });

        if (produtos) {
            res.status(200).json(produtos);
        } else {
            res.status(404).json({ "message": "Nenhum produto encontrado!" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor" });
    }
};

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
// Não é interessante estar em produto

// export const listarProdutosPorAgricultor = async (req: Request, res: Response) => {
//     try {
//         const produtos = await prisma.produto.findMany({
//             where: {
//                 agricultorId: String(req.params.id)
//             }
//         });
//         if (produtos.length > 0) {
//             res.status(200).json(produtos);
//         } else {
//             res.status(404).json({ "message": "Produto não encontrado" });
//         }
//     } catch (error) {
//         res.status(500).json({ error: "Erro do servidor"});
//     }
// }



export const atualizarProduto = async (req: Request, res: Response) => {
    try {
        const { nome, preco, disponibilidade, certificacoes, quantidade } = req.body;

        const produtoAtualizado = await prisma.produto.update({
            where: {
                id: String(req.params.id)
            },
            data: {    
                nome, 
                preco, 
                disponibilidade, 
                certificacoes, 
                quantidade
            },
        });
        res.status(201).json({ "message": "Produto atualizado com sucesso!", produtoAtualizado});
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor"});
    }
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

export const uploadImagemProduto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    
    if (!req.file) {
      res.status(400).json({ msg: "Nenhum arquivo enviado." });
      return;
    }

    const filePath = path.join("/upload", req.file.filename);

    const produtoAtualizado = await prisma.produto.update({
      where: { id },
      data: { imagem: filePath }
    });

    res.status(200).json({ msg: "Imagem enviada com sucesso!", produto: produtoAtualizado });
    return
  } catch (error) {
    console.error("Erro ao fazer upload da imagem:", error);
    res.status(501).json({ msg: "Erro interno ao fazer upload da imagem." });
    return;
  }
};