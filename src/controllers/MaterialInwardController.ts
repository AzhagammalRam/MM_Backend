import { Request, Response } from "express"
import {
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
    updateProductionDetails,
 } from '../services/MaterialInwardService'
import { sendResponse } from '../utils/handleResponse'
import { STATUS_CODE, RESPONSE_MESSAGE } from "../utils/constants/ResponseStatus"


const addMaterialInward = async(request:Request, response:Response)=>{
    try{
        let inputs = request.body;
        // let { files} = await fileUpload('materialInward','dcImage',request,response)
        let data = await create(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const getMaterialInward = async(request:Request, response:Response)=>{
    try{
        let query = request.query;
        let data = await get(query);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const updateMaterialInward = async(request:Request, response:Response)=>{
    try{
        let inputs = request.body;
        let data = await update(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const removeMaterialInward = async(request:Request, response:Response)=>{
    try{
        let inputs = request.body;
        let data = await remove(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}


const getJobs = async(request:Request, response:Response)=>{
    try{
        let query = request.query;
        let data = await getJobsDetails(query);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const getProduction = async(request:Request, response:Response)=>{
    try{
        let query = request.query;
        let data = await getProductionDetails(query);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const assignJob = async (request:Request,response:Response) =>{
    try{
        let inputs = request.body;
        let data = await assignJobDetails(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const assignFiling = async (request:Request,response:Response) =>{
    try{
        let inputs = request.body;
        let data = await assignFilingDetails(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const forwardJob = async (request:Request,response:Response) =>{
    try{
        let inputs = request.body;
        let data = await forwardJobDetails(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const getFiling = async (request:Request,response:Response) =>{
    try{
        let inputs = request.body;
        let data = await getFilingDetails(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const toDispatch = async (request:Request,response:Response) =>{
    try{
        let inputs = request.body;
        let data = await toDispatchDetails(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const forwardFiling = async (request:Request,response:Response) =>{
    try{
        let inputs = request.body;
        let data = await forwardFilingDetails(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const getDispatch = async (request:Request,response:Response) =>{
    try{
        let inputs = request.body;
        let data = await getDispatchDetails(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const getDashboard = async (request:Request,response:Response) =>{
    try{
        let inputs = request.body;
        let data = await getDashboardDetails(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const getCeaningData = async (request:Request,response:Response) =>{
    try{
        let inputs = request.query;
        let data = await getCeaningDetails(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const updateCeaning = async (request:Request,response:Response) =>{
    try{
        let inputs = request.body;
        let data = await updateCeaningDetails(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const updateDispatch = async (request:Request,response:Response) =>{
    try{
        let inputs = request.body;
        let data = await updateDispatchDetails(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const updateProduction = async (request:Request,response:Response) =>{
    try{
        let inputs = request.body;
        let data = await updateProductionDetails(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}



export { 
    addMaterialInward, 
    getMaterialInward,
    updateMaterialInward, 
    removeMaterialInward,getJobs,
    assignJob,
    getProduction,
    assignFiling,
    forwardJob,
    getFiling,
    toDispatch,
    forwardFiling,
    getDispatch,
    getDashboard,
    getCeaningData,
    updateCeaning,
    updateDispatch,
    updateProduction
}