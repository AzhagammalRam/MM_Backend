"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESPONSE_MESSAGE = exports.STATUS_CODE = void 0;
exports.STATUS_CODE = {
    SUCCESS_CODE: 200,
    CREATED_CODE: 201,
    BAD_REQUEST_CODE: 400,
    UNAUTHORIZED_CODE: 401,
    FORBIDDEN_CODE: 403,
    NOT_FOUND_CODE: 404,
    SERVER_ERROR_CODE: 500
};
exports.RESPONSE_MESSAGE = {
    INTERNAL_ERROR: "Internal server error",
    VALIDATION_ERROR: "Validation error"
};
