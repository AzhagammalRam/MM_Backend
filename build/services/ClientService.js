"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllClient = exports.remove = exports.update = exports.fetchClient = exports.createClient = void 0;
const lib_1 = require("../prisma/lib");
const ResponseStatus_1 = require("../utils/constants/ResponseStatus");
const createClient = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield lib_1.prisma.client.create({
            data: {
                clientName: data.clientName,
                bankAccount: data.bankAccount,
                bankBranch: data.bankBranch,
                ifsc: data.ifsc,
                namePerBank: data.namePerBank,
                status: true,
                address: {
                    create: {
                        email: data.email,
                        contact: data.contact,
                        address: data.address,
                        area: data.area,
                        city: data.city,
                        pincode: data.pincode,
                        contactPersonName: data.contactPersonName,
                        contactPersonContact: data.contactPersonContact,
                        description: data.description,
                        status: true
                    },
                }
            },
            select: {
                clientName: true,
            }
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.CREATED_CODE,
            message: "Client has been created successfully",
            data: user
        };
        return response;
    }
    catch (errors) {
        console.log('err', errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
        return error;
    }
});
exports.createClient = createClient;
const fetchClient = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const client = yield lib_1.prisma.client.findMany({
            skip: (page - 1) * limit,
            take: limit,
            include: {
                address: true
            }
        });
        const count = yield lib_1.prisma.client.count();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Client has been fetched successfully",
            data: { client, count }
        };
        return response;
    }
    catch (errors) {
        console.log('err', errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
        return error;
    }
});
exports.fetchClient = fetchClient;
const fetchAllClient = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield lib_1.prisma.client.findMany({
            include: {
                address: true
            }
        });
        const count = yield lib_1.prisma.client.count();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Client has been fetched successfully",
            data: { client, count }
        };
        return response;
    }
    catch (errors) {
        console.log('err', errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
        return error;
    }
});
exports.fetchAllClient = fetchAllClient;
const update = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let client = yield lib_1.prisma.client.update({
            where: {
                id: data.clientId
            },
            data: {
                clientName: data.clientName,
                bankAccount: data.bankAccount,
                bankBranch: data.bankBranch,
                ifsc: data.ifsc,
                namePerBank: data.namePerBank,
                status: true
            },
            select: {
                clientName: true,
            }
        });
        yield lib_1.prisma.clientAddress.update({
            where: {
                id: data.addressId
            },
            data: {
                email: data.email,
                contact: data.contact,
                address: data.address,
                area: data.area,
                city: data.city,
                pincode: data.pincode,
                contactPersonName: data.contactPersonName,
                contactPersonContact: data.contactPersonContact,
                description: data.description,
                status: true
            }
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Client has been updated successfully",
            data: client
        };
        return response;
    }
    catch (errors) {
        console.log('err', errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
        return error;
    }
});
exports.update = update;
const remove = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lib_1.prisma.clientAddress.delete({
            where: {
                id: data.addressId
            }
        });
        yield lib_1.prisma.client.delete({
            where: {
                id: data.clientId
            }
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Client has been Removed successfully",
            data: []
        };
        return response;
    }
    catch (errors) {
        console.log('err', errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
        return error;
    }
});
exports.remove = remove;
