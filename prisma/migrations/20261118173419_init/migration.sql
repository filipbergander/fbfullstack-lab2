-- CreateTable
CREATE TABLE "Vacation" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "vacationDays" INTEGER NOT NULL DEFAULT 3,
    "visited" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vacation_pkey" PRIMARY KEY ("id")
);
