-- CreateTable
CREATE TABLE "material_dispatch" (
    "id" SERIAL NOT NULL,
    "material_inward_id" INTEGER NOT NULL,
    "received_qty" INTEGER,
    "invoice_no" TEXT,
    "invoice_date" TEXT,
    "invoice_amount" TEXT,
    "status" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "material_dispatch_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "material_dispatch" ADD CONSTRAINT "material_dispatch_material_inward_id_fkey" FOREIGN KEY ("material_inward_id") REFERENCES "material_inward_details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
