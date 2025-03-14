/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Encomenda` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Encomenda` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Colheita" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nomeCultura" TEXT NOT NULL,
    "dataPlantio" DATETIME NOT NULL,
    "dataPrevistaColheita" DATETIME NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "quantidadePrevista" INTEGER NOT NULL,
    "agricultorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Colheita_agricultorId_fkey" FOREIGN KEY ("agricultorId") REFERENCES "Agricultor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Encomenda" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pendente',
    "estabelecimentoId" TEXT NOT NULL,
    CONSTRAINT "Encomenda_estabelecimentoId_fkey" FOREIGN KEY ("estabelecimentoId") REFERENCES "Estabelecimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Encomenda" ("estabelecimentoId", "id", "nome", "preco", "quantidade", "status") SELECT "estabelecimentoId", "id", "nome", "preco", "quantidade", "status" FROM "Encomenda";
DROP TABLE "Encomenda";
ALTER TABLE "new_Encomenda" RENAME TO "Encomenda";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
