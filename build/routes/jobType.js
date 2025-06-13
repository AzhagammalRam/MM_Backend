"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JobTypeController_1 = require("../controllers/JobTypeController");
const router = (0, express_1.Router)();
// Define routes
router.post('/job-types', JobTypeController_1.addJobType); // Route to create a JoType
router.get('/job-types', JobTypeController_1.getJobTypes); // Route to fetch JoTypes
router.put('/job-types', JobTypeController_1.updateJobType); // Route to update a JoType
router.delete('/job-types', JobTypeController_1.removeJobType); // Route to remove a JoType
exports.default = router;
