"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jobType_1 = __importDefault(require("./routes/jobType"));
const Unit_1 = __importDefault(require("./routes/Unit"));
const Auth_1 = __importDefault(require("./routes/Auth"));
const Client_1 = __importDefault(require("./routes/Client"));
const Material_1 = __importDefault(require("./routes/Material"));
const Common_1 = __importDefault(require("./routes/Common"));
const materialInward_1 = __importDefault(require("./routes/materialInward"));
function createApp() {
    const app = (0, express_1.default)();
    global.__uploadDir = __dirname + "/uploads";
    global.__srcDir = __dirname;
    let CLIENT_URLS = ["http://localhost:3000", "http://job-card-zaara.s3-website.ap-south-1.amazonaws.com"];
    app.use((0, cookie_parser_1.default)());
    app.use((0, cors_1.default)({
        origin: (origin, callback) => {
            if (CLIENT_URLS.includes(origin) || !origin) {
                callback(null, true);
            }
            else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    }));
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json());
    app.use((0, compression_1.default)());
    app.use(express_1.default.static(__uploadDir + "/materialInward"));
    app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
    app.use("/api/auth", Auth_1.default);
    app.use("/api/client", Client_1.default);
    app.use("/api/unit", Unit_1.default);
    app.use("/api/materials", Material_1.default);
    app.use("/api/jobType", jobType_1.default);
    app.use("/api/common", Common_1.default);
    app.use("/api/materialInward", materialInward_1.default);
    return app;
}
