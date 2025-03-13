/*
  Warnings:

  - You are about to drop the column `agricultorId` on the `Encomenda` table. All the data in the column will be lost.

*/
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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Encomenda_estabelecimentoId_fkey" FOREIGN KEY ("estabelecimentoId") REFERENCES "Estabelecimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Encomenda" ("createdAt", "estabelecimentoId", "id", "nome", "preco", "quantidade", "status", "updatedAt") SELECT "createdAt", "estabelecimentoId", "id", "nome", "preco", "quantidade", "status", "updatedAt" FROM "Encomenda";
DROP TABLE "Encomenda";
ALTER TABLE "new_Encomenda" RENAME TO "Encomenda";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
