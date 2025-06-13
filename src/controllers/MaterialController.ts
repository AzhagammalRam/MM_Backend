import { Request, Response } from "express";
import { createMaterial, fetchMaterials, updateMaterial as updateMaterialService, removeMaterial as removeMaterialService } from '../services/MaterialService';
import { sendResponse } from '../utils/handleResponse';
import { STATUS_CODE, RESPONSE_MESSAGE } from "../utils/constants/ResponseStatus";


export const addMaterial = async (request: Request, response: Response): Promise<Response> => {
  try {
    const inputs = request.body;
    const data = await createMaterial(inputs);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR
    });
  }
};


export const getMaterials = async (request: Request, response: Response): Promise<Response> => {
  try {
    const query = request.query;
    const data = await fetchMaterials(query);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR
    });
  }
};


export const updateMaterial = async (request: Request, response: Response): Promise<Response> => {
  try {
    const inputs = request.body;
    const data = await updateMaterialService(inputs); 
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR
    });
  }
};

// Controller for removing material
export const removeMaterial = async (request: Request, response: Response): Promise<Response> => {
  try {
    const { id } = request.params;
    const data = await removeMaterialService(parseInt(id)); // Use the service function
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR
    });
  }
};
