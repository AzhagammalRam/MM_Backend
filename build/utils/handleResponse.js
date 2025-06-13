"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (req, res, data) => {
    return res.status(data.status).json(data);
};
exports.sendResponse = sendResponse;
