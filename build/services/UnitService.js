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
exports.removeUnit = exports.updateUnit = exports.fetchUnit = exports.createUnit = void 0;
const lib_1 = require("../prisma/lib");
const ResponseStatus_1 = require("../utils/constants/ResponseStatus");
const createUnit = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const unit = yield lib_1.prisma.unit.create({
            data: {
                unit: data.unit || '',
                status: true,
                Material: {
                    create: ((_a = data.material) === null || _a === void 0 ? void 0 : _a.map(mat => ({
                        name: mat.materialName,
                        status: true
                    }))) || []
                }
            }
        });
        return {
            status: ResponseStatus_1.STATUS_CODE.CREATED_CODE,
            message: "Unit and associated materials have been created successfully",
            data: unit
        };
    }
    catch (errors) {
        console.log('err', errors);
        return {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
    }
});
exports.createUnit = createUnit;
const fetchUnit = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const units = yield lib_1.prisma.unit.findMany({
            skip: (page - 1) * limit,
            take: limit
        });
        const count = yield lib_1.prisma.unit.count();
        return {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Units have been fetched successfully",
            data: { units, count }
        };
    }
    catch (errors) {
        console.log('err', errors);
        return {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
    }
});
exports.fetchUnit = fetchUnit;
const updateUnit = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const unit = yield lib_1.prisma.unit.update({
            where: {
                id: data === null || data === void 0 ? void 0 : data.id
            },
            data: {
                unit: data.unit || '',
                status: data.status || true
            }
        });
        return {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Unit has been updated successfully",
            data: unit
        };
    }
    catch (errors) {
        console.log('err', errors);
        return {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
    }
});
exports.updateUnit = updateUnit;
const removeUnit = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!data.unitId) {
            throw new Error('Unit ID is required');
        }
        yield lib_1.prisma.unit.delete({
            where: {
                id: data.unitId
            }
        });
        return {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Unit has been removed successfully",
            data: []
        };
    }
    catch (errors) {
        console.log('err', errors);
        return {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
    }
});
exports.removeUnit = removeUnit;
