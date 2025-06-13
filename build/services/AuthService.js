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
exports.saveUser = exports.auth = void 0;
const lib_1 = require("../prisma/lib");
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ResponseStatus_1 = require("../utils/constants/ResponseStatus");
const auth = (data, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield lib_1.prisma.user.findFirst({
            where: {
                email: data.email
            }
        });
        if (!user) {
            let res = {
                status: ResponseStatus_1.STATUS_CODE.UNAUTHORIZED_CODE,
                message: "Email does not exist",
                data: ["Email does not exist"]
            };
            return res;
        }
        const match = yield bcrypt_1.default.compare(data.password, user.password);
        if (!match) {
            let res = {
                status: ResponseStatus_1.STATUS_CODE.UNAUTHORIZED_CODE,
                message: "Password is incorrect",
                data: ["Password is incorrect"]
            };
            return res;
        }
        let secret_key = process.env.SECRET_KEY || 'job_secret';
        const token = jsonwebtoken_1.default.sign({
            user_id: user.id.toString(),
            role: user.roleId,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        }, secret_key, { expiresIn: '1h' });
        yield lib_1.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                token
            }
        });
        let res = {
            status: ResponseStatus_1.STATUS_CODE.SUCCESS_CODE,
            message: "Authenticated successfully",
            token,
            role: user.roleId
        };
        return res;
    }
    catch (e) {
        console.log("e", e);
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
        return error;
    }
});
exports.auth = auth;
const saveUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        data.password = yield bcrypt_1.default.hash(data.password, 8);
        data.status = true;
        data.shiftId = (data === null || data === void 0 ? void 0 : data.shiftId) ? parseInt(data === null || data === void 0 ? void 0 : data.shiftId) : 1;
        data.floorId = (data === null || data === void 0 ? void 0 : data.floorId) ? parseInt(data === null || data === void 0 ? void 0 : data.floorId) : 1;
        data.roleId = (data === null || data === void 0 ? void 0 : data.role) ? parseInt(data === null || data === void 0 ? void 0 : data.role) : 1;
        let user = yield lib_1.prisma.user.create({
            data: Object.assign({}, data),
            select: {
                email: true,
                firstName: true,
                lastName: true
            }
        });
        let response = {
            status: ResponseStatus_1.STATUS_CODE.CREATED_CODE,
            message: "User Added successfully",
            data: user
        };
        return response;
    }
    catch (errors) {
        console.log('err', errors);
        if (errors instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            let error = {
                status: ResponseStatus_1.STATUS_CODE.BAD_REQUEST_CODE,
                message: ResponseStatus_1.RESPONSE_MESSAGE.VALIDATION_ERROR,
                data: ["Email already exist"]
            };
            return error;
        }
        let error = {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        };
        return error;
    }
});
exports.saveUser = saveUser;
