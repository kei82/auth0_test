-- AlterTable
ALTER TABLE `User` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT NOW(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT NOW(3) ON UPDATE NOW(3);