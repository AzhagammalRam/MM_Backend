import { Request, Response } from "express"
import { auth, saveUser } from '../services/AuthService'
import { sendResponse } from '../utils/handleResponse'
import { userValidations, loginValidations } from "../validations/UserValidations"
import { STATUS_CODE, RESPONSE_MESSAGE } from "../utils/constants/ResponseStatus"
import jwt from 'jsonwebtoken';

const login = async(request:Request, response:Response)=>{
    try{
        let inputs = request.body;
        const { error, value, errMsg } =loginValidations(inputs)
        if(error){
           return sendResponse(request,response,{
                status:STATUS_CODE.BAD_REQUEST_CODE,
                message:RESPONSE_MESSAGE.VALIDATION_ERROR,
                data:errMsg
           });
        }
        let data = await auth(value,response);
        return sendResponse(request,response,data);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
} 

const register = async(request:Request, response:Response)=>{
    try{
        let inputs = request.body;
        const { error, value, errMsg } =userValidations(inputs)

        if(error){
            return sendResponse(request,response,{
                status:STATUS_CODE.BAD_REQUEST_CODE,
                message:RESPONSE_MESSAGE.VALIDATION_ERROR,
                data:errMsg
            });
        }
        let res = await saveUser(value);
        return response.send(res);
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}

const verifyToken = async(request:Request, response:Response)=>{
    try{
        const authHeader:any = request.headers.token;
       
        if(authHeader){
            const token = authHeader.split(" ")[1];
            const SECRET = process.env.SECRET_KEY || "job_secret"
            jwt.verify(token, SECRET, (err:any, decoded:any) => {
                if (err) {
                  if (err.name === 'TokenExpiredError') {
                    return response.status(401).json({ message: 'Token expired' });
                  }
                  return response.status(401).json({ message: 'Failed to authenticate token' });
                }
                let data = {
                    user_id : decoded.id,
                    role:decoded.role,
                    firstName :decoded.firstName,
                    lastName :decoded.lastName,
                    email :decoded.email,
                }
                return response.status(200).json({status : 200,message : "Token is valid",data});
              });
            
        }else{
            return response.status(401).json({ message: 'Failed to authenticate token' });
        }
       
    }catch(e){
        return sendResponse(request,response,{
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
}


export { login, register,verifyToken }