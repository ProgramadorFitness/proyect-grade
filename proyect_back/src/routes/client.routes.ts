import { Router } from "express";
import { list, create, delet, list1 } from "../controllers/client.controller";

const ClientRoutes = Router()

//--List
ClientRoutes.get("/list", list)

//--List1
ClientRoutes.get("/list1/:id", list1)

//--Create
ClientRoutes.post("/create", create)

//--delete
ClientRoutes.delete("/delete/:id", delet)

//--list-identication
ClientRoutes.get("/ident/:id")

export default ClientRoutes