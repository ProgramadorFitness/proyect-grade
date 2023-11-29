import { Router } from "express";
import { login } from "../controllers/login.controllers";

const LoginRoutes = Router()

//--List
LoginRoutes.get("/login/:username/:password", login)




export default LoginRoutes