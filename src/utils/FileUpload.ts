import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { Request, Response } from 'express';

export const fileUpload = async(folder: string,fileName:string,req: Request, res: Response):Promise<any> => {
    return new Promise((resolve, reject) => {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
            const uploadPath = path.join(__uploadDir);
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, { recursive: true });
            }
            cb(null, uploadPath);
            },
            filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
            },
        });

        const upload = multer({ storage });

        upload.single(fileName)(req, res, (err) => {
            if (err) {
               reject({error:true})
            }
            resolve({
                files:req.files,
                error:false
            });
        });
    })
};
