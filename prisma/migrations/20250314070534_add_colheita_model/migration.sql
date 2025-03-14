/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Colheita` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Colheita` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Colheita" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nomeCultura" TEXT NOT NULL,
    "dataPlantio" DATETIME NOT NULL,
    "dataPrevistaColheita" DATETIME NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "quantidadePrevista" INTEGER NOT NULL,
    "agricultorId" TEXT NOT NULL,
    CONSTRAINT "Colheita_agricultorId_fkey" FOREIGN KEY ("agricultorId") REFERENCES "Agricultor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Colheita" ("agricultorId", "dataPlantio", "dataPrevistaColheita", "id", "latitude", "longitude", "nomeCultura", "quantidadePrevista") SELECT "agricultorId", "dataPlantio", "dataPrevistaColheita", "id", "latitude", "longitude", "nomeCultura", "quantidadePrevista" FROM "Colheita";
DROP TABLE "Colheita";
ALTER TABLE "new_Colheita" RENAME TO "Colheita";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
