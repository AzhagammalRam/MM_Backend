-- AlterTable
ALTER TABLE "job_expenses" ADD COLUMN     "material_production_id" INTEGER;

-- AddForeignKey
ALTER TABLE "job_expenses" ADD CONSTRAINT "job_expenses_material_production_id_fkey" FOREIGN KEY ("material_production_id") REFERENCES "material_production"("id") ON DELETE SET NULL ON UPDATE CASCADE;
