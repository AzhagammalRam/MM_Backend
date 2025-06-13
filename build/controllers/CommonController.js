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
exports.getDashboardJob = exports.getAllClient = exports.getJobTypeMaterialDataList = exports.getJobTypeMaterialList = exports.getInventory = exports.updateInventory = exports.addInventory = exports.getJobTypeMaterial = exports.updateJobTypeMaterial = exports.addJobTypeMaterial = exports.getAllMaterial = exports.getAllUnit = exports.removeUser = exports.updateUser = exports.getUser = exports.addUser = exports.getAllRole = exports.getRole = exports.updateRole = exports.addRole = exports.getAllShift = exports.getAllFloor = exports.getIncharge = exports.removeFloor = exports.updateFloor = exports.getFloor = exports.addFloor = exports.removeShift = exports.updateShift = exports.getShift = exports.addShift = exports.getJobType = void 0;
const handleResponse_1 = require("../utils/handleResponse");
const ResponseStatus_1 = require("../utils/constants/ResponseStatus");
const CommonService_1 = require("../services/CommonService");
const getJobType = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield (0, CommonService_1.fetchJobType)();
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getJobType = getJobType;
const addShift = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.addShiftDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.addShift = addShift;
const getShift = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.query;
        let data = yield (0, CommonService_1.getShiftDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getShift = getShift;
const updateShift = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.updateShiftDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.updateShift = updateShift;
const removeShift = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.removeShiftDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.removeShift = removeShift;
const addFloor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.addFloorDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.addFloor = addFloor;
const getFloor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.query;
        let data = yield (0, CommonService_1.getFloorDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getFloor = getFloor;
const updateFloor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.updateFloorDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.updateFloor = updateFloor;
const removeFloor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.removeFloorDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.removeFloor = removeFloor;
const getIncharge = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.query;
        let data = yield (0, CommonService_1.getInchargeDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getIncharge = getIncharge;
const getAllFloor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield (0, CommonService_1.getAllFloorDetails)();
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getAllFloor = getAllFloor;
const getAllShift = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield (0, CommonService_1.getAllShiftDetails)();
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getAllShift = getAllShift;
const addRole = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.addRoleDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.addRole = addRole;
const getRole = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.query;
        let data = yield (0, CommonService_1.getRoleDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getRole = getRole;
const getAllRole = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield (0, CommonService_1.getAllRoleDetails)();
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getAllRole = getAllRole;
const updateRole = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.updateRoleDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.updateRole = updateRole;
const addUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.addUserDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.addUser = addUser;
const getUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.query;
        let data = yield (0, CommonService_1.getUserDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getUser = getUser;
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.updateUserDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.updateUser = updateUser;
const removeUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.removeUserDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.removeUser = removeUser;
const getAllUnit = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield (0, CommonService_1.getAllUnitDetails)();
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getAllUnit = getAllUnit;
const getAllMaterial = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield (0, CommonService_1.getAllMaterialDetails)();
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getAllMaterial = getAllMaterial;
const addJobTypeMaterial = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.addJobTypeMaterialDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.addJobTypeMaterial = addJobTypeMaterial;
const updateJobTypeMaterial = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.updateJobTypeMaterialDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.updateJobTypeMaterial = updateJobTypeMaterial;
const getJobTypeMaterial = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.query;
        let data = yield (0, CommonService_1.getJobTypeMaterialDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        console.log("e", e);
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getJobTypeMaterial = getJobTypeMaterial;
const addInventory = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.addInventoryDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.addInventory = addInventory;
const updateInventory = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        let data = yield (0, CommonService_1.updateInventoryDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.updateInventory = updateInventory;
const getInventory = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.query;
        let data = yield (0, CommonService_1.getInventoryDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        console.log("e", e);
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getInventory = getInventory;
const getJobTypeMaterialList = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.query;
        let data = yield (0, CommonService_1.getJobTypeMaterialListDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        console.log("e", e);
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getJobTypeMaterialList = getJobTypeMaterialList;
const getJobTypeMaterialDataList = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.query;
        let data = yield (0, CommonService_1.getJobTypeMaterialDataListDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        console.log("e", e);
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getJobTypeMaterialDataList = getJobTypeMaterialDataList;
const getAllClient = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield (0, CommonService_1.getAllClientDetails)();
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        console.log("e", e);
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getAllClient = getAllClient;
const getDashboardJob = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.query;
        let data = yield (0, CommonService_1.getDashboardJobDetails)(inputs);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        console.log("e", e);
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        });
    }
});
exports.getDashboardJob = getDashboardJob;
