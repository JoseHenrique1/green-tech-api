import express from "express";
import { agricultorRouter } from "./routes/agricultor.router.js";
import { estabelecimentoRouter } from "./routes/estabelecimento.router.js";
import { produtoRouter } from "./routes/produto.router.js";

const app = express();
app.use(express.json());

app.use("/", agricultorRouter);
app.use("/estabelecimento", estabelecimentoRouter);
app.use("/produto", produtoRouter);

// app.get("/", (req, res) => {
// 	res.json({ msg: "deu certo" });
// });

app.listen(3000, () => console.log("Server running on port 3000"));
