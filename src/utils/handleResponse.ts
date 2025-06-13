import { Request,Response } from "express"

export const sendResponse=(req:Request,res:Response,data:any)=>{
    return  res.status(data.status).json(data)
}