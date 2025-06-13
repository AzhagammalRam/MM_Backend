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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardJobDetails = exports.getAllClientDetails = exports.getJobTypeMaterialDataListDetails = exports.getJobTypeMaterialListDetails = exports.getInventoryDetails = exports.updateInventoryDetails = exports.addInventoryDetails = exports.getJobTypeMaterialDetails = exports.updateJobTypeMaterialDetails = exports.addJobTypeMaterialDetails = exports.getAllMaterialDetails = exports.getAllUnitDetails = exports.removeUserDetails = exports.updateUserDetails = exports.getUserDetails = exports.addUserDetails = exports.addRoleDetails = exports.getRoleDetails = exports.getAllRoleDetails = exports.updateRoleDetails = exports.getInchargeDetails = exports.getAllFloorDetails = exports.getAllShiftDetails = exports.removeFloorDetails = exports.updateFloorDetails = exports.getFloorDetails = exports.addFloorDetails = exports.removeShiftDetails = exports.updateShiftDetails = exports.getShiftDetails = exports.addShiftDetails = exports.fetchJobType = void 0;
const lib_1 = require("../prisma/lib");
const ResponseStatus_1 = require("../utils/constants/ResponseStatus");
const bcrypt_1 = __importDefault(require("bcrypt"));
const fetchJobType = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const job = yield lib_1.prisma.jobType.findMany();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Job type has been fetched successfully",
            data: { job },
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.fetchJobType = fetchJobType;
const addShiftDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lib_1.prisma.shift.create({
            data: inputs,
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Shift has been Added successfully",
            data: [],
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.addShiftDetails = addShiftDetails;
const getShiftDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const shift = yield lib_1.prisma.shift.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });
        const count = yield lib_1.prisma.shift.count();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Shift has been fetched successfully",
            data: { shift, count },
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getShiftDetails = getShiftDetails;
const getAllShiftDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shift = yield lib_1.prisma.shift.findMany();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Shift has been fetched successfully",
            data: shift,
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getAllShiftDetails = getAllShiftDetails;
const updateShiftDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shift = yield lib_1.prisma.shift.update({
            where: {
                id: parseInt(inputs.id),
            },
            data: {
                name: inputs.name,
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Shift has been updated successfully",
            data: shift,
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.updateShiftDetails = updateShiftDetails;
const removeShiftDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lib_1.prisma.shift.delete({
            where: {
                id: parseInt(inputs.id),
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Shift has been removed successfully",
            data: [],
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.removeShiftDetails = removeShiftDetails;
const addFloorDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lib_1.prisma.floor.create({
            data: inputs,
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Floor has been added successfully",
            data: [],
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.addFloorDetails = addFloorDetails;
const getFloorDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const floor = yield lib_1.prisma.floor.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });
        const count = yield lib_1.prisma.floor.count();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Floor has been fetched successfully",
            data: { floor, count },
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getFloorDetails = getFloorDetails;
const getAllFloorDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const floor = yield lib_1.prisma.floor.findMany();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Floor has been fetched successfully",
            data: floor,
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getAllFloorDetails = getAllFloorDetails;
const updateFloorDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const floor = yield lib_1.prisma.floor.update({
            where: {
                id: parseInt(inputs.id),
            },
            data: {
                name: inputs.name,
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Floor has been updated successfully",
            data: floor,
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.updateFloorDetails = updateFloorDetails;
const removeFloorDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lib_1.prisma.floor.delete({
            where: {
                id: parseInt(inputs.id),
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Floor has been removed successfully",
            data: [],
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.removeFloorDetails = removeFloorDetails;
const getInchargeDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let shift = (query === null || query === void 0 ? void 0 : query.shift) ? query === null || query === void 0 ? void 0 : query.shift : "";
        let where = {};
        if (shift) {
            where.shiftId = parseInt(shift);
        }
        const incharge = yield lib_1.prisma.user.findMany({
            where: Object.assign({ roleId: {
                    in: [2, 3]
                } }, where),
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Incharge has been fetched successfully",
            data: incharge,
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getInchargeDetails = getInchargeDetails;
const addRoleDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lib_1.prisma.role.create({
            data: inputs,
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Floor has been added successfully",
            data: [],
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.addRoleDetails = addRoleDetails;
const getRoleDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const role = yield lib_1.prisma.role.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });
        const count = yield lib_1.prisma.role.count();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Floor has been fetched successfully",
            data: { role, count },
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getRoleDetails = getRoleDetails;
const getAllRoleDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield lib_1.prisma.role.findMany();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Floor has been fetched successfully",
            data: role,
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getAllRoleDetails = getAllRoleDetails;
const updateRoleDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield lib_1.prisma.role.update({
            where: {
                id: parseInt(inputs.id),
            },
            data: {
                name: inputs.name,
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Floor has been updated successfully",
            data: role,
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.updateRoleDetails = updateRoleDetails;
const addUserDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        inputs.password = yield bcrypt_1.default.hash(inputs.password, 8);
        yield lib_1.prisma.user.create({
            data: {
                firstName: inputs.firstName,
                lastName: inputs.lastName,
                email: inputs.email,
                password: inputs.password,
                roleId: parseInt(inputs.role),
                shiftId: parseInt(inputs.shiftId),
                floorId: parseInt(inputs.floorId),
                status: true,
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "User has been added successfully",
            data: [],
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.addUserDetails = addUserDetails;
const getUserDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const user = yield lib_1.prisma.user.findMany({
            skip: (page - 1) * limit,
            take: limit,
            include: {
                role: true,
                shift: true,
                floor: true,
            },
        });
        const count = yield lib_1.prisma.user.count();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "User has been fetched successfully",
            data: { user, count },
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getUserDetails = getUserDetails;
const updateUserDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        inputs.password = yield bcrypt_1.default.hash(inputs.password, 8);
        yield lib_1.prisma.user.update({
            where: {
                id: parseInt(inputs.id),
            },
            data: {
                firstName: inputs.firstName,
                lastName: inputs.lastName,
                email: inputs.email,
                password: inputs.password,
                roleId: parseInt(inputs.role),
                shiftId: parseInt(inputs.shiftId),
                floorId: parseInt(inputs.floorId),
                status: true,
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "User has been updated successfully",
            data: [],
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.updateUserDetails = updateUserDetails;
const removeUserDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lib_1.prisma.user.delete({
            where: {
                id: parseInt(inputs.id),
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "User has been removed successfully",
            data: [],
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.removeUserDetails = removeUserDetails;
const getAllUnitDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const unit = yield lib_1.prisma.unit.findMany();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Unit has been fetched successfully",
            data: unit,
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getAllUnitDetails = getAllUnitDetails;
const getAllMaterialDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const material = yield lib_1.prisma.material.findMany();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Material has been fetched successfully",
            data: material,
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getAllMaterialDetails = getAllMaterialDetails;
const addJobTypeMaterialDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lib_1.prisma.jobtypeMaterial.create({
            data: {
                jobTypeId: inputs.jobTypeId,
                materialId: inputs.materialId,
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Job type material has been added successfully",
            data: [],
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.addJobTypeMaterialDetails = addJobTypeMaterialDetails;
const updateJobTypeMaterialDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lib_1.prisma.jobtypeMaterial.update({
            where: {
                id: inputs.id,
            },
            data: {
                jobTypeId: inputs.jobTypeId,
                materialId: inputs.materialId,
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Job type material has been updated successfully",
            data: [],
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.updateJobTypeMaterialDetails = updateJobTypeMaterialDetails;
const getJobTypeMaterialDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const offset = (page - 1) * limit;
        const countData = yield lib_1.prisma.$queryRaw `
                    SELECT
                      COUNT(DISTINCT "jtm"."id") as totalRecords
                    FROM
                      "jobtype_material" "jtm"
                    JOIN
                      "job_types" "jt" ON "jt"."id" = "jtm"."jobTypeId"::integer
                    JOIN
                      "material" "m" ON "m"."id" = ANY(string_to_array("jtm"."materialId", ',')::integer[])
                  `;
        const resultData = yield lib_1.prisma.$queryRaw `
                SELECT
                  "jtm"."id" as jobTypeMaterialId,
                  "jt"."name" as jobTypeName,
                  string_agg("m"."name", ', ') as materialNames,
                  "jtm"."jobTypeId" as jobTypeId,
                  "jtm"."materialId" as materialId
                FROM
                  "jobtype_material" "jtm"
                JOIN
                  "job_types" "jt" ON "jt"."id" = "jtm"."jobTypeId"::integer
                JOIN
                  "material" "m" ON "m"."id" = ANY(string_to_array("jtm"."materialId", ',')::integer[])
                GROUP BY
                  "jtm"."id", "jt"."name"
                  LIMIT ${limit} OFFSET ${offset}
                `;
        function serializeData(data) {
            return JSON.stringify(data, (key, value) => typeof value === "bigint" ? value.toString() : value);
        }
        // Serialize the data
        const count = parseInt(JSON.parse(serializeData(countData))[0].totalrecords);
        const result = JSON.parse(serializeData(resultData));
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Job type material has been fetched successfully",
            data: { result, count },
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getJobTypeMaterialDetails = getJobTypeMaterialDetails;
const addInventoryDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lib_1.prisma.inventory.create({
            data: {
                materialId: parseInt(inputs.materialId),
                qty: parseInt(inputs.qty),
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Inventory has been added successfully",
            data: [],
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.addInventoryDetails = addInventoryDetails;
const updateInventoryDetails = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lib_1.prisma.inventory.update({
            where: {
                id: parseInt(inputs.id)
            },
            data: {
                materialId: parseInt(inputs.materialId),
                qty: parseInt(inputs.qty),
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Inventory has been Updated successfully",
            data: [],
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.updateInventoryDetails = updateInventoryDetails;
const getInventoryDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const inventory = yield lib_1.prisma.inventory.findMany({
            skip: (page - 1) * limit,
            take: limit,
            include: {
                material: true,
            },
        });
        const count = yield lib_1.prisma.user.count();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Inventory has been fetched successfully",
            data: { inventory, count },
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getInventoryDetails = getInventoryDetails;
const getJobTypeMaterialListDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = query === null || query === void 0 ? void 0 : query.id;
        const jobTypeMaterial = yield lib_1.prisma.jobtypeMaterial.findFirst({
            where: {
                jobTypeId: id,
            },
        });
        const materialId = jobTypeMaterial === null || jobTypeMaterial === void 0 ? void 0 : jobTypeMaterial.materialId.split(',').map((id) => parseInt(id));
        const material = yield lib_1.prisma.material.findMany({
            where: {
                id: {
                    in: materialId
                }
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Data has been fetched successfully",
            data: material,
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getJobTypeMaterialListDetails = getJobTypeMaterialListDetails;
const getJobTypeMaterialDataListDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = query === null || query === void 0 ? void 0 : query.id;
        const jobTypeMaterial = yield lib_1.prisma.jobExpenses.findMany({
            where: {
                materialInwardDetailsId: parseInt(id),
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Data has been fetched successfully",
            data: jobTypeMaterial,
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getJobTypeMaterialDataListDetails = getJobTypeMaterialDataListDetails;
const getAllClientDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield lib_1.prisma.client.findMany();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Client has been fetched successfully",
            data: client,
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getAllClientDetails = getAllClientDetails;
const getDashboardJobDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const client = query === null || query === void 0 ? void 0 : query.client;
        const process = (query === null || query === void 0 ? void 0 : query.process) ? parseInt(query === null || query === void 0 ? void 0 : query.process) : 0;
        const startDate = query === null || query === void 0 ? void 0 : query.startDate;
        const endDate = query === null || query === void 0 ? void 0 : query.endDate;
        let where = {};
        // if (client) {
        //   where.clientId = client;
        // }
        if (process) {
            where.jobTypeId = process;
        }
        if (startDate && endDate) {
            where.receivedDate = {
                gte: new Date(startDate),
                lte: new Date(endDate),
            };
        }
        else if (startDate) {
            where.receivedDate = {
                gte: new Date(startDate),
            };
        }
        else if (endDate) {
            where.receivedDate = {
                lte: new Date(endDate),
            };
        }
        const dashboardJob = yield lib_1.prisma.materialInwardDetails.findMany({
            skip: (page - 1) * limit,
            take: limit,
            where: Object.assign(Object.assign({}, where), { materialInward: client ? {
                    clientId: parseInt(client)
                } : undefined }),
            include: {
                materialInward: {
                    include: {
                        client: true,
                    },
                },
                jobType: true,
            },
        });
        const count = yield lib_1.prisma.materialInwardDetails.count({
            where: Object.assign(Object.assign({}, where), { materialInward: client ? {
                    clientId: parseInt(client)
                } : undefined }),
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Job has been fetched successfully",
            data: { dashboardJob, count },
        };
        return response;
    }
    catch (errors) {
        console.log("err", errors);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.getDashboardJobDetails = getDashboardJobDetails;
