import { Router } from "express";
import { list, create, delet } from "../controllers/client.controller";

const ClientRoutes = Router()

//--List
ClientRoutes.get("/list", list)

//--Create
ClientRoutes.post("/create", create)

//--delete
ClientRoutes.delete("/delete/:id", delet)

export default ClientRoutes