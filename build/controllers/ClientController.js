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
exports.getAllClient = exports.removeClient = exports.updateClient = exports.getClient = exports.addClient = void 0;
const ClientService_1 = require("../services/ClientService");
const handleResponse_1 = require("../utils/handleResponse");
const ResponseStatus_1 = require("../utils/constants/ResponseStatus");
const addClient = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, ClientService_1.createClient)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.addClient = addClient;
const getClient = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = request.query;
        let data = yield (0, ClientService_1.fetchClient)(query);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.getClient = getClient;
const updateClient = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, ClientService_1.update)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.updateClient = updateClient;
const removeClient = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, ClientService_1.remove)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.removeClient = removeClient;
const getAllClient = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield (0, ClientService_1.fetchAllClient)();
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.getAllClient = getAllClient;
