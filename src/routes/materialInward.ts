import { Request, Response, Router } from 'express';
import { 
  addMaterialInward, 
  getMaterialInward, 
  updateMaterialInward,
  removeMaterialInward ,
  getJobs,
  assignJob,
  getProduction,
  assignFiling,
  forwardJob,
  getFiling,
  toDispatch,
  forwardFiling,
  getDispatch,
  getDashboard,
  getCeaningData,
  updateCeaning,
  updateDispatch,
  updateProduction
 } from '../controllers/MaterialInwardController'
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = Router();

const storage = multer.diskStorage({
    destination: function (req: Request,file: Express.Multer.File, cb: any) {
        let uploadPath = __uploadDir+'/materialInwards';
        if (!fs.existsSync(uploadPath)) 
            fs.mkdirSync(uploadPath);
        cb(null, uploadPath);
    },
    filename: function (req: Request,file: Express.Multer.File, cb: any) {
      const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9);
      req.body.dcImage = uniqueSuffix + path.extname(file.originalname);
      cb(null,uniqueSuffix + path.extname(file.originalname));
    },
  });
  
const upload = multer({ storage: storage });


router.post('/add',upload.single('dcImage'),addMaterialInward)
router.get('/get',getMaterialInward)
router.post('/edit',upload.single('dcImage'),updateMaterialInward)
router.post('/remove',removeMaterialInward)
router.get('/jobs',getJobs)
router.get('/getProduction',getProduction)
router.post('/assignJob',assignJob)
router.post('/assignFiling',assignFiling)
router.post('/forwardJob',forwardJob)
router.get('/getFiling',getFiling)
router.post('/toDispatch',toDispatch)
router.post('/forwardFiling',forwardFiling)
router.get('/getDispatch',getDispatch)
router.get('/getDashboard',getDashboard)
router.get('/getCleaning',getCeaningData)
router.put('/updateCeaning',updateCeaning)
router.put('/updateDispatch',updateDispatch)
router.put('/updateProduction',updateProduction)



export default router;