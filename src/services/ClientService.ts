import { prisma } from '../prisma/lib'
import { STATUS_CODE, RESPONSE_MESSAGE } from "../utils/constants/ResponseStatus"

const createClient = async(data:any)=>{
    try{
       
        let user = await prisma.client.create({
            data:{
                clientName : data.clientName,
                bankAccount : data.bankAccount,
                bankBranch : data.bankBranch,
                ifsc : data.ifsc,
                namePerBank : data.namePerBank,
                status : true,
                address : {
                    create : {
                        email : data.email,
                        contact : data.contact,
                        address : data.address,
                        area : data.area,
                        city : data.city,
                        pincode : data.pincode,
                        contactPersonName : data.contactPersonName,
                        contactPersonContact : data.contactPersonContact,
                        description : data.description,
                        status : true
                    },
                }
            }, 
            select : {
                clientName :true,
            }
        })
        let response = {
            status : STATUS_CODE.CREATED_CODE,
            message : "Client has been created successfully",
            data : user
        }
        return response
    }catch(errors){
        console.log('err',errors)
        let error = {
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        }
        return error;
    }
}

const fetchClient = async(query:any)=>{
    try{
       
        const page = query?.page  ? parseInt(query?.page) : 1; 
        const limit = query?.limit ? parseInt(query?.limit) : 10;  
       
        const client = await prisma.client.findMany({
            skip: (page - 1) * limit, 
            take: limit, 
            include: {
                address: true 
            }
        });
        const count:number = await prisma.client.count();
        let response = {
            status : STATUS_CODE.SUCCESS_CODE,
            message : "Client has been fetched successfully",
            data : {client,count}
        }
        return response
    }catch(errors){
        console.log('err',errors)
        let error = {
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        }
        return error;
    }
}

const fetchAllClient = async()=>{
    try{
        const client = await prisma.client.findMany({
            include: {
                address: true 
            }
        });
        const count:number = await prisma.client.count();
        let response = {
            status : STATUS_CODE.SUCCESS_CODE,
            message : "Client has been fetched successfully",
            data : {client,count}
        }
        return response
    }catch(errors){
        console.log('err',errors)
        let error = {
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        }
        return error;
    }
}



const update = async(data:any)=>{
    try{
        console.log('data',data)
        let client = await prisma.client.update({
            where : {
              id : data.clientId
            },
            data:{
                clientName : data.clientName,
                bankAccount : data.bankAccount,
                bankBranch : data.bankBranch,
                ifsc : data.ifsc,
                namePerBank : data.namePerBank,
                status : true
            }, 
            select : {
                clientName :true,
            }
        })

        await prisma.clientAddress.update({
            where : {
              id : parseInt(data.addressId),
            },
            data:{
                clientId : parseInt(data.clientId),
                email : data.email,
                contact : data.contact,
                address : data.address,
                area : data.area,
                city : data.city,
                pincode : data.pincode,
                contactPersonName : data.contactPersonName,
                contactPersonContact : data.contactPersonContact,
                description : data.description,
                status : true,
                }
            })

        let response = {
            status : STATUS_CODE.SUCCESS_CODE,
            message : "Client has been updated successfully",
            data : client
        }
        return response
    }catch(errors){
        console.log('err',errors)
        let error = {
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        }
        return error;
    }
}

const remove = async(data:any)=>{
    try{
       
        await prisma.clientAddress.delete({
            where : {
              id : data.addressId
            }
        })
        await prisma.client.delete({
            where : {
              id : data.clientId
            }
        })

        let response = {
            status : STATUS_CODE.SUCCESS_CODE,
            message : "Client has been Removed successfully",
            data : []
        }
        return response
    }catch(errors){
        console.log('err',errors)
        let error = {
            status : STATUS_CODE.SERVER_ERROR_CODE,
            message : RESPONSE_MESSAGE.INTERNAL_ERROR
        }
        return error;
    }
}

export { createClient ,fetchClient, update, remove,fetchAllClient };