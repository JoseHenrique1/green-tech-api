/*
  Warnings:

  - The primary key for the `Avaliacao` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idAgricultor" TEXT NOT NULL,
    "idEstabelecimento" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    CONSTRAINT "Avaliacao_idAgricultor_fkey" FOREIGN KEY ("idAgricultor") REFERENCES "Agricultor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_idEstabelecimento_fkey" FOREIGN KEY ("idEstabelecimento") REFERENCES "Estabelecimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("id", "idAgricultor", "idEstabelecimento", "nota") SELECT "id", "idAgricultor", "idEstabelecimento", "nota" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
CREATE UNIQUE INDEX "Avaliacao_id_idAgricultor_idEstabelecimento_key" ON "Avaliacao"("id", "idAgricultor", "idEstabelecimento");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
