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
exports.removeJobType = exports.updateJobType = exports.getJobTypes = exports.addJobType = void 0;
const JobTypeService_1 = require("../services/JobTypeService");
const handleResponse_1 = require("../utils/handleResponse");
const ResponseStatus_1 = require("../utils/constants/ResponseStatus");
const addJobType = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inputs = request.body;
        const data = yield (0, JobTypeService_1.createJobType)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, { status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE, message: "Job type Added successfully", data });
    }
    catch (e) {
        console.log('e', e);
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.addJobType = addJobType;
const getJobTypes = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = request.query;
        const data = yield (0, JobTypeService_1.fetchJobTypes)(query);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.getJobTypes = getJobTypes;
const updateJobType = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inputs = request.body;
        const data = yield (0, JobTypeService_1.updateJobType)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Job type updated successfully",
            data
        });
    }
    catch (e) {
        console.log('err', e);
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.updateJobType = updateJobType;
const removeJobType = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        yield (0, JobTypeService_1.removeJobType)(parseInt(id));
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.SUCCESSFUL_DELETE
        });
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.removeJobType = removeJobType;
