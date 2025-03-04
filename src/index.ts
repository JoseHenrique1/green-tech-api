import express from "express";
import { router } from "./routes/index.js";

const app = express();
app.use(express.json());

app.use("/", router);

// app.get("/", (req, res) => {
// 	res.json({ msg: "deu certo" });
// });

app.listen(3000, () => console.log("Server running on port 3000"));
