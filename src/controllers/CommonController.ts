import { Request, Response } from "express";
import { sendResponse } from "../utils/handleResponse";
import {
  STATUS_CODE,
  RESPONSE_MESSAGE,
} from "../utils/constants/ResponseStatus";
import {
  fetchJobType,
  addShiftDetails,
  getShiftDetails,
  updateShiftDetails,
  removeShiftDetails,
  addFloorDetails,
  getFloorDetails,
  updateFloorDetails,
  removeFloorDetails,
  getInchargeDetails,
  getAllFloorDetails,
  getAllShiftDetails,
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
} from "../services/CommonService";

const getJobType = async (request: Request, response: Response) => {
  try {
    let data = await fetchJobType();
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const addShift = async (request: Request, response: Response) => {
  try {
    let inputs = request.body;
    let data = await addShiftDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};
const getShift = async (request: Request, response: Response) => {
  try {
    let inputs = request.query;
    let data = await getShiftDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const updateShift = async (request: Request, response: Response) => {
  try {
    let inputs = request.body;
    let data = await updateShiftDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const removeShift = async (request: Request, response: Response) => {
  try {
    let inputs = request.body;
    let data = await removeShiftDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const addFloor = async (request: Request, response: Response) => {
  try {
    let inputs = request.body;
    let data = await addFloorDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const getFloor = async (request: Request, response: Response) => {
  try {
    let inputs = request.query;
    let data = await getFloorDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const updateFloor = async (request: Request, response: Response) => {
  try {
    let inputs = request.body;
    let data = await updateFloorDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const removeFloor = async (request: Request, response: Response) => {
  try {
    let inputs = request.body;
    let data = await removeFloorDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const getIncharge = async (request: Request, response: Response) => {
  try {
    let inputs = request.query;
    let data = await getInchargeDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const getAllFloor = async (request: Request, response: Response) => {
  try {
    let data = await getAllFloorDetails();
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const getAllShift = async (request: Request, response: Response) => {
  try {
    let data = await getAllShiftDetails();
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const addRole = async (request: Request, response: Response) => {
  try {
    let inputs = request.body;
    let data = await addRoleDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const getRole = async (request: Request, response: Response) => {
  try {
    let inputs = request.query;
    let data = await getRoleDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const getAllRole = async (request: Request, response: Response) => {
  try {
    let data = await getAllRoleDetails();
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const updateRole = async (request: Request, response: Response) => {
  try {
    let inputs = request.body;
    let data = await updateRoleDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const addUser = async (request: Request, response: Response) => {
  try {
    let inputs = request.body;
    let data = await addUserDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const getUser = async (request: Request, response: Response) => {
  try {
    let inputs = request.query;
    let data = await getUserDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const updateUser = async (request: Request, response: Response) => {
  try {
    let inputs = request.body;
    let data = await updateUserDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const removeUser = async (request: Request, response: Response) => {
  try {
    let inputs = request.body;
    let data = await removeUserDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const getAllUnit = async (request: Request, response: Response) => {
  try {
    let data = await getAllUnitDetails();
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const getAllMaterial = async (request: Request, response: Response) => {
  try {
    let data = await getAllMaterialDetails();
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const addJobTypeMaterial = async (request: Request, response: Response) => {
  try {
    let inputs = request.body;
    let data = await addJobTypeMaterialDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const updateJobTypeMaterial = async (request: Request, response: Response) => {
  try {
    let inputs = request.body;
    let data = await updateJobTypeMaterialDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const getJobTypeMaterial = async (request: Request, response: Response) => {
  try {
    let inputs = request.query;
    let data = await getJobTypeMaterialDetails(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    console.log("e", e);
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR,
    });
  }
};

const addInventory = async (request: Request, response: Response) => {
    try {
      let inputs = request.body;
      let data = await addInventoryDetails(inputs);
      return sendResponse(request, response, data);
    } catch (e) {
      return sendResponse(request, response, {
        status: STATUS_CODE.SERVER_ERROR_CODE,
        message: RESPONSE_MESSAGE.INTERNAL_ERROR,
      });
    }
  };
  
  const updateInventory = async (request: Request, response: Response) => {
    try {
      let inputs = request.body;
      let data = await updateInventoryDetails(inputs);
      return sendResponse(request, response, data);
    } catch (e) {
      return sendResponse(request, response, {
        status: STATUS_CODE.SERVER_ERROR_CODE,
        message: RESPONSE_MESSAGE.INTERNAL_ERROR,
      });
    }
  };
  
  const getInventory = async (request: Request, response: Response) => {
    try {
      let inputs = request.query;
      let data = await getInventoryDetails(inputs);
      return sendResponse(request, response, data);
    } catch (e) {
      console.log("e", e);
      return sendResponse(request, response, {
        status: STATUS_CODE.SERVER_ERROR_CODE,
        message: RESPONSE_MESSAGE.INTERNAL_ERROR,
      });
    }
  };

  const getJobTypeMaterialList = async (request: Request, response: Response) => {
    try {
      let inputs = request.query;
      let data = await getJobTypeMaterialListDetails(inputs);
      return sendResponse(request, response, data);
    } catch (e) {
      console.log("e", e);
      return sendResponse(request, response, {
        status: STATUS_CODE.SERVER_ERROR_CODE,
        message: RESPONSE_MESSAGE.INTERNAL_ERROR,
      });
    }
  };

  const getJobTypeMaterialDataList = async (request: Request, response: Response) => {
    try {
      let inputs = request.query;
      let data = await getJobTypeMaterialDataListDetails(inputs);
      return sendResponse(request, response, data);
    } catch (e) {
      console.log("e", e);
      return sendResponse(request, response, {
        status: STATUS_CODE.SERVER_ERROR_CODE,
        message: RESPONSE_MESSAGE.INTERNAL_ERROR,
      });
    }
  };

  const getAllClient = async (request: Request, response: Response) => {
    try {
      let data = await getAllClientDetails();
      return sendResponse(request, response, data);
    } catch (e) {
      console.log("e", e);
      return sendResponse(request, response, {
        status: STATUS_CODE.SERVER_ERROR_CODE,
        message: RESPONSE_MESSAGE.INTERNAL_ERROR,
      });
    }
  };

  const getDashboardJob = async (request: Request, response: Response) => {
    try {
      let inputs = request.query;
      let data = await getDashboardJobDetails(inputs);
      return sendResponse(request, response, data);
    } catch (e) {
      console.log("e", e);
      return sendResponse(request, response, {
        status: STATUS_CODE.SERVER_ERROR_CODE,
        message: RESPONSE_MESSAGE.INTERNAL_ERROR,
      });
    }
  };
  

export {
  getJobType,
  addShift,
  getShift,
  updateShift,
  removeShift,
  addFloor,
  getFloor,
  updateFloor,
  removeFloor,
  getIncharge,
  getAllFloor,
  getAllShift,
  addRole,
  updateRole,
  getRole,
  getAllRole,
  addUser,
  getUser,
  updateUser,
  removeUser,
  getAllUnit,
  getAllMaterial,
  addJobTypeMaterial,
  updateJobTypeMaterial,
  getJobTypeMaterial,
  addInventory,
  updateInventory,
  getInventory,
  getJobTypeMaterialList,
  getJobTypeMaterialDataList,
  getAllClient,
  getDashboardJob
};
