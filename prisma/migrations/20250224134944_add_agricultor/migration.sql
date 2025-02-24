-- CreateTable
CREATE TABLE "Agricultor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "imagem" TEXT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tamanho" REAL NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "tiposCultivo" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Agricultor_email_key" ON "Agricultor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Agricultor_telefone_key" ON "Agricultor"("telefone");
