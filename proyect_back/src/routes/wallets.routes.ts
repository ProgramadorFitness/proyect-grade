import { Router } from "express";
import { list, create, delet } from "../controllers/wallets.controller";

const WalletsRoutes = Router()

//--List
WalletsRoutes.get("/list", list)

//--Create
WalletsRoutes.post("/create", create)

//--delete
WalletsRoutes.delete("/delete/:id", delet)

export default WalletsRoutes