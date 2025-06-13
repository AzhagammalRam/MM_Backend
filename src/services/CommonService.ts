import { prisma } from "../prisma/lib";
import {
  STATUS_CODE,
  RESPONSE_MESSAGE,
} from "../utils/constants/ResponseStatus";
import bcrypt from "bcrypt";

const fetchJobType = async () => {
  try {
    const job = await prisma.jobType.findMany();
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Job type has been fetched successfully",
      data: { job },
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

const addShiftDetails = async (inputs: any) => {
  try {
    await prisma.shift.create({
      data: inputs,
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Shift has been Added successfully",
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

const getShiftDetails = async (query: any) => {
  try {
    const page = query?.page ? parseInt(query?.page) : 1;
    const limit = query?.limit ? parseInt(query?.limit) : 10;
    const shift = await prisma.shift.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    const count = await prisma.shift.count();
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Shift has been fetched successfully",
      data: { shift, count },
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

const getAllShiftDetails = async () => {
  try {
    const shift = await prisma.shift.findMany();
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Shift has been fetched successfully",
      data: shift,
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

const updateShiftDetails = async (inputs: any) => {
  try {
    const shift = await prisma.shift.update({
      where: {
        id: parseInt(inputs.id),
      },
      data: {
        name: inputs.name,
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Shift has been updated successfully",
      data: shift,
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

const removeShiftDetails = async (inputs: any) => {
  try {
    await prisma.shift.delete({
      where: {
        id: parseInt(inputs.id),
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Shift has been removed successfully",
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

const addFloorDetails = async (inputs: any) => {
  try {
    await prisma.floor.create({
      data: inputs,
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Floor has been added successfully",
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

const getFloorDetails = async (query: any) => {
  try {
    const page = query?.page ? parseInt(query?.page) : 1;
    const limit = query?.limit ? parseInt(query?.limit) : 10;
    const floor = await prisma.floor.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
    const count = await prisma.floor.count();
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Floor has been fetched successfully",
      data: { floor, count },
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

const getAllFloorDetails = async () => {
  try {
    const floor = await prisma.floor.findMany();
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Floor has been fetched successfully",
      data: floor,
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

const updateFloorDetails = async (inputs: any) => {
  try {
    const floor = await prisma.floor.update({
      where: {
        id: parseInt(inputs.id),
      },
      data: {
        name: inputs.name,
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Floor has been updated successfully",
      data: floor,
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

const removeFloorDetails = async (inputs: any) => {
  try {
    await prisma.floor.delete({
      where: {
        id: parseInt(inputs.id),
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Floor has been removed successfully",
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

const getInchargeDetails = async (query: any) => {
  try {
    let shift = query?.shift ? query?.shift : "";
    let where: any = {};
    if (shift) {
      where.shiftId = parseInt(shift);
    }
    const incharge = await prisma.user.findMany({
      where: {
        roleId: {
          in : [2,3]
        },
        ...where,
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Incharge has been fetched successfully",
      data: incharge,
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

const addRoleDetails = async (inputs: any) => {
  try {
    await prisma.role.create({
      data: inputs,
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Floor has been added successfully",
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

const getRoleDetails = async (query: any) => {
  try {
    const page = query?.page ? parseInt(query?.page) : 1;
    const limit = query?.limit ? parseInt(query?.limit) : 10;
    const role = await prisma.role.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
    const count = await prisma.role.count();
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Floor has been fetched successfully",
      data: { role, count },
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

const getAllRoleDetails = async () => {
  try {
    const role = await prisma.role.findMany();
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Floor has been fetched successfully",
      data: role,
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

const updateRoleDetails = async (inputs: any) => {
  try {
    const role = await prisma.role.update({
      where: {
        id: parseInt(inputs.id),
      },
      data: {
        name: inputs.name,
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Floor has been updated successfully",
      data: role,
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

const addUserDetails = async (inputs: any) => {
  try {
    inputs.password = await bcrypt.hash(inputs.password, 8);
    await prisma.user.create({
      data: {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        password: inputs.password,
        roleId: parseInt(inputs.role),
        shiftId: parseInt(inputs.shiftId),
        floorId: parseInt(inputs.floorId),
        status: true,
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "User has been added successfully",
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

const getUserDetails = async (query: any) => {
  try {
    const page = query?.page ? parseInt(query?.page) : 1;
    const limit = query?.limit ? parseInt(query?.limit) : 10;
    const user = await prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        role: true,
        shift: true,
        floor: true,
      },
    });
    const count = await prisma.user.count();
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "User has been fetched successfully",
      data: { user, count },
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

const updateUserDetails = async (inputs: any) => {
  try {
    inputs.password = await bcrypt.hash(inputs.password, 8);
    await prisma.user.update({
      where: {
        id: parseInt(inputs.id),
      },
      data: {
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email,
        password: inputs.password,
        roleId: parseInt(inputs.role),
        shiftId: parseInt(inputs.shiftId),
        floorId: parseInt(inputs.floorId),
        status: true,
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "User has been updated successfully",
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

const removeUserDetails = async (inputs: any) => {
  try {
    await prisma.user.delete({
      where: {
        id: parseInt(inputs.id),
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "User has been removed successfully",
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

const getAllUnitDetails = async () => {
  try {
    const unit = await prisma.unit.findMany();
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Unit has been fetched successfully",
      data: unit,
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

const getAllMaterialDetails = async () => {
  try {
    const material = await prisma.material.findMany();
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Material has been fetched successfully",
      data: material,
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

const addJobTypeMaterialDetails = async (inputs: any) => {
  try {
    await prisma.jobtypeMaterial.create({
      data: {
        jobTypeId: inputs.jobTypeId,
        materialId: inputs.materialId,
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Job type material has been added successfully",
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

const updateJobTypeMaterialDetails = async (inputs: any) => {
  try {
    await prisma.jobtypeMaterial.update({
      where: {
        id: inputs.id,
      },
      data: {
        jobTypeId: inputs.jobTypeId,
        materialId: inputs.materialId,
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Job type material has been updated successfully",
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

const getJobTypeMaterialDetails = async (query: any) => {
  try {
      const page = query?.page ? parseInt(query?.page) : 1;
      const limit = query?.limit ? parseInt(query?.limit) : 10;
      const offset = (page - 1) * limit;
     
    const countData = await prisma.$queryRaw`
                    SELECT
                      COUNT(DISTINCT "jtm"."id") as totalRecords
                    FROM
                      "jobtype_material" "jtm"
                    JOIN
                      "job_types" "jt" ON "jt"."id" = "jtm"."jobTypeId"::integer
                    JOIN
                      "material" "m" ON "m"."id" = ANY(string_to_array("jtm"."materialId", ',')::integer[])
                  `;

    const resultData = await prisma.$queryRaw`
                SELECT
                  "jtm"."id" as jobTypeMaterialId,
                  "jt"."name" as jobTypeName,
                  string_agg("m"."name", ', ') as materialNames,
                  "jtm"."jobTypeId" as jobTypeId,
                  "jtm"."materialId" as materialId
                FROM
                  "jobtype_material" "jtm"
                JOIN
                  "job_types" "jt" ON "jt"."id" = "jtm"."jobTypeId"::integer
                JOIN
                  "material" "m" ON "m"."id" = ANY(string_to_array("jtm"."materialId", ',')::integer[])
                GROUP BY
                  "jtm"."id", "jt"."name"
                  LIMIT ${limit} OFFSET ${offset}
                `;

    function serializeData(data: any) {
      return JSON.stringify(data, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      );
    }

    // Serialize the data
    const count = parseInt(
      JSON.parse(serializeData(countData))[0].totalrecords
    );
    const result = JSON.parse(serializeData(resultData));

    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Job type material has been fetched successfully",
      data: { result, count },
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

const addInventoryDetails = async (inputs: any) => {
  try {
    await prisma.inventory.create({
      data: {
        materialId: parseInt(inputs.materialId),
        qty: parseInt(inputs.qty),
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Inventory has been added successfully",
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

const updateInventoryDetails = async (inputs: any) => {
  try {
    await prisma.inventory.update({
      where : {
        id : parseInt(inputs.id)
      },
      data: {
        materialId: parseInt(inputs.materialId),
        qty: parseInt(inputs.qty),
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Inventory has been Updated successfully",
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

const getInventoryDetails = async (query: any) => {
  try {
    const page = query?.page ? parseInt(query?.page) : 1;
    const limit = query?.limit ? parseInt(query?.limit) : 10;
    const inventory = await prisma.inventory.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        material: true,
      },
    });
    const count = await prisma.user.count();
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Inventory has been fetched successfully",
      data: { inventory, count },
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

const getJobTypeMaterialListDetails = async (query: any) => {
  try {
    const id = query?.id 
    
    const jobTypeMaterial = await prisma.jobtypeMaterial.findFirst({
      where: {
        jobTypeId: id,
      },
    });
    const materialId = jobTypeMaterial?.materialId.split(',').map((id:any)=> parseInt(id))
    const material = await prisma.material.findMany({
      where: {
        id: {
          in : materialId
        } 
      },
    });
    
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Data has been fetched successfully",
      data: material,
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

const getJobTypeMaterialDataListDetails = async (query: any) => {
  try {
    const id = query?.id 
    const jobTypeMaterial = await prisma.jobExpenses.findMany({
      where: {
        materialInwardDetailsId: parseInt(id),
      },
    });
    
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Data has been fetched successfully",
      data: jobTypeMaterial,
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

const getAllClientDetails = async()=>{
   try{
      const client = await prisma.client.findMany();
      
      let response = {
        status: STATUS_CODE.SUCCESS_CODE,
        message: "Client has been fetched successfully",
        data: client,
      };
      return response;
   }catch(errors){
      console.log("err", errors);
      let error = {
        status: STATUS_CODE.SERVER_ERROR_CODE,
        message: RESPONSE_MESSAGE.INTERNAL_ERROR,
      };
      return error;
   }
}

const getDashboardJobDetails = async(query:any)=>{
  try{
    const page = query?.page ? parseInt(query?.page) : 1;
    const limit = query?.limit ? parseInt(query?.limit) : 10;
    const client = query?.client;
    const process = query?.process ? parseInt(query?.process) : 0;
    const startDate = query?.startDate;
    const endDate = query?.endDate;

    let where: any = {};

    // if (client) {
    //   where.clientId = client;
    // }

    if (process) {
      where.jobTypeId = process;
    }

    if (startDate && endDate) {
      where.receivedDate = {
        gte: new Date(startDate), 
        lte: new Date(endDate),  
      };
    } else if (startDate) {
      where.receivedDate = {
        gte: new Date(startDate),
      };
    } else if (endDate) {
      where.receivedDate = {
        lte: new Date(endDate),
      };
    }

    const dashboardJob = await prisma.materialInwardDetails.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        ...where, 
        materialInward: client ? {
          clientId: parseInt(client)
        } : undefined,
      },
      include: {
        materialInward: {
          include: {
            client: true, 
          },
        },
        jobType: true, 
      },
    });

    const count: number = await prisma.materialInwardDetails.count({
      where: {
        ...where,
        materialInward: client ? {
          clientId: parseInt(client)
        } : undefined,
      },
    });
    let response = {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Job has been fetched successfully",
      data: { dashboardJob , count },
    };
    return response;
  }catch(errors){
     console.log("err", errors);
     let error = {
       status: STATUS_CODE.SERVER_ERROR_CODE,
       message: RESPONSE_MESSAGE.INTERNAL_ERROR,
     };
     return error;
  }
}


export {
  fetchJobType,
  addShiftDetails,
  getShiftDetails,
  updateShiftDetails,
  removeShiftDetails,
  addFloorDetails,
  getFloorDetails,
  updateFloorDetails,
  removeFloorDetails,
  getAllShiftDetails,
  getAllFloorDetails,
  getInchargeDetails,
  updateRoleDetails,
  getAllRoleDetails,
  getRoleDetails,
  addRoleDetails,
  addUserDetails,
  getUserDetails,
  updateUserDetails,
  removeUserDetails,
  getAllUnitDetails,
  getAllMaterialDetails,
  addJobTypeMaterialDetails,
  updateJobTypeMaterialDetails,
  getJobTypeMaterialDetails,
  addInventoryDetails,
  updateInventoryDetails,
  getInventoryDetails,
  getJobTypeMaterialListDetails,
  getJobTypeMaterialDataListDetails,
  getAllClientDetails,
  getDashboardJobDetails
};
