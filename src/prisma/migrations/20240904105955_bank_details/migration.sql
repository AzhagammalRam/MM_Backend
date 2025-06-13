-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "bank_account" TEXT,
ADD COLUMN     "bank_branch" TEXT,
ADD COLUMN     "ifsc" TEXT,
ADD COLUMN     "name_per_bank" TEXT;
