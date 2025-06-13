import { prisma } from '../prisma/lib'; 
import { STATUS_CODE, RESPONSE_MESSAGE } from "../utils/constants/ResponseStatus";


export const createJobType = async (inputs: any) => {
  return await prisma.jobType.create({
    data: inputs,
  });
};


export const fetchJobTypes = async (query: any) => {
  try {
    const page = query.page ? parseInt(query.page) : 1;
    const limit = query.limit ? parseInt(query.limit) : 10;
    const job = await prisma.jobType.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
    const count = await prisma.jobType.count();
    return {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Materials fetched successfully",
      data: { job, count }
    };
  } catch (error) {
    console.error('Error fetching materials:', error);
    return {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR
    };
  }
};


export const updateJobType = async (inputs: any) => {
  return await prisma.jobType.update({
    where:  {
      id :parseInt(inputs.id)
     } ,
    data: {
      name : inputs.name
    },
  });
};


export const removeJobType = async (id: number) => {
  return await prisma.jobType.delete({
    where: { id },
  });
};
