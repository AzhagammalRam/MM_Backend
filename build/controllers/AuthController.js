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
exports.verifyToken = exports.register = exports.login = void 0;
const AuthService_1 = require("../services/AuthService");
const handleResponse_1 = require("../utils/handleResponse");
const UserValidations_1 = require("../validations/UserValidations");
const ResponseStatus_1 = require("../utils/constants/ResponseStatus");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        const { error, value, errMsg } = (0, UserValidations_1.loginValidations)(inputs);
        if (error) {
            return (0, handleResponse_1.sendResponse)(request, response, {
                status: ResponseStatus_1.STATUS_CODE.BAD_REQUEST_CODE,
                message: ResponseStatus_1.RESPONSE_MESSAGE.VALIDATION_ERROR,
                data: errMsg
            });
        }
        let data = yield (0, AuthService_1.auth)(value, response);
        return (0, handleResponse_1.sendResponse)(request, response, data);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.login = login;
const register = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let inputs = request.body;
        const { error, value, errMsg } = (0, UserValidations_1.userValidations)(inputs);
        if (error) {
            return (0, handleResponse_1.sendResponse)(request, response, {
                status: ResponseStatus_1.STATUS_CODE.BAD_REQUEST_CODE,
                message: ResponseStatus_1.RESPONSE_MESSAGE.VALIDATION_ERROR,
                data: errMsg
            });
        }
        let res = yield (0, AuthService_1.saveUser)(value);
        return response.send(res);
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.register = register;
const verifyToken = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = request.headers.token;
        if (authHeader) {
            const token = authHeader.split(" ")[1];
            const SECRET = process.env.SECRET_KEY || "job_secret";
            jsonwebtoken_1.default.verify(token, SECRET, (err, decoded) => {
                if (err) {
                    if (err.name === 'TokenExpiredError') {
                        return response.status(401).json({ message: 'Token expired' });
                    }
                    return response.status(401).json({ message: 'Failed to authenticate token' });
                }
                let data = {
                    user_id: decoded.id,
                    role: decoded.role,
                    firstName: decoded.firstName,
                    lastName: decoded.lastName,
                    email: decoded.email,
                };
                return response.status(200).json({ status: 200, message: "Token is valid", data });
            });
        }
        else {
            return response.status(401).json({ message: 'Failed to authenticate token' });
        }
    }
    catch (e) {
        return (0, handleResponse_1.sendResponse)(request, response, {
            status: ResponseStatus_1.STATUS_CODE.SERVER_ERROR_CODE,
            message: ResponseStatus_1.RESPONSE_MESSAGE.INTERNAL_ERROR
        });
    }
});
exports.verifyToken = verifyToken;
