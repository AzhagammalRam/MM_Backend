import { prisma } from '../prisma/lib';  // Adjust the path to your Prisma client
import { STATUS_CODE, RESPONSE_MESSAGE } from "../utils/constants/ResponseStatus";

// Create Material
export const createMaterial = async (data: any) => {
  try {
    const material = await prisma.material.create({
      data: {
        name: data.name,
        unitId: parseInt(data.unitId),
        displayName :data.displayName
      },
    });
    return {
      status: STATUS_CODE.CREATED_CODE,
      message: "Material created successfully",
      data: material
    };
  } catch (error) {
    console.error('Error creating material:', error);
    return {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR
    };
  }
};

// Fetch Materials
export const fetchMaterials = async (query: any) => {
  try {
    const page = query.page ? parseInt(query.page) : 1;
    const limit = query.limit ? parseInt(query.limit) : 10;
    const materials = await prisma.material.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        unit: true,
      }
    });
    const count = await prisma.material.count();
    return {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Materials fetched successfully",
      data: { materials, count }
    };
  } catch (error) {
    console.error('Error fetching materials:', error);
    return {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR
    };
  }
};

// Update Material
export const updateMaterial = async (data: any) => {
  try {
    const material = await prisma.material.update({
      where: { id: parseInt(data.id) },
      data: {
        name: data.name,
        unitId: parseInt(data.unitId),
        displayName :data.displayName
      },
    });
    return {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Material updated successfully",
      data: material
    };
  } catch (error) {
    console.error('Error updating material:', error);
    return {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR
    };
  }
};

// Remove Material
export const removeMaterial = async (id: number) => {
  try {
    await prisma.material.delete({
      where: { id }
    });
    return {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Material removed successfully",
      data: []
    };
  } catch (error) {
    console.error('Error removing material:', error);
    return {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR
    };
  }
};
