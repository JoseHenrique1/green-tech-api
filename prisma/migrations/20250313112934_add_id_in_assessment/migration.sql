/*
  Warnings:

  - The primary key for the `Avaliacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `Avaliacao` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "id" TEXT NOT NULL,
    "idAgricultor" TEXT NOT NULL,
    "idEstabelecimento" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,

    PRIMARY KEY ("id", "idAgricultor", "idEstabelecimento"),
    CONSTRAINT "Avaliacao_idAgricultor_fkey" FOREIGN KEY ("idAgricultor") REFERENCES "Agricultor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_idEstabelecimento_fkey" FOREIGN KEY ("idEstabelecimento") REFERENCES "Estabelecimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("idAgricultor", "idEstabelecimento", "nota") SELECT "idAgricultor", "idEstabelecimento", "nota" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
