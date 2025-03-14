-- CreateTable
CREATE TABLE "Interesse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idProduto" TEXT NOT NULL,
    "idEstabelecimento" TEXT NOT NULL,
    CONSTRAINT "Interesse_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Interesse_idEstabelecimento_fkey" FOREIGN KEY ("idEstabelecimento") REFERENCES "Estabelecimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Interesse_id_idProduto_idEstabelecimento_key" ON "Interesse"("id", "idProduto", "idEstabelecimento");
