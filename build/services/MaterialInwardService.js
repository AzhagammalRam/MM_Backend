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
exports.updateProductionDetails = exports.updateDispatchDetails = exports.updateCeaningDetails = exports.getCeaningDetails = exports.getDashboardDetails = exports.getDispatchDetails = exports.forwardFilingDetails = exports.toDispatchDetails = exports.getFilingDetails = exports.forwardJobDetails = exports.assignFilingDetails = exports.getProductionDetails = exports.assignJobDetails = exports.getJobsDetails = exports.remove = exports.update = exports.get = exports.create = void 0;
const lib_1 = require("../prisma/lib");
const ResponseStatus_1 = require("../utils/constants/ResponseStatus");
const fs_1 = __importDefault(require("fs"));
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let materialDetails = JSON.parse(data.materialDetails);
        let materialInwardCount = yield lib_1.prisma.materialInwardDetails.count();
        let materilaInward = yield lib_1.prisma.materialInward.create({
            data: {
                clientId: parseInt(data.clientId),
                dcNumber: data.dcNumber,
                dcImage: data.dcImage,
            },
            select: {
                id: true,
            },
        });
        let materialInfoArray = [];
        materialDetails.map((data) => {
            let materialInfo = {};
            materialInwardCount = materialInwardCount + 1;
            let jobId = "JOB000" + materialInwardCount;
            materialInfo.materialInwardId = materilaInward.id;
            materialInfo.material = data.material;
            materialInfo.thickness = data.thickness;
            materialInfo.quantity = parseInt(data.quantity);
            materialInfo.receivedDate = new Date(data.receivedDate);
            materialInfo.estimatedDispatchDate = new Date(data.estimatedDispatchDate);
            materialInfo.type = data.type;
            // materialInfo.length = data.length,
            materialInfo.jobTypeId = parseInt(data.jobTypeId);
            materialInfo.jobStatus = "1";
            materialInfo.jobId = jobId;
            materialInfo.inspection = data.inspection;
            materialInfo.cleaning = parseInt(data.cleaning);
            materialInfo.printing = parseInt(data.printing);
            materialInfoArray.push(materialInfo);
        });
        yield lib_1.prisma.materialInwardDetails.createMany({
            data: materialInfoArray,
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.CREATED_CODE,
            message: "Material Inward has been created successfully",
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
exports.create = create;
const get = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const materialInward = yield lib_1.prisma.materialInward.findMany({
            skip: (page - 1) * limit,
            take: limit,
            include: {
                materialInwardDetails: true,
                client: true,
            },
        });
        const count = yield lib_1.prisma.materialInward.count();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Material Inward has been fetched successfully",
            data: { materialInward, count },
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
exports.get = get;
const update = (inputs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let materialDetails = JSON.parse(inputs.materialDetails);
        inputs.dcImage = inputs.dcImage ? inputs.dcImage : inputs.oldDCImage;
        yield lib_1.prisma.materialInward.update({
            where: {
                id: parseInt(inputs.materialInwardId),
            },
            data: {
                clientId: parseInt(inputs.clientId),
                dcNumber: inputs.dcNumber,
                dcImage: inputs.dcImage,
            },
            select: {
                id: true,
            },
        });
        yield lib_1.prisma.materialInwardDetails.deleteMany({
            where: {
                materialInwardId: parseInt(inputs.materialInwardId),
            },
        });
        let materialInfoArray = [];
        materialDetails.map((data) => {
            let materialInfo = {};
            materialInfo.materialInwardId = parseInt(inputs.materialInwardId);
            materialInfo.material = data.material;
            materialInfo.thickness = data.thickness;
            materialInfo.quantity = parseInt(data.quantity);
            materialInfo.receivedDate = new Date(data.receivedDate);
            materialInfo.estimatedDispatchDate = new Date(data.estimatedDispatchDate);
            materialInfo.type = data.type;
            // materialInfo.length = data.length,
            materialInfo.jobTypeId = parseInt(data.jobTypeId);
            materialInfo.jobStatus = "1";
            materialInfo.inspection = data.inspection;
            materialInfo.cleaning = parseInt(data.cleaning);
            materialInfo.printing = parseInt(data.printing);
            materialInfoArray.push(materialInfo);
        });
        yield lib_1.prisma.materialInwardDetails.createMany({
            data: materialInfoArray,
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.CREATED_CODE,
            message: "Material Inward has been updated successfully",
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
exports.update = update;
const remove = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let deleteData = yield lib_1.prisma.materialInward.findFirst({
            where: {
                id: parseInt(data.materialInwardId),
            },
        });
        let filePath = __uploadDir + "/inwardMaterials/" + (deleteData === null || deleteData === void 0 ? void 0 : deleteData.dcImage);
        if (fs_1.default.existsSync(filePath)) {
            fs_1.default.unlink(filePath, (err) => {
                if (err) {
                    console.error(`Failed to delete file: ${err.message}`);
                }
            });
        }
        yield lib_1.prisma.materialInwardDetails.deleteMany({
            where: {
                materialInwardId: parseInt(data.materialInwardId),
            },
        });
        yield lib_1.prisma.materialInward.delete({
            where: {
                id: parseInt(data.materialInwardId),
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Material Inward has been Removed successfully",
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
exports.remove = remove;
const getJobsDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const jobs = yield lib_1.prisma.materialInwardDetails.findMany({
            skip: (page - 1) * limit,
            take: limit,
            where: {
                jobStatus: {
                    in: ["1", "2"],
                },
                cleaning: {
                    in: [2, 3]
                }
            },
            include: {
                materialInward: {
                    include: {
                        client: true,
                    }
                },
                jobType: true,
            },
        });
        const count = yield lib_1.prisma.materialInwardDetails.count({
            where: {
                jobStatus: {
                    in: ["1", "2"],
                },
                cleaning: {
                    in: [2, 3]
                }
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Jobs has been fetched successfully",
            data: { jobs, count },
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
exports.getJobsDetails = getJobsDetails;
const assignJobDetails = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let job = yield lib_1.prisma.materialInwardDetails.findFirst({
            where: {
                id: data.id,
            },
        });
        let totalQty = (job === null || job === void 0 ? void 0 : job.quantity) || 0;
        let materialProduction = yield lib_1.prisma.materialProduction.findMany({
            where: {
                MaterialInwardDetailsId: data.id,
            },
        });
        let productionQty = 0;
        materialProduction === null || materialProduction === void 0 ? void 0 : materialProduction.forEach((production) => {
            productionQty += production === null || production === void 0 ? void 0 : production.receivedQty;
        });
        let remainQty = totalQty - productionQty;
        productionQty = productionQty + parseInt(data.receivedQty);
        if (totalQty >= productionQty) {
            yield lib_1.prisma.materialProduction.create({
                data: {
                    date: data.date,
                    MaterialInwardDetailsId: data.id,
                    assignedShift: parseInt(data.assignedShift),
                    assignedFloor: parseInt(data.assignedFloor),
                    receivedQty: parseInt(data.receivedQty),
                    shiftIncharge: parseInt(data.shiftIncharge),
                    status: 1,
                },
                select: {
                    id: true,
                },
            });
            yield lib_1.prisma.materialInwardDetails.update({
                where: {
                    id: data.id,
                },
                data: {
                    jobStatus: "2",
                },
            });
            let response = {
                status: ResponseStatus_1.STATUS_CODE.CREATED_CODE,
                message: "Job has been assigned successfully",
                data: [],
            };
            return response;
        }
        else {
            let response = {
                status: ResponseStatus_1.STATUS_CODE.BAD_REQUEST_CODE,
                message: ResponseStatus_1.RESPONSE_MESSAGE.VALIDATION_ERROR,
                data: [`Remain Quantuty is - ${remainQty}`],
            };
            return response;
        }
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
exports.assignJobDetails = assignJobDetails;
const getProductionDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const productionDate = query === null || query === void 0 ? void 0 : query.productionDate;
        const shift = query === null || query === void 0 ? void 0 : query.shift;
        const floor = query === null || query === void 0 ? void 0 : query.floor;
        const incharge = (query === null || query === void 0 ? void 0 : query.incharge) ? parseInt(query === null || query === void 0 ? void 0 : query.incharge) : 0;
        let where = {};
        if (productionDate) {
            where.date = productionDate;
        }
        if (shift) {
            where.assignedShift = shift;
        }
        if (floor) {
            where.assignedFloor = floor;
        }
        if (incharge) {
            where.shiftIncharge = incharge;
        }
        const production = yield lib_1.prisma.materialProduction.findMany({
            skip: (page - 1) * limit,
            take: limit,
            where: Object.assign({ status: { not: 2 } }, where),
            include: {
                jobExpenses: true,
                materialInwardDetails: {
                    include: {
                        jobType: true,
                        materialInward: {
                            include: {
                                client: true
                            }
                        },
                    },
                },
                user: true,
                shift: true,
                floor: true
            },
        });
        const count = yield lib_1.prisma.materialProduction.count({
            where: Object.assign({ status: { not: 2 } }, where),
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Production has been fetched successfully",
            data: { production, count },
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
exports.getProductionDetails = getProductionDetails;
const assignFilingDetails = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let jobexpense = yield lib_1.prisma.jobExpenses.findMany({
            where: {
                materialProductionId: data.materialProductionId,
            },
        });
        if (jobexpense && (jobexpense === null || jobexpense === void 0 ? void 0 : jobexpense.length) == 0) {
            let response = {
                status: ResponseStatus_1.STATUS_CODE.BAD_REQUEST_CODE,
                message: ResponseStatus_1.RESPONSE_MESSAGE.VALIDATION_ERROR,
                data: [`please enter starting level Qty in production tab `],
            };
            return response;
        }
        let job = yield lib_1.prisma.materialInwardDetails.findFirst({
            where: {
                id: data.id,
            },
        });
        let totalQty = (job === null || job === void 0 ? void 0 : job.quantity) || 0;
        let materialProduction = yield lib_1.prisma.materialProduction.findMany({
            where: {
                MaterialInwardDetailsId: data.id,
            },
        });
        let productionQty = 0;
        materialProduction === null || materialProduction === void 0 ? void 0 : materialProduction.forEach((production) => {
            productionQty += production === null || production === void 0 ? void 0 : production.completedQty;
        });
        productionQty = productionQty + parseInt(data.completedQty);
        let materialProd = yield lib_1.prisma.materialProduction.findFirst({
            where: {
                id: data.materialProductionId,
            },
        });
        let recQty = (materialProd === null || materialProd === void 0 ? void 0 : materialProd.receivedQty) || 0;
        let alreadyCompletedQty = (materialProd === null || materialProd === void 0 ? void 0 : materialProd.completedQty) || 0;
        let completedQty = (data === null || data === void 0 ? void 0 : data.completedQty) ? parseInt(data === null || data === void 0 ? void 0 : data.completedQty) : 0;
        completedQty = alreadyCompletedQty + completedQty;
        if (recQty >= completedQty) {
            let where = {};
            if (recQty == completedQty) {
                where.status = 2;
            }
            yield lib_1.prisma.materialProduction.update({
                where: {
                    id: parseInt(data.materialProductionId),
                },
                data: Object.assign({ completedQty: parseInt(data.completedQty), remarks: data.remarks }, where),
                select: {
                    id: true,
                },
            });
            yield lib_1.prisma.materialFiling.create({
                data: {
                    MaterialInwardDetailsId: parseInt(data.id),
                    receivedQty: parseInt(data.completedQty),
                    date: data.date,
                    assignedFloor: data.assignedFloor,
                    assignedShift: data.assignedShift,
                    shiftIncharge: parseInt(data.shiftIncharge),
                    status: 1,
                },
                select: {
                    id: true,
                },
            });
            data.jobTypeMaterial.forEach((element) => __awaiter(void 0, void 0, void 0, function* () {
                yield lib_1.prisma.jobExpenses.updateMany({
                    where: {
                        materrialId: parseInt(element === null || element === void 0 ? void 0 : element.name),
                        materialInwardDetailsId: parseInt(data.id),
                        materialProductionId: parseInt(data.materialProductionId)
                    },
                    data: {
                        usedQty: parseInt(element.cqty),
                    },
                });
            }));
            if (productionQty == totalQty) {
                yield lib_1.prisma.materialInwardDetails.update({
                    where: {
                        id: data.id,
                    },
                    data: {
                        jobStatus: "3",
                    },
                });
            }
            let response = {
                status: ResponseStatus_1.STATUS_CODE.CREATED_CODE,
                message: "Job has been assigned successfully",
                data: [],
            };
            return response;
        }
        else {
            let response = {
                status: ResponseStatus_1.STATUS_CODE.BAD_REQUEST_CODE,
                message: ResponseStatus_1.RESPONSE_MESSAGE.VALIDATION_ERROR,
                data: [`Completed Qty is more than received qty`],
            };
            return response;
        }
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
exports.assignFilingDetails = assignFilingDetails;
const forwardJobDetails = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let productionDetails = yield lib_1.prisma.materialProduction.findFirst({
            where: {
                id: parseInt(data.materialProductionId),
            },
        });
        let receivedQty = (productionDetails === null || productionDetails === void 0 ? void 0 : productionDetails.receivedQty) || 0;
        let completedQty = (productionDetails === null || productionDetails === void 0 ? void 0 : productionDetails.completedQty) || 0;
        let remainQty = receivedQty - completedQty;
        let forwardQty = parseInt(data.receivedQty);
        if (remainQty >= forwardQty && (productionDetails === null || productionDetails === void 0 ? void 0 : productionDetails.status) == 1) {
            yield lib_1.prisma.materialProduction.update({
                where: {
                    id: parseInt(data.materialProductionId),
                },
                data: {
                    status: 2,
                },
            });
            yield lib_1.prisma.materialProduction.create({
                data: {
                    MaterialInwardDetailsId: parseInt(data.materialInwardId),
                    receivedQty: parseInt(data.receivedQty),
                    date: data.date,
                    assignedFloor: parseInt(data.assignedFloor),
                    assignedShift: parseInt(data.assignedShift),
                    shiftIncharge: parseInt(data.shiftIncharge),
                    status: 1,
                },
                select: {
                    id: true,
                },
            });
            let response = {
                status: ResponseStatus_1.STATUS_CODE.CREATED_CODE,
                message: "Job has been Forwarded successfully",
                data: [],
            };
            return response;
        }
        else {
            let response = {
                status: ResponseStatus_1.STATUS_CODE.BAD_REQUEST_CODE,
                message: ResponseStatus_1.RESPONSE_MESSAGE.VALIDATION_ERROR,
                data: [`Forward Qty is more than received qty`],
            };
            return response;
        }
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
exports.forwardJobDetails = forwardJobDetails;
const getFilingDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const productionDate = query === null || query === void 0 ? void 0 : query.productionDate;
        const shift = query === null || query === void 0 ? void 0 : query.shift;
        const floor = query === null || query === void 0 ? void 0 : query.floor;
        const incharge = (query === null || query === void 0 ? void 0 : query.incharge) ? parseInt(query === null || query === void 0 ? void 0 : query.incharge) : 0;
        let where = {};
        if (productionDate) {
            where.date = productionDate;
        }
        if (shift) {
            where.assignedShift = shift;
        }
        if (floor) {
            where.assignedFloor = floor;
        }
        if (incharge) {
            where.shiftIncharge = incharge;
        }
        const filing = yield lib_1.prisma.materialFiling.findMany({
            skip: (page - 1) * limit,
            take: limit,
            where: Object.assign({ status: { not: 2 } }, where),
            include: {
                materialInwardDetails: {
                    include: {
                        jobType: true,
                        materialInward: {
                            include: {
                                client: true
                            }
                        },
                    },
                },
            },
        });
        const count = yield lib_1.prisma.materialFiling.count({
            where: Object.assign({ status: { not: 2 } }, where),
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Filing has been fetched successfully",
            data: { filing, count },
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
exports.getFilingDetails = getFilingDetails;
const toDispatchDetails = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let job = yield lib_1.prisma.materialInwardDetails.findFirst({
            where: {
                id: data.id,
            },
        });
        let totalQty = (job === null || job === void 0 ? void 0 : job.quantity) || 0;
        let materialFiling = yield lib_1.prisma.materialFiling.findMany({
            where: {
                MaterialInwardDetailsId: data.id,
            },
        });
        let filingQty = 0;
        materialFiling === null || materialFiling === void 0 ? void 0 : materialFiling.forEach((filing) => {
            filingQty += filing === null || filing === void 0 ? void 0 : filing.completedQty;
        });
        filingQty = filingQty + parseInt(data.completedQty);
        let materialFil = yield lib_1.prisma.materialFiling.findFirst({
            where: {
                id: data.materialFilingId,
            },
        });
        let recQty = (materialFil === null || materialFil === void 0 ? void 0 : materialFil.receivedQty) || 0;
        let alreadyCompletedQty = (materialFil === null || materialFil === void 0 ? void 0 : materialFil.completedQty) || 0;
        let completedQty = (data === null || data === void 0 ? void 0 : data.completedQty) ? parseInt(data === null || data === void 0 ? void 0 : data.completedQty) : 0;
        completedQty = alreadyCompletedQty + completedQty;
        if (recQty >= completedQty) {
            let where = {};
            if (recQty == completedQty) {
                where.status = 2;
            }
            yield lib_1.prisma.materialFiling.update({
                where: {
                    id: parseInt(data.materialFilingId),
                },
                data: Object.assign({ completedQty: parseInt(data.completedQty), remarks: data.remarks, status: 2 }, where),
                select: {
                    id: true,
                },
            });
            yield lib_1.prisma.materialDispatch.create({
                data: {
                    receivedQty: parseInt(data.completedQty),
                    MaterialInwardDetailsId: data.id,
                }
            });
            if (filingQty == totalQty) {
                yield lib_1.prisma.materialInwardDetails.update({
                    where: {
                        id: data.id,
                    },
                    data: {
                        jobStatus: "4",
                    },
                });
            }
            let response = {
                status: ResponseStatus_1.STATUS_CODE.CREATED_CODE,
                message: "Job has been assigned successfully",
                data: [],
            };
            return response;
        }
        else {
            let response = {
                status: ResponseStatus_1.STATUS_CODE.BAD_REQUEST_CODE,
                message: ResponseStatus_1.RESPONSE_MESSAGE.VALIDATION_ERROR,
                data: [`Completed Qty is more than received qty`],
            };
            return response;
        }
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
exports.toDispatchDetails = toDispatchDetails;
const forwardFilingDetails = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let filingDetails = yield lib_1.prisma.materialFiling.findFirst({
            where: {
                id: parseInt(data.materialFilingId),
            },
        });
        let receivedQty = (filingDetails === null || filingDetails === void 0 ? void 0 : filingDetails.receivedQty) || 0;
        let completedQty = (filingDetails === null || filingDetails === void 0 ? void 0 : filingDetails.completedQty) || 0;
        let remainQty = receivedQty - completedQty;
        let forwardQty = parseInt(data.receivedQty);
        if (remainQty >= forwardQty && (filingDetails === null || filingDetails === void 0 ? void 0 : filingDetails.status) == 1) {
            yield lib_1.prisma.materialFiling.update({
                where: {
                    id: parseInt(data.materialFilingId),
                },
                data: {
                    status: 2,
                },
            });
            yield lib_1.prisma.materialFiling.create({
                data: {
                    MaterialInwardDetailsId: parseInt(data.materialInwardId),
                    receivedQty: parseInt(data.receivedQty),
                    date: data.date,
                    assignedFloor: data.assignedFloor,
                    assignedShift: data.assignedShift,
                    shiftIncharge: parseInt(data.shiftIncharge),
                    status: 1,
                },
                select: {
                    id: true,
                },
            });
            let response = {
                status: ResponseStatus_1.STATUS_CODE.CREATED_CODE,
                message: "Filing has been Forwarded successfully",
                data: [],
            };
            return response;
        }
        else {
            let response = {
                status: ResponseStatus_1.STATUS_CODE.BAD_REQUEST_CODE,
                message: ResponseStatus_1.RESPONSE_MESSAGE.VALIDATION_ERROR,
                data: [`Forward Qty is more than received qty`],
            };
            return response;
        }
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
exports.forwardFilingDetails = forwardFilingDetails;
const getDispatchDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const dispatch = yield lib_1.prisma.materialDispatch.findMany({
            skip: (page - 1) * limit,
            take: limit,
            include: {
                materialInwardDetails: {
                    include: {
                        jobType: true,
                        materialInward: {
                            include: {
                                client: true
                            }
                        }
                    }
                }
            },
        });
        const count = yield lib_1.prisma.materialDispatch.count();
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Dispatch has been fetched successfully",
            data: { dispatch, count },
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
exports.getDispatchDetails = getDispatchDetails;
const getDashboardDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobCount = yield lib_1.prisma.materialInwardDetails.count({
            where: {
                jobStatus: {
                    in: ["1", "2", "3"],
                },
            },
        });
        const client = yield lib_1.prisma.materialInwardDetails.groupBy({
            by: ['materialInwardId'],
            _count: {
                id: true,
            },
            where: {
                jobStatus: {
                    in: ["1", "2", "3"],
                },
            },
        });
        const clientCount = client.reduce((acc, group) => acc + group._count.id, 0);
        const totals = yield lib_1.prisma.materialInwardDetails.aggregate({
            _sum: {
                quantity: true,
            },
            where: {
                jobStatus: {
                    in: ["2", "3"],
                },
            },
        });
        const totalQuantity = totals._sum.quantity;
        const productionCount = yield lib_1.prisma.materialProduction.count({
            where: {
                status: {
                    in: [1],
                },
            },
        });
        const filingCount = yield lib_1.prisma.materialFiling.count({
            where: {
                status: {
                    in: [1],
                },
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Dashboard details has been fetched successfully",
            data: {
                jobCount,
                productionCount,
                clientCount,
                totalQuantity,
                filingCount,
            },
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
exports.getDashboardDetails = getDashboardDetails;
const getCeaningDetails = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = (query === null || query === void 0 ? void 0 : query.page) ? parseInt(query === null || query === void 0 ? void 0 : query.page) : 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) ? parseInt(query === null || query === void 0 ? void 0 : query.limit) : 10;
        const cleaning = yield lib_1.prisma.materialInwardDetails.findMany({
            skip: (page - 1) * limit,
            take: limit,
            where: {
                cleaning: 1,
            },
            include: {
                materialInward: {
                    include: {
                        client: true,
                    }
                },
                jobType: true,
            },
        });
        const count = yield lib_1.prisma.materialInwardDetails.count({
            where: {
                cleaning: 1,
            },
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Cleaning details has been fetched successfully",
            data: { cleaning, count },
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
exports.getCeaningDetails = getCeaningDetails;
const updateCeaningDetails = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lib_1.prisma.materialInwardDetails.update({
            where: {
                id: data.id
            },
            data: {
                cleaning: 2
            }
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Cleaning details has been updated successfully",
            data: [],
        };
        return response;
    }
    catch (e) {
        console.log("err", e);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.updateCeaningDetails = updateCeaningDetails;
const updateDispatchDetails = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield lib_1.prisma.materialDispatch.update({
            where: {
                id: data.id
            },
            data: {
                status: 2,
                invoiceNo: data.invoiceNo,
                invoiceDate: data.invoiceDate,
                invoiceAmount: data.invoiceAmount,
            }
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Dispatch details has been updated successfully",
            data: [],
        };
        return response;
    }
    catch (e) {
        console.log("err", e);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.updateDispatchDetails = updateDispatchDetails;
const updateProductionDetails = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let material = data.jobTypeMaterial;
        let materialInfo = [];
        yield lib_1.prisma.jobExpenses.deleteMany({
            where: {
                materialProductionId: data.materialProductionId
            }
        });
        material.forEach((element) => {
            let materialData = {};
            materialData.materrialId = parseInt(element.name);
            materialData.expectedQty = parseInt(element.qty);
            materialData.materialInwardDetailsId = data.id;
            materialData.displayName = element.displayName;
            materialData.materialProductionId = data.materialProductionId;
            materialInfo.push(materialData);
        });
        yield lib_1.prisma.jobExpenses.createMany({
            data: materialInfo
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Production details has been updated successfully",
            data: [],
        };
        return response;
    }
    catch (e) {
        console.log("err", e);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR,
        };
        return error;
    }
});
exports.updateProductionDetails = updateProductionDetails;
