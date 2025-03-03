import express from "express";
import { agricultorRouter } from "./routes/agricultor.router.js";

const app = express();
app.use(express.json());

app.use("/", agricultorRouter);

app.get("/", (req, res) => {
	res.json({ msg: "deu certo" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
