import { prisma } from "../prisma/lib";
import {
  STATUS_CODE,
  RESPONSE_MESSAGE,
} from "../utils/constants/ResponseStatus";
import fs from "fs";


const create = async (data: any) => {
  try {
    let materialDetails = JSON.parse(data.materialDetails);
    let materialInwardCount = await prisma.materialInwardDetails.count();
    
    let materilaInward = await prisma.materialInward.create({
      data: {
        clientId: parseInt(data.clientId),
        dcNumber: data.dcNumber,
        dcImage: data.dcImage,
      },
      select: {
        id: true,
      },
    });

    let materialInfoArray: any[] = [];

    materialDetails.map((data: any) => {
      let materialInfo: any = {};
      materialInwardCount = materialInwardCount + 1;
      let jobId = "JOB000" + materialInwardCount;
      materialInfo.materialInwardId = materilaInward.id;
      materialInfo.material = data.material;
      materialInfo.thickness = data.thickness;
      materialInfo.quantity = parseInt(data.quantity);
      materialInfo.receivedDate = new Date(data.receivedDate);
      materialInfo.estimatedDispatchDate = new Date(data.estimatedDispatchDate);
      materialInfo.type = data.type;
      // materialInfo.length = data.length,
      materialInfo.jobTypeId = parseInt(data.jobTypeId);
      materialInfo.jobStatus = "1";
      materialInfo.jobId = jobId;
      materialInfo.inspection = data.inspection;
      materialInfo.cleaning = parseInt(data.cleaning);
      materialInfo.printing = parseInt(data.printing);
      materialInfoArray.push(materialInfo);
    });

    await prisma.materialInwardDetails.createMany({
      data: materialInfoArray,
    });

    let response = {
      status: STATUS_CODE.CREATED_CODE,
      message: "Material Inward has been created successfully",
      data: [],
    };
    return response;
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const get = async (query: any) => {
  try {
    const page = query?.page ? parseInt(query?.page) : 1;
    const limit = query?.limit ? parseInt(query?.limit) : 10;

    const materialInward = await prisma.materialInward.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        materialInwardDetails: true,
        client: true,
      },
    });
    const count: number = await prisma.materialInward.count();
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Material Inward has been fetched successfully",
      data: { materialInward, count },
    };
    return response;
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const update = async (inputs: any) => {
  try {
    let materialDetails = JSON.parse(inputs.materialDetails);
    inputs.dcImage = inputs.dcImage ? inputs.dcImage : inputs.oldDCImage;
    await prisma.materialInward.update({
      where: {
        id: parseInt(inputs.materialInwardId),
      },
      data: {
        clientId: parseInt(inputs.clientId),
        dcNumber: inputs.dcNumber,
        dcImage: inputs.dcImage,
      },
      select: {
        id: true,
      },
    });

    await prisma.materialInwardDetails.deleteMany({
      where: {
        materialInwardId: parseInt(inputs.materialInwardId),
      },
    });

    let materialInfoArray: any[] = [];

    materialDetails.map((data: any) => {
      let materialInfo: any = {};
      materialInfo.materialInwardId = parseInt(inputs.materialInwardId);
      materialInfo.material = data.material;
      materialInfo.thickness = data.thickness;
      materialInfo.quantity = parseInt(data.quantity);
      materialInfo.receivedDate = new Date(data.receivedDate);
      materialInfo.estimatedDispatchDate = new Date(data.estimatedDispatchDate);
      materialInfo.type = data.type;
      // materialInfo.length = data.length,
      materialInfo.jobTypeId = parseInt(data.jobTypeId);
      materialInfo.jobStatus = "1";
      materialInfo.inspection = data.inspection;
      materialInfo.cleaning = parseInt(data.cleaning);
      materialInfo.printing = parseInt(data.printing);
      materialInfoArray.push(materialInfo);
    });

    await prisma.materialInwardDetails.createMany({
      data: materialInfoArray,
    });

    let response = {
      status: STATUS_CODE.CREATED_CODE,
      message: "Material Inward has been updated successfully",
      data: [],
    };
    return response;
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const remove = async (data: any) => {
  try {
    let deleteData = await prisma.materialInward.findFirst({
      where: {
        id: parseInt(data.materialInwardId),
      },
    });

    let filePath = __uploadDir + "/inwardMaterials/" + deleteData?.dcImage;

    if (fs.existsSync(filePath)) {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Failed to delete file: ${err.message}`);
        }
      });
    }

    await prisma.materialInwardDetails.deleteMany({
      where: {
        materialInwardId: parseInt(data.materialInwardId),
      },
    });

    await prisma.materialInward.delete({
      where: {
        id: parseInt(data.materialInwardId),
      },
    });

    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Material Inward has been Removed successfully",
      data: [],
    };
    return response;
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const getJobsDetails = async (query: any) => {
  try {
    const page = query?.page ? parseInt(query?.page) : 1;
    const limit = query?.limit ? parseInt(query?.limit) : 10;

    const jobs = await prisma.materialInwardDetails.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        jobStatus: {
          in: ["1", "2"],
        },
        cleaning : {
          in : [2,3]
        }
      },
      include: {
        materialInward: {
          include : {
            client: true,
          }
        },
        jobType: true,
      },
    });
    const count: number = await prisma.materialInwardDetails.count({
      where: {
        jobStatus: {
          in: ["1", "2"],
        },
        cleaning : {
          in : [2,3]
        }
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Jobs has been fetched successfully",
      data: { jobs, count },
    };
    return response;
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const assignJobDetails = async (data: any) => {
  try {
    let job = await prisma.materialInwardDetails.findFirst({
      where: {
        id: data.id,
      },
    });

    let totalQty = job?.quantity || 0;

    let materialProduction = await prisma.materialProduction.findMany({
      where: {
        MaterialInwardDetailsId: data.id,
      },
    });

    let productionQty: number = 0;

    materialProduction?.forEach((production: any) => {
      productionQty += production?.receivedQty;
    });
    let remainQty = totalQty - productionQty;
    productionQty = productionQty + parseInt(data.receivedQty);

    if (totalQty >= productionQty) {
      await prisma.materialProduction.create({
        data: {
          date : data.date,
          MaterialInwardDetailsId : data.id,
          assignedShift : parseInt(data.assignedShift),
          assignedFloor : parseInt(data.assignedFloor),
          receivedQty: parseInt(data.receivedQty),
          shiftIncharge: parseInt(data.shiftIncharge),
          status: 1,
        },
        select: {
          id: true,
        },
      });

      await prisma.materialInwardDetails.update({
        where: {
          id: data.id,
        },
        data: {
          jobStatus: "2",
        },
      });

      let response = {
        status: STATUS_CODE.CREATED_CODE,
        message: "Job has been assigned successfully",
        data: [],
      };
      return response;
    } else {
      let response = {
        status: STATUS_CODE.BAD_REQUEST_CODE,
        message: RESPONSE_MESSAGE.VALIDATION_ERROR,
        data: [`Remain Quantuty is - ${remainQty}`],
      };
      return response;
    }
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const getProductionDetails = async (query: any) => {
  try {
    const page = query?.page ? parseInt(query?.page) : 1;
    const limit = query?.limit ? parseInt(query?.limit) : 10;
    const productionDate = query?.productionDate;
    const shift = query?.shift;
    const floor = query?.floor;
    const incharge = query?.incharge ? parseInt(query?.incharge) : 0;

    let where: any = {};

    if (productionDate) {
      where.date = productionDate;
    }

    if (shift) {
      where.assignedShift = shift;
    }

    if (floor) {
      where.assignedFloor = floor;
    }

    if (incharge) {
      where.shiftIncharge = incharge;
    }

    const production = await prisma.materialProduction.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        status: { not: 2 },
        ...where,
      },
      include: {
        jobExpenses :true,
        materialInwardDetails: {
          include: {
            jobType: true,
            materialInward: {
              include : {
                client:true
              }
            },
          },
        },
        user : true,
        shift :true,
        floor:true
      },
    });

    const count: number = await prisma.materialProduction.count({
      where: {
        status: { not: 2 },
        ...where,
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Production has been fetched successfully",
      data: { production, count },
    };
    return response;
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const assignFilingDetails = async (data: any) => {
  try {
   
    let jobexpense = await prisma.jobExpenses.findMany({
      where: {
        materialProductionId: data.materialProductionId,
      },
    });
    if(jobexpense && jobexpense?.length == 0){
      let response = {
        status: STATUS_CODE.BAD_REQUEST_CODE,
        message: RESPONSE_MESSAGE.VALIDATION_ERROR,
        data: [`please enter starting level Qty in production tab `],
      };
      return response;
    }

    let job = await prisma.materialInwardDetails.findFirst({
      where: {
        id: data.id,
      },
    });

    let totalQty = job?.quantity || 0;

    let materialProduction = await prisma.materialProduction.findMany({
      where: {
        MaterialInwardDetailsId: data.id,
      },
    });

    let productionQty: number = 0;

    materialProduction?.forEach((production: any) => {
      productionQty += production?.completedQty;
    });

    productionQty = productionQty + parseInt(data.completedQty);

    let materialProd = await prisma.materialProduction.findFirst({
      where: {
        id: data.materialProductionId,
      },
    });

    let recQty = materialProd?.receivedQty || 0;
    let alreadyCompletedQty = materialProd?.completedQty || 0;
    let completedQty = data?.completedQty ? parseInt(data?.completedQty) : 0;
    completedQty = alreadyCompletedQty + completedQty;

    if (recQty >= completedQty) {
      let where: any = {};
      if (recQty == completedQty) {
        where.status = 2;
      }
      await prisma.materialProduction.update({
        where: {
          id: parseInt(data.materialProductionId),
        },
        data: {
          completedQty: parseInt(data.completedQty),
          remarks: data.remarks,
          ...where,
        },
        select: {
          id: true,
        },
      });

      await prisma.materialFiling.create({
        data: {
          MaterialInwardDetailsId: parseInt(data.id),
          receivedQty: parseInt(data.completedQty),
          date: data.date,
          assignedFloor: data.assignedFloor,
          assignedShift: data.assignedShift,
          shiftIncharge: parseInt(data.shiftIncharge),
          status: 1,
        },
        select: {
          id: true,
        },
      });
      
      data.jobTypeMaterial.forEach(async(element:any) => {
        await prisma.jobExpenses.updateMany({
          where: {
            materrialId: parseInt(element?.name),
            materialInwardDetailsId : parseInt(data.id),
            materialProductionId : parseInt(data.materialProductionId)
          },
          data: {
            usedQty: parseInt(element.cqty), 
          },
        });
        
      });

      if (productionQty == totalQty) {
        await prisma.materialInwardDetails.update({
          where: {
            id: data.id,
          },
          data: {
            jobStatus: "3",
          },
        });
      }

      let response = {
        status: STATUS_CODE.CREATED_CODE,
        message: "Job has been assigned successfully",
        data: [],
      };
      return response;
    } else {
      let response = {
        status: STATUS_CODE.BAD_REQUEST_CODE,
        message: RESPONSE_MESSAGE.VALIDATION_ERROR,
        data: [`Completed Qty is more than received qty`],
      };
      return response;
    }
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const forwardJobDetails = async (data: any) => {
  try {
    let productionDetails = await prisma.materialProduction.findFirst({
      where: {
        id: parseInt(data.materialProductionId),
      },
    });

    let receivedQty = productionDetails?.receivedQty || 0;
    let completedQty = productionDetails?.completedQty || 0;

    let remainQty = receivedQty - completedQty;
    let forwardQty = parseInt(data.receivedQty);

    if (remainQty >= forwardQty && productionDetails?.status == 1) {
      await prisma.materialProduction.update({
        where: {
          id: parseInt(data.materialProductionId),
        },
        data: {
          status: 2,
        },
      });

      await prisma.materialProduction.create({
        data: {
          MaterialInwardDetailsId: parseInt(data.materialInwardId),
          receivedQty: parseInt(data.receivedQty),
          date: data.date,
          assignedFloor: parseInt(data.assignedFloor),
          assignedShift: parseInt(data.assignedShift),
          shiftIncharge: parseInt(data.shiftIncharge),
          status: 1,
        },
        select: {
          id: true,
        },
      });

      let response = {
        status: STATUS_CODE.CREATED_CODE,
        message: "Job has been Forwarded successfully",
        data: [],
      };
      return response;
    } else {
      let response = {
        status: STATUS_CODE.BAD_REQUEST_CODE,
        message: RESPONSE_MESSAGE.VALIDATION_ERROR,
        data: [`Forward Qty is more than received qty`],
      };
      return response;
    }
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const getFilingDetails = async (query: any) => {
  try {
    const page = query?.page ? parseInt(query?.page) : 1;
    const limit = query?.limit ? parseInt(query?.limit) : 10;
    const productionDate = query?.productionDate;
    const shift = query?.shift;
    const floor = query?.floor;
    const incharge = query?.incharge ? parseInt(query?.incharge) : 0;

    let where: any = {};

    if (productionDate) {
      where.date = productionDate;
    }

    if (shift) {
      where.assignedShift = shift;
    }

    if (floor) {
      where.assignedFloor = floor;
    }

    if (incharge) {
      where.shiftIncharge = incharge;
    }

  
  const filing = await prisma.materialFiling.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        status: { not: 2 },
        ...where,
      },
      include: {
        materialInwardDetails: {
          include: {
            jobType: true,
            materialInward: {
              include : {
                client:true
              }
            },
          },
        },
      },
    });

    const count: number = await prisma.materialFiling.count({
      where: {
        status: { not: 2 },
        ...where,
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Filing has been fetched successfully",
      data: { filing , count },
    };
    return response;
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const toDispatchDetails = async (data: any) => {
  try {
    let job = await prisma.materialInwardDetails.findFirst({
      where: {
        id: data.id,
      },
    });

    let totalQty = job?.quantity || 0;

    let materialFiling = await prisma.materialFiling.findMany({
      where: {
        MaterialInwardDetailsId: data.id,
      },
    });

    let filingQty: number = 0;

    materialFiling?.forEach((filing: any) => {
      filingQty += filing?.completedQty;
    });

    filingQty = filingQty + parseInt(data.completedQty);

    let materialFil = await prisma.materialFiling.findFirst({
      where: {
        id: data.materialFilingId,
      },
    });

    let recQty = materialFil?.receivedQty || 0;
    let alreadyCompletedQty = materialFil?.completedQty || 0;
    let completedQty = data?.completedQty ? parseInt(data?.completedQty) : 0;
    completedQty = alreadyCompletedQty + completedQty;

    if (recQty >= completedQty) {
      let where: any = {};
      if (recQty == completedQty) {
        where.status = 2;
      }
      await prisma.materialFiling.update({
        where: {
          id: parseInt(data.materialFilingId),
        },
        data: {
          completedQty: parseInt(data.completedQty),
          remarks: data.remarks,
          status : 2,
          ...where,
        },
        select: {
          id: true,
        },
      });

      await prisma.materialDispatch.create({
        data:{
         receivedQty : parseInt(data.completedQty),
         MaterialInwardDetailsId: data.id,
        }
      })

      if (filingQty == totalQty) {
        await prisma.materialInwardDetails.update({
          where: {
            id: data.id,
          },
          data: {
            jobStatus: "4",
          },
        });
      }

      let response = {
        status: STATUS_CODE.CREATED_CODE,
        message: "Job has been assigned successfully",
        data: [],
      };
      return response;
    } else {
      let response = {
        status: STATUS_CODE.BAD_REQUEST_CODE,
        message: RESPONSE_MESSAGE.VALIDATION_ERROR,
        data: [`Completed Qty is more than received qty`],
      };
      return response;
    }
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const forwardFilingDetails = async (data: any) => {
  try {
    let filingDetails = await prisma.materialFiling.findFirst({
      where: {
        id: parseInt(data.materialFilingId),
      },
    });

    let receivedQty = filingDetails?.receivedQty || 0;
    let completedQty = filingDetails?.completedQty || 0;

    let remainQty = receivedQty - completedQty;
    let forwardQty = parseInt(data.receivedQty);

    if (remainQty >= forwardQty && filingDetails?.status == 1) {
      await prisma.materialFiling.update({
        where: {
          id: parseInt(data.materialFilingId),
        },
        data: {
          status: 2,
        },
      });

      await prisma.materialFiling.create({
        data: {
          MaterialInwardDetailsId: parseInt(data.materialInwardId),
          receivedQty: parseInt(data.receivedQty),
          date: data.date,
          assignedFloor: data.assignedFloor,
          assignedShift: data.assignedShift,
          shiftIncharge: parseInt(data.shiftIncharge),
          status: 1,
        },
        select: {
          id: true,
        },
      });

      let response = {
        status: STATUS_CODE.CREATED_CODE,
        message: "Filing has been Forwarded successfully",
        data: [],
      };
      return response;
    } else {
      let response = {
        status: STATUS_CODE.BAD_REQUEST_CODE,
        message: RESPONSE_MESSAGE.VALIDATION_ERROR,
        data: [`Forward Qty is more than received qty`],
      };
      return response;
    }
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const getDispatchDetails = async (query: any) => {
  try {
    const page = query?.page ? parseInt(query?.page) : 1;
    const limit = query?.limit ? parseInt(query?.limit) : 10;

    const dispatch = await prisma.materialDispatch.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        materialInwardDetails: {
          include: {
              jobType: true,
              materialInward : {
                 include : {
                   client :true
                 }
              }
          }
        }
      },
    });

    const count: number = await prisma.materialDispatch.count();
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Dispatch has been fetched successfully",
      data: { dispatch, count },
    };
    return response;
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const getDashboardDetails = async (query: any) => {
  try {

    const jobCount: number = await prisma.materialInwardDetails.count({
      where: {
        jobStatus: {
          in: ["1","2", "3"],
        },
      },
    });

    const client = await prisma.materialInwardDetails.groupBy({
      by: ['materialInwardId'],
      _count: {
        id: true, 
      },
      where: {
        jobStatus: {
          in: ["1", "2", "3"],
        },
      },
    });

    const clientCount = client.reduce((acc, group:any) => acc + group._count.id, 0);

    const totals = await prisma.materialInwardDetails.aggregate({
      _sum: {
        quantity: true,
      },
      where: {
        jobStatus: {
          in: [ "2", "3"],
        },
      },
    });

    const totalQuantity = totals._sum.quantity;

    const productionCount: number = await prisma.materialProduction.count({
      where: {
        status: {
          in: [1],
        },
      },
    });

    const filingCount: number = await prisma.materialFiling.count({
      where: {
        status: {
          in: [1],
        },
      },
    });
    
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Dashboard details has been fetched successfully",
      data: {
        jobCount,
        productionCount,
        clientCount,
        totalQuantity,
        filingCount,
      },
    };
    return response;
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const getCeaningDetails = async (query: any) => {
  try {
    const page = query?.page ? parseInt(query?.page) : 1;
    const limit = query?.limit ? parseInt(query?.limit) : 10;

    const cleaning = await prisma.materialInwardDetails.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        cleaning: 1,
      },
      include: {
        materialInward: {
          include : {
            client: true,
          }
        },
        jobType: true,
      },
    });
    const count: number = await prisma.materialInwardDetails.count({
      where: {
        cleaning: 1,
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Cleaning details has been fetched successfully",
      data: { cleaning, count },
    };
    return response;
  } catch (errors) {
    console.log("err", errors);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
};

const updateCeaningDetails = async (data:any)=>{
  try{
    await prisma.materialInwardDetails.update({
      where : {
         id : data.id
      },
      data : {
        cleaning : 2
      }
    })
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Cleaning details has been updated successfully",
      data: [],
    };
    return response;
  }catch(e){
    console.log("err", e);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
}

const updateDispatchDetails = async (data:any)=>{
  try{
    await prisma.materialDispatch.update({
      where : {
         id : data.id
      },
      data : {
        status : 2,
        invoiceNo : data.invoiceNo,
        invoiceDate : data.invoiceDate,
        invoiceAmount : data.invoiceAmount,
      }
    })
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Dispatch details has been updated successfully",
      data: [],
    };
    return response;
  }catch(e){
    console.log("err", e);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
}

const updateProductionDetails = async (data:any)=>{
  try{
    let material = data.jobTypeMaterial
    let materialInfo:any = []

    await prisma.jobExpenses.deleteMany({
      where :{
        materialProductionId : data.materialProductionId
      } 
    });

    material.forEach((element:any) => {
      let materialData:any = {}
      materialData.materrialId = parseInt(element.name)
      materialData.expectedQty = parseInt(element.qty)
      materialData.materialInwardDetailsId = data.id
      materialData.displayName = element.displayName
      materialData.materialProductionId = data.materialProductionId
      materialInfo.push(materialData)
    });

    await prisma.jobExpenses.createMany({
      data: materialInfo
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Production details has been updated successfully",
      data: [],
    };
    return response;
  }catch(e){
    console.log("err", e);
    let error = {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    };
    return error;
  }
}





export {
  create,
  get,
  update,
  remove,
  getJobsDetails,
  assignJobDetails,
  getProductionDetails,
  assignFilingDetails,
  forwardJobDetails,
  getFilingDetails,
  toDispatchDetails,
  forwardFilingDetails,
  getDispatchDetails,
  getDashboardDetails,
  getCeaningDetails,
  updateCeaningDetails,
  updateDispatchDetails,
  updateProductionDetails
};
