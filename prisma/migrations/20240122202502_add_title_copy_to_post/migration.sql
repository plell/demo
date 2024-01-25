/*
  Warnings:

  - Added the required column `title_copy` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `title_copy` VARCHAR(255) NOT NULL;
