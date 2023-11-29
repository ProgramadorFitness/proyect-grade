import { RequestHandler } from "express";
import { Login } from "../models/login.models";

export const login: RequestHandler = async (req, res) => {
    const {username, password} = req.params
    try {
        await Login.findAll({where: {username, password } })
        return res.status(200).json({"message":"Loggin Succes"})
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }
}