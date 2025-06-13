import { Request, Response } from "express"
import { createClient, fetchClient, update, remove, fetchAllClient } from '../services/ClientService'
import { sendResponse } from '../utils/handleResponse'
import { STATUS_CODE, RESPONSE_MESSAGE } from "../utils/constants/ResponseStatus"


const addClient = async(request:Request, response:Response)=>{
    try{
        let inputs = request.body;
        let data = await createClient(inputs);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const getClient = async(request:Request, response:Response)=>{
    try{
        let query = request.query;
        let data = await fetchClient(query);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const updateClient = async(request:Request, response:Response)=>{
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

const removeClient = async(request:Request, response:Response)=>{
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

const getAllClient = async(request:Request, response:Response)=>{
    try{
        let data = await fetchAllClient();
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}



export { addClient, getClient,updateClient, removeClient ,getAllClient }