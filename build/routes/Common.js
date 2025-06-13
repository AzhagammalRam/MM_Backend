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
const express_1 = require("express");
const CommonController_1 = require("../controllers/CommonController");
const route = (0, express_1.Router)();
route.get("/get-job-type", CommonController_1.getJobType);
route.post("/shift/add", CommonController_1.addShift);
route.get("/shift/get", CommonController_1.getShift);
route.put("/shift/update", CommonController_1.updateShift);
route.post("/shift/remove", CommonController_1.removeShift);
route.post("/floor/add", CommonController_1.addFloor);
route.get("/floor/get", CommonController_1.getFloor);
route.put("/floor/update", CommonController_1.updateFloor);
route.post("/floor/remove", CommonController_1.removeFloor);
route.get("/getIncharge", CommonController_1.getIncharge);
route.get("/getAllFloor", CommonController_1.getAllFloor);
route.get("/getAllShift", CommonController_1.getAllShift);
route.get("/getAllUnit", CommonController_1.getAllUnit);
route.post("/role/add", CommonController_1.addRole);
route.get("/role/get", CommonController_1.getRole);
route.put("/role/update", CommonController_1.updateRole);
route.get("/getAllRole", CommonController_1.getAllRole);
route.post("/user/add", CommonController_1.addUser);
route.get("/user/get", CommonController_1.getUser);
route.put("/user/update", CommonController_1.updateUser);
route.post("/user/remove", CommonController_1.removeUser);
route.get("/getAllMaterial", CommonController_1.getAllMaterial);
route.post("/addJobTypeMaterial", CommonController_1.addJobTypeMaterial);
route.put("/updateJobTypeMaterial", CommonController_1.updateJobTypeMaterial);
route.get("/getJobTypeMaterial", CommonController_1.getJobTypeMaterial);
route.post("/addInventory", CommonController_1.addInventory);
route.put("/updateInventory", CommonController_1.updateInventory);
route.get("/getInventory", CommonController_1.getInventory);
route.get("/getAllClient", CommonController_1.getAllClient);
route.get("/getDashboardJob", CommonController_1.getDashboardJob);
route.get("/getJobTypeMaterialList", CommonController_1.getJobTypeMaterialList);
route.get("/getJobTypeMaterialDataList", CommonController_1.getJobTypeMaterialDataList);
route.get("/non-blocking", (req, res) => {
    res.status(200).send("non-blociking");
});
route.get("/blocking", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const promise = new Promise((Resolve, Reject) => {
        let counter = 0;
        for (let i = 0; i < 20000000000; i++) {
            counter++;
        }
        Resolve(counter);
    });
    promise.then((res) => {
        console.log(res);
    });
    res.status(200).send("blociking");
}));
exports.default = route;
