-- CreateTable
CREATE TABLE "Encomenda" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pendente',
    "agricultorId" TEXT,
    "estabelecimentoId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Encomenda_agricultorId_fkey" FOREIGN KEY ("agricultorId") REFERENCES "Agricultor" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Encomenda_estabelecimentoId_fkey" FOREIGN KEY ("estabelecimentoId") REFERENCES "Estabelecimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
