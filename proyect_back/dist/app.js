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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const app = (0, express_1.default)();
//--config
app.set("port", process.env.PORT || 5001);
//--middlleswares
app.use((0, morgan_1.default)("dev"));
app.use((0, express_1.json)());
app.use((0, cors_1.default)());
app.use((0, express_1.urlencoded)({ extended: false }));
//--conexion
(0, connection_1.default)();
//--routes
app.get("/api", (req, res) => {
    res.json("client active");
});
app.use("/api/clients", client_routes_1.default);
app.use("/api/wallets", wallets_routes_1.default);
app.use("/api/loans", loans_routes_1.default);
app.use("/api/collectors", collectors_routes_1.default);
app.use("/api/login", login_routes_1.default);
app.use("/api/users", users_routes_1.default);
//--Login MOngoose
require("dotenv").config();
exports.default = app;
