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
exports.removeMaterial = exports.updateMaterial = exports.fetchMaterials = exports.createMaterial = void 0;
const lib_1 = require("../prisma/lib"); // Adjust the path to your Prisma client
const ResponseStatus_1 = require("../utils/constants/ResponseStatus");
// Create Material
const createMaterial = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const material = yield lib_1.prisma.material.create({
            data: {
                name: data.name,
                unitId: parseInt(data.unitId),
                displayName: data.displayName
            },
        });
        return {
            status: ResponseStatus_1.STATUS_CODE.CREATED_CODE,
            message: "Material created successfully",
            data: material
        };
    }
    catch (error) {
        console.error('Error creating material:', error);
        return {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
    }
});
exports.createMaterial = createMaterial;
// Fetch Materials
const fetchMaterials = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = query.page ? parseInt(query.page) : 1;
        const limit = query.limit ? parseInt(query.limit) : 10;
        const materials = yield lib_1.prisma.material.findMany({
            skip: (page - 1) * limit,
            take: limit,
            include: {
                unit: true,
            }
        });
        const count = yield lib_1.prisma.material.count();
        return {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Materials fetched successfully",
            data: { materials, count }
        };
    }
    catch (error) {
        console.error('Error fetching materials:', error);
        return {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
    }
});
exports.fetchMaterials = fetchMaterials;
// Update Material
const updateMaterial = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const material = yield lib_1.prisma.material.update({
            where: { id: parseInt(data.id) },
            data: {
                name: data.name,
                unitId: parseInt(data.unitId),
                displayName: data.displayName
            },
        });
        return {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Material updated successfully",
            data: material
        };
    }
    catch (error) {
        console.error('Error updating material:', error);
        return {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
    }
});
exports.updateMaterial = updateMaterial;
// Remove Material
const removeMaterial = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lib_1.prisma.material.delete({
            where: { id }
        });
        return {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Material removed successfully",
            data: []
        };
    }
    catch (error) {
        console.error('Error removing material:', error);
        return {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
    }
});
exports.removeMaterial = removeMaterial;
