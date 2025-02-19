/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Homepage" (
    "title" TEXT NOT NULL,
    "description" JSONB NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Homepage_title_key" ON "Homepage"("title");
