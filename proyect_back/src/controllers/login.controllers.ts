import { RequestHandler } from "express";
import { Login } from "../models/login.models";

export const login: RequestHandler = async (req, res) => {
    try {
        const logins = (await Login.findAll())
        return res.status(200).json(logins)
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }


}