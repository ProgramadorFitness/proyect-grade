"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = require("../controllers/client.controller");
const ClientRoutes = (0, express_1.Router)();
//--List
ClientRoutes.get("/list", client_controller_1.list);
//--Create
ClientRoutes.post("/create", client_controller_1.create);
//--delete
ClientRoutes.delete("/delete/:id", client_controller_1.delet);
exports.default = ClientRoutes;
