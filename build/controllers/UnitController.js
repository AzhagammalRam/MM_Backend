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
exports.removeUnit = exports.updateUnit = exports.getUnit = exports.addUnit = void 0;
const UnitService_1 = require("../services/UnitService");
const handleResponse_1 = require("../utils/handleResponse");
const ResponseStatus_1 = require("../utils/constants/ResponseStatus");
// Handler to create a new unit
const addUnit = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inputs = request.body;
        const data = yield (0, UnitService_1.createUnit)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.addUnit = addUnit;
// Handler to fetch units
const getUnit = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = request.query;
        const data = yield (0, UnitService_1.fetchUnit)(query);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.getUnit = getUnit;
// Handler to update a unit
const updateUnit = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inputs = request.body;
        const data = yield (0, UnitService_1.updateUnit)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.updateUnit = updateUnit;
// Handler to remove a unit
const removeUnit = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inputs = request.body;
        const data = yield (0, UnitService_1.removeUnit)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.removeUnit = removeUnit;
