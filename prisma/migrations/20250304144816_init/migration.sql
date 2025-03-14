-- CreateTable
CREATE TABLE "Estabelecimento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "imagem" TEXT,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "imagem" TEXT,
    "nome" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "disponibilidade" TEXT NOT NULL,
    "certificacoes" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "agricultorId" TEXT NOT NULL,
    CONSTRAINT "Produto_agricultorId_fkey" FOREIGN KEY ("agricultorId") REFERENCES "Agricultor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Estabelecimento_email_key" ON "Estabelecimento"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Estabelecimento_telefone_key" ON "Estabelecimento"("telefone");
