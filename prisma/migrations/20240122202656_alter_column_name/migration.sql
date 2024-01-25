/*
  Warnings:

  - You are about to drop the column `title_copy` on the `Post` table. All the data in the column will be lost.
  - Added the required column `titleCopy` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `title_copy`,
    ADD COLUMN `titleCopy` VARCHAR(255) NOT NULL;
