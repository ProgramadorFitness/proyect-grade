"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multer = exports.app = void 0;
const express_1 = __importStar(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./connection/connection"));
//--Import Routes Clients
const client_routes_1 = __importDefault(require("./routes/client.routes"));
const wallets_routes_1 = __importDefault(require("./routes/wallets.routes"));
const loans_routes_1 = __importDefault(require("./routes/loans.routes"));
const collectors_routes_1 = __importDefault(require("./routes/collectors.routes"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const wallets_controller_1 = require("./controllers/wallets.controller");
const loans_controller_1 = require("./controllers/loans.controller");
const client_controller_1 = require("./controllers/client.controller");
const login_controllers_1 = require("./controllers/login.controllers");
exports.app = (0, express_1.default)();
exports.multer = require('multer');
//--config
exports.app.set("port", process.env.PORT || 5001);
//--middlleswares
exports.app.use((0, morgan_1.default)("dev"));
exports.app.use((0, express_1.json)());
exports.app.use((0, cors_1.default)());
exports.app.use((0, express_1.urlencoded)({ extended: false }));
exports.app.use(express_1.default.json());
const upload = (0, exports.multer)({ dest: 'uploads/' });
//--conexion
(0, connection_1.default)();
//--routes
exports.app.get("/api", (req, res) => {
    res.json("client active");
});
exports.app.use("/api/clients", client_routes_1.default);
exports.app.use("/api/wallets", wallets_routes_1.default);
exports.app.use("/api/loans", loans_routes_1.default);
exports.app.use("/api/collectors", collectors_routes_1.default);
exports.app.use("/api/login", login_routes_1.default);
exports.app.use("/api/users", users_routes_1.default);
//app.use("/api/wallets/listjoin", WalletsRoutes )
//--Walltes-Sql
exports.app.get("/api/wallets/listjoin/:id", (req, res, any) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const results = yield (0, wallets_controller_1.walletsConsult)(id);
        res.json(results);
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
}));
//--Login-Sql
exports.app.get("/api/loans/listjoin", (req, res, any) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield (0, loans_controller_1.loansConsult)();
        res.json(results);
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
}));
//--Client-Sql
exports.app.get("/api/clients/ident/:id", (req, res, any) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const results = yield (0, client_controller_1.ClientsConsult)(id);
        res.json(results);
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
}));
//--Login-Sql
exports.app.get("/api/login/login/:username,:password", (req, res, any) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.params.username;
    const password = req.params.password;
    try {
        const results = yield (0, login_controllers_1.loginConsult)(username, password);
        res.json(results);
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
}));
//--Save-1-Pdf
exports.app.post("/api/clients/savePdf", upload.single('IMG_0421'), (req, res, any) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.file);
    (0, client_controller_1.savePdf)(req.file);
    res.send('End');
}));
//--Save-several-Pdf
exports.app.post("/api/clients/savePdfs", upload.array('IMG_0421', 10), (req, res, any) => {
    req.files.map(client_controller_1.savePdf);
    res.send('End');
});
exports.default = exports.app;
