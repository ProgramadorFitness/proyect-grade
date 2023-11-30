import { Router } from "express";
import { list, create, delet, list1 } from "../controllers/user.controller";

const UsersRoutes = Router()

//--List
UsersRoutes.get("/list", list)

//--List1
UsersRoutes.get("/list1/:id", list1)

//--Create
UsersRoutes.post("/create", create)

//--delete
UsersRoutes.delete("/delete/:id", delet)

export default UsersRoutes