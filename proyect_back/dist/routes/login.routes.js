"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controllers_1 = require("../controllers/login.controllers");
const LoginRoutes = (0, express_1.Router)();
//--List
LoginRoutes.get("/login/:username/:password", login_controllers_1.login);
exports.default = LoginRoutes;
