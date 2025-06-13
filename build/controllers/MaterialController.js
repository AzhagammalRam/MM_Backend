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
exports.removeMaterial = exports.updateMaterial = exports.getMaterials = exports.addMaterial = void 0;
const MaterialService_1 = require("../services/MaterialService");
const handleResponse_1 = require("../utils/handleResponse");
const ResponseStatus_1 = require("../utils/constants/ResponseStatus");
const addMaterial = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inputs = request.body;
        const data = yield (0, MaterialService_1.createMaterial)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.addMaterial = addMaterial;
const getMaterials = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = request.query;
        const data = yield (0, MaterialService_1.fetchMaterials)(query);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.getMaterials = getMaterials;
const updateMaterial = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inputs = request.body;
        const data = yield (0, MaterialService_1.updateMaterial)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.updateMaterial = updateMaterial;
// Controller for removing material
const removeMaterial = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const data = yield (0, MaterialService_1.removeMaterial)(parseInt(id)); // Use the service function
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.removeMaterial = removeMaterial;
