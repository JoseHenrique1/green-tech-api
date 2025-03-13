/*
  Warnings:

  - Added the required column `nota` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "idAgricultor" TEXT NOT NULL,
    "idEstabelecimento" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,

    PRIMARY KEY ("idAgricultor", "idEstabelecimento"),
    CONSTRAINT "Avaliacao_idAgricultor_fkey" FOREIGN KEY ("idAgricultor") REFERENCES "Agricultor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_idEstabelecimento_fkey" FOREIGN KEY ("idEstabelecimento") REFERENCES "Estabelecimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("idAgricultor", "idEstabelecimento") SELECT "idAgricultor", "idEstabelecimento" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
