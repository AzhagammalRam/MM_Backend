import express from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

import JobTypeRouter from "./routes/jobType";
import Unit from "./routes/Unit";
import AuthRoute from "./routes/Auth";
import ClientRoute from "./routes/Client";
import material from "./routes/Material";
import commonRoute from "./routes/Common";
import materialInwardRoute from "./routes/materialInward";

declare global {
  var __uploadDir: string;
  var __srcDir: string;
}
export function createApp() {
  const app = express();
  global.__uploadDir = __dirname + "/uploads";
  global.__srcDir = __dirname;
  
  let CLIENT_URLS = ["http://localhost:3000","http://job-card-zaara.s3-website.ap-south-1.amazonaws.com"]
  app.use(cookieParser());
  app.use(cors({
    origin: (origin, callback) => {
      if (CLIENT_URLS.includes(origin!) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(compression());
  app.use(express.static(__uploadDir + "/materialInward"));
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


  app.use("/api/auth", AuthRoute);
  app.use("/api/client", ClientRoute);
  app.use("/api/unit", Unit);
  app.use("/api/materials", material);
  app.use("/api/jobType", JobTypeRouter);
  app.use("/api/common", commonRoute);
  app.use("/api/materialInward", materialInwardRoute);

  return app;
}
