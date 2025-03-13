-- CreateTable
CREATE TABLE "Avaliacao" (
    "idAgricultor" TEXT NOT NULL,
    "idEstabelecimento" TEXT NOT NULL,

    PRIMARY KEY ("idAgricultor", "idEstabelecimento"),
    CONSTRAINT "Avaliacao_idAgricultor_fkey" FOREIGN KEY ("idAgricultor") REFERENCES "Agricultor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_idEstabelecimento_fkey" FOREIGN KEY ("idEstabelecimento") REFERENCES "Estabelecimento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
