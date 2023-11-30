"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const UsersRoutes = (0, express_1.Router)();
//--List
UsersRoutes.get("/list", user_controller_1.list);
//--List1
UsersRoutes.get("/list1/:id", user_controller_1.list1);
//--Create
UsersRoutes.post("/create", user_controller_1.create);
//--delete
UsersRoutes.delete("/delete/:id", user_controller_1.delet);
exports.default = UsersRoutes;
