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
exports.updateProduction = exports.updateDispatch = exports.updateCeaning = exports.getCeaningData = exports.getDashboard = exports.getDispatch = exports.forwardFiling = exports.toDispatch = exports.getFiling = exports.forwardJob = exports.assignFiling = exports.getProduction = exports.assignJob = exports.getJobs = exports.removeMaterialInward = exports.updateMaterialInward = exports.getMaterialInward = exports.addMaterialInward = void 0;
const MaterialInwardService_1 = require("../services/MaterialInwardService");
const handleResponse_1 = require("../utils/handleResponse");
const ResponseStatus_1 = require("../utils/constants/ResponseStatus");
const addMaterialInward = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        // let { files} = await fileUpload('materialInward','dcImage',request,response)
        let data = yield (0, MaterialInwardService_1.create)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.addMaterialInward = addMaterialInward;
const getMaterialInward = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = request.query;
        let data = yield (0, MaterialInwardService_1.get)(query);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.getMaterialInward = getMaterialInward;
const updateMaterialInward = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, MaterialInwardService_1.update)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.updateMaterialInward = updateMaterialInward;
const removeMaterialInward = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, MaterialInwardService_1.remove)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.removeMaterialInward = removeMaterialInward;
const getJobs = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = request.query;
        let data = yield (0, MaterialInwardService_1.getJobsDetails)(query);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.getJobs = getJobs;
const getProduction = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = request.query;
        let data = yield (0, MaterialInwardService_1.getProductionDetails)(query);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.getProduction = getProduction;
const assignJob = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, MaterialInwardService_1.assignJobDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.assignJob = assignJob;
const assignFiling = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, MaterialInwardService_1.assignFilingDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.assignFiling = assignFiling;
const forwardJob = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, MaterialInwardService_1.forwardJobDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.forwardJob = forwardJob;
const getFiling = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, MaterialInwardService_1.getFilingDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.getFiling = getFiling;
const toDispatch = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, MaterialInwardService_1.toDispatchDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.toDispatch = toDispatch;
const forwardFiling = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, MaterialInwardService_1.forwardFilingDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.forwardFiling = forwardFiling;
const getDispatch = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, MaterialInwardService_1.getDispatchDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.getDispatch = getDispatch;
const getDashboard = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, MaterialInwardService_1.getDashboardDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.getDashboard = getDashboard;
const getCeaningData = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.query;
        let data = yield (0, MaterialInwardService_1.getCeaningDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.getCeaningData = getCeaningData;
const updateCeaning = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, MaterialInwardService_1.updateCeaningDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.updateCeaning = updateCeaning;
const updateDispatch = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, MaterialInwardService_1.updateDispatchDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.updateDispatch = updateDispatch;
const updateProduction = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, MaterialInwardService_1.updateProductionDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.updateProduction = updateProduction;
