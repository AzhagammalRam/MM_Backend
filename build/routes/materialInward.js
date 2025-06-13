"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MaterialInwardController_1 = require("../controllers/MaterialInwardController");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const router = (0, express_1.Router)();
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        let uploadPath = __uploadDir + '/materialInwards';
        if (!fs_1.default.existsSync(uploadPath))
            fs_1.default.mkdirSync(uploadPath);
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9);
        req.body.dcImage = uniqueSuffix + path_1.default.extname(file.originalname);
        cb(null, uniqueSuffix + path_1.default.extname(file.originalname));
    },
});
const upload = (0, multer_1.default)({ storage: storage });
router.post('/add', upload.single('dcImage'), MaterialInwardController_1.addMaterialInward);
router.get('/get', MaterialInwardController_1.getMaterialInward);
router.post('/edit', upload.single('dcImage'), MaterialInwardController_1.updateMaterialInward);
router.post('/remove', MaterialInwardController_1.removeMaterialInward);
router.get('/jobs', MaterialInwardController_1.getJobs);
router.get('/getProduction', MaterialInwardController_1.getProduction);
router.post('/assignJob', MaterialInwardController_1.assignJob);
router.post('/assignFiling', MaterialInwardController_1.assignFiling);
router.post('/forwardJob', MaterialInwardController_1.forwardJob);
router.get('/getFiling', MaterialInwardController_1.getFiling);
router.post('/toDispatch', MaterialInwardController_1.toDispatch);
router.post('/forwardFiling', MaterialInwardController_1.forwardFiling);
router.get('/getDispatch', MaterialInwardController_1.getDispatch);
router.get('/getDashboard', MaterialInwardController_1.getDashboard);
router.get('/getCleaning', MaterialInwardController_1.getCeaningData);
router.put('/updateCeaning', MaterialInwardController_1.updateCeaning);
router.put('/updateDispatch', MaterialInwardController_1.updateDispatch);
router.put('/updateProduction', MaterialInwardController_1.updateProduction);
exports.default = router;
