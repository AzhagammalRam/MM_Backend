import { prisma } from '../prisma/lib';
import { STATUS_CODE, RESPONSE_MESSAGE } from "../utils/constants/ResponseStatus";

interface UnitData {
    id?: number;
    unit?: string;
    status?: boolean;
    material?: { materialName: string }[];
}

export const createUnit = async (data: UnitData) => {
    try {
        const unit = await prisma.unit.create({
            data: {
                unit: data.unit || '',
                status: true,
                Material: {
                    create: data.material?.map(mat => ({
                        name: mat.materialName,
                        status: true
                    })) || []
                }
            }
        });

        return {
            status: STATUS_CODE.CREATED_CODE,
            message: "Unit and associated materials have been created successfully",
            data: unit
        };
    } catch (errors) {
        console.log('err', errors);
        return {
            status: STATUS_CODE.SERVER_ERROR_CODE,
            message: RESPONSE_MESSAGE.INTERNAL_ERROR
        };
    }
};

export const fetchUnit = async (query: any) => {
    try {
        const page = query?.page ? parseInt(query?.page) : 1;
        const limit = query?.limit ? parseInt(query?.limit) : 10;

        const units = await prisma.unit.findMany({
            skip: (page - 1) * limit,
            take: limit
        });
        const count: number = await prisma.unit.count();
        
        return {
            status: STATUS_CODE.SUCCESS_CODE,
            message: "Units have been fetched successfully",
            data: { units, count }
        };
    } catch (errors) {
        console.log('err', errors);
        return {
            status: STATUS_CODE.SERVER_ERROR_CODE,
            message: RESPONSE_MESSAGE.INTERNAL_ERROR
        };
    }
};

export const updateUnit = async (data: UnitData) => {
    try {
        
        const unit = await prisma.unit.update({
            where: {
                id: data?.id
            },
            data: {
                unit: data.unit || '',
                status: data.status || true
            }
        });

        return {
            status: STATUS_CODE.SUCCESS_CODE,
            message: "Unit has been updated successfully",
            data: unit
        };
    } catch (errors) {
        console.log('err', errors);
        return {
            status: STATUS_CODE.SERVER_ERROR_CODE,
            message: RESPONSE_MESSAGE.INTERNAL_ERROR
        };
    }
};

export const removeUnit = async (data: { unitId: number }) => {
    try {
        if (!data.unitId) {
            throw new Error('Unit ID is required');
        }
        await prisma.unit.delete({
            where: {
                id: data.unitId
            }
        });

        return {
            status: STATUS_CODE.SUCCESS_CODE,
            message: "Unit has been removed successfully",
            data: []
        };
    } catch (errors) {
        console.log('err', errors);
        return {
            status: STATUS_CODE.SERVER_ERROR_CODE,
            message: RESPONSE_MESSAGE.INTERNAL_ERROR
        };
    }
};
