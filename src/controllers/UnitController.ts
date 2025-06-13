import { Request, Response } from "express";
import { createUnit, fetchUnit, updateUnit as updateUnitService, removeUnit as removeUnitService } from '../services/UnitService';
import { sendResponse } from '../utils/handleResponse';
import { STATUS_CODE, RESPONSE_MESSAGE } from "../utils/constants/ResponseStatus";

// Handler to create a new unit
export const addUnit = async (request: Request, response: Response): Promise<Response> => {
    try {
        const inputs = request.body;
        const data = await createUnit(inputs);
        return sendResponse(request, response, data);
    } catch (e) {
        return sendResponse(request, response, {
            status: STATUS_CODE.SERVER_ERROR_CODE,
            message: RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
};

// Handler to fetch units
export const getUnit = async (request: Request, response: Response): Promise<Response> => {
    try {
        const query = request.query;
        const data = await fetchUnit(query);
        return sendResponse(request, response, data);
    } catch (e) {
        return sendResponse(request, response, {
            status: STATUS_CODE.SERVER_ERROR_CODE,
            message: RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
};

// Handler to update a unit
export const updateUnit = async (request: Request, response: Response): Promise<Response> => {
    try {
        const inputs = request.body;
        const data = await updateUnitService(inputs);
        return sendResponse(request, response, data);
    } catch (e) {
        return sendResponse(request, response, {
            status: STATUS_CODE.SERVER_ERROR_CODE,
            message: RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
};

// Handler to remove a unit
export const removeUnit = async (request: Request, response: Response): Promise<Response> => {
    try {
        const inputs = request.body;
        const data = await removeUnitService(inputs);
        return sendResponse(request, response, data);
    } catch (e) {
        return sendResponse(request, response, {
            status: STATUS_CODE.SERVER_ERROR_CODE,
            message: RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
};
