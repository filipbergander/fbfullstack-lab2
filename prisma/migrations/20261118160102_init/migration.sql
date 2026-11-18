/*
  Warnings:

  - You are about to drop the column `vacationsDays` on the `Vacation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vacation" DROP COLUMN "vacationsDays",
ADD COLUMN     "vacationDays" INTEGER NOT NULL DEFAULT 3;
