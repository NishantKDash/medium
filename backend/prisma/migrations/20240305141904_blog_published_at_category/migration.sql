/*
  Warnings:

  - You are about to drop the column `published` on the `Blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "published",
ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'Random',
ADD COLUMN     "publishedAt" TEXT NOT NULL DEFAULT '12/12/2012';
