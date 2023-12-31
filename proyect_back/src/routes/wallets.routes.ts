import express, { json,Router, urlencoded, Request, Response, RequestHandler } from "express";import { list, create, delet } from "../controllers/wallets.controller";
import app from "../app";

import { Wallets } from "../models/wallets.models";

const WalletsRoutes = Router()

//--List
WalletsRoutes.get("/list", list)

//--Create
WalletsRoutes.post("/create", create)

//--delete
WalletsRoutes.delete("/delete/:id", delet)

//--listjoin
WalletsRoutes.get("/listjoin/:id")


  


export default WalletsRoutes