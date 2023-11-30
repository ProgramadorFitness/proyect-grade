import { Router } from "express";
import { login } from "../controllers/login.controllers";

const LoginRoutes = Router()

//--List
LoginRoutes.post("/login", login)




export default LoginRoutes