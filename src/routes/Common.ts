import { Router,Request,Response } from "express";
import {
  getJobType,
  addShift,
  getShift,
  updateShift,
  removeShift,
  addFloor,
  getFloor,
  updateFloor,
  removeFloor,
  getIncharge,
  getAllFloor,
  getAllShift,
  getAllRole,
  addRole,
  getRole,
  updateRole,
  addUser,
  getUser,
  updateUser,
  removeUser,
  getAllUnit,
  getAllMaterial,
  addJobTypeMaterial,
  updateJobTypeMaterial,
  getJobTypeMaterial,
  addInventory,
  updateInventory,
  getInventory,
  getJobTypeMaterialList,
  getJobTypeMaterialDataList,
  getAllClient,
  getDashboardJob
} from "../controllers/CommonController";

const route = Router();

route.get("/get-job-type", getJobType);
route.post("/shift/add", addShift);
route.get("/shift/get", getShift);
route.put("/shift/update", updateShift);
route.post("/shift/remove", removeShift);
route.post("/floor/add", addFloor);
route.get("/floor/get", getFloor);
route.put("/floor/update", updateFloor);
route.post("/floor/remove", removeFloor);
route.get("/getIncharge", getIncharge);
route.get("/getAllFloor", getAllFloor);
route.get("/getAllShift", getAllShift);
route.get("/getAllUnit", getAllUnit);
route.post("/role/add", addRole);
route.get("/role/get", getRole);
route.put("/role/update", updateRole);
route.get("/getAllRole", getAllRole);
route.post("/user/add", addUser);
route.get("/user/get", getUser);
route.put("/user/update", updateUser);
route.post("/user/remove", removeUser);
route.get("/getAllMaterial", getAllMaterial);
route.post("/addJobTypeMaterial", addJobTypeMaterial);
route.put("/updateJobTypeMaterial", updateJobTypeMaterial);
route.get("/getJobTypeMaterial", getJobTypeMaterial);
route.post("/addInventory", addInventory);
route.put("/updateInventory", updateInventory);
route.get("/getInventory", getInventory);
route.get("/getAllClient", getAllClient);
route.get("/getDashboardJob", getDashboardJob);
route.get("/getJobTypeMaterialList", getJobTypeMaterialList);
route.get("/getJobTypeMaterialDataList", getJobTypeMaterialDataList);
route.get("/non-blocking",(req:Request,res:Response)=>{
     res.status(200).send("non-blociking")
} );
route.get("/blocking",async(req:Request,res:Response)=>{
  const promise = new Promise((Resolve,Reject)=>{
    let counter:number = 0;
    for  (let i =0 ; i < 20000000000 ; i++){
     counter++
    }
    Resolve(counter)
  })
  promise.then((res)=>{
    console.log(res)
  })
 
  res.status(200).send("blociking")
} );


export default route;
