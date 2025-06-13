import { Request, Response } from "express";
import { 
  createJobType as createJoTypeService, 
  fetchJobTypes as fetchJoTypesService, 
  updateJobType as updateJoTypeService, 
  removeJobType as removeJoTypeService 
} from '../services/JobTypeService';
import { sendResponse } from '../utils/handleResponse';
import { STATUS_CODE, RESPONSE_MESSAGE } from "../utils/constants/ResponseStatus";


export const addJobType = async (request: Request, response: Response): Promise<Response> => {
  try {
    const inputs = request.body;
    const data = await createJoTypeService(inputs);
    return sendResponse(request, response, {status:STATUS_CODE.SUCCESS_CODE,message:"Job type Added successfully",data});
  } catch (e) {
    console.log('e',e)
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR
    });
  }
};


export const getJobTypes = async (request: Request, response: Response): Promise<Response> => {
  try {
    const query = request.query;
    const data = await fetchJoTypesService(query);
    return sendResponse(request, response, data);
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR
    });
  }
};


export const updateJobType = async (request: Request, response: Response): Promise<Response> => {
  try {
    const inputs = request.body;
    const data = await updateJoTypeService(inputs);
    return sendResponse(request, response, {
      status: STATUS_CODE.SUCCESS_CODE,
      message: "Job type updated successfully",
      data
    });
  } catch (e) {
    console.log('err',e)
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR
    });
  }
};


export const removeJobType = async (request: Request, response: Response): Promise<Response> => {
  try {
    const { id } = request.params;
    await removeJoTypeService(parseInt(id));
    return sendResponse(request, response, {
      status: STATUS_CODE.SUCCESS_CODE,
      message: RESPONSE_MESSAGE.SUCCESSFUL_DELETE
    });
  } catch (e) {
    return sendResponse(request, response, {
      status: STATUS_CODE.SERVER_ERROR_CODE,
      message: RESPONSE_MESSAGE.INTERNAL_ERROR
    });
  }
};
