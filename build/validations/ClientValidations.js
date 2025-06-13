"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidations = void 0;
const joi_1 = __importDefault(require("joi"));
const userValidations = (inputs) => {
    const userSchema = joi_1.default.object({
        firstName: joi_1.default.string().min(1).max(50).required().messages({
            'string.base': 'First name must be a string',
            'any.required': 'First name is required'
        }),
        lastName: joi_1.default.string().min(1).max(50).required().messages({
            'string.base': 'Last name must be a string',
            'any.required': 'Last name is required'
        }),
        email: joi_1.default.string().email().required().messages({
            'string.base': 'Email must be a string',
            'string.email': 'Email must be a valid email address',
            'any.required': 'Email is required'
        }),
        password: joi_1.default.string().min(5).max(20).required().messages({
            'string.base': 'Password must be a string',
            'string.min': 'Password must be at least {#limit} characters long',
            'string.max': 'Password can be at most {#limit} characters long',
            'any.required': 'Password is required'
        }),
    });
    const { error, value } = userSchema.validate(inputs, { abortEarly: false });
    let errMsg = [];
    if (error) {
        errMsg = error.details.map((detail) => detail.message);
    }
    return { error, value, errMsg };
};
exports.userValidations = userValidations;
