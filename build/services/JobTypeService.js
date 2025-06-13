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
exports.removeJobType = exports.updateJobType = exports.fetchJobTypes = exports.createJobType = void 0;
const lib_1 = require("../prisma/lib");
const ResponseStatus_1 = require("../utils/constants/ResponseStatus");
const createJobType = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    return yield lib_1.prisma.jobType.create({
        data: inputs,
    });
});
exports.createJobType = createJobType;
const fetchJobTypes = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = query.page ? parseInt(query.page) : 1;
        const limit = query.limit ? parseInt(query.limit) : 10;
        const job = yield lib_1.prisma.jobType.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });
        const count = yield lib_1.prisma.jobType.count();
        return {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Materials fetched successfully",
            data: { job, count }
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
exports.fetchJobTypes = fetchJobTypes;
const updateJobType = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    return yield lib_1.prisma.jobType.update({
        where: {
            id: parseInt(inputs.id)
        },
        data: {
            name: inputs.name
        },
    });
});
exports.updateJobType = updateJobType;
const removeJobType = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield lib_1.prisma.jobType.delete({
        where: { id },
    });
});
exports.removeJobType = removeJobType;
