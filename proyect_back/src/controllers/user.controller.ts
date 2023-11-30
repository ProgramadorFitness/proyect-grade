import { RequestHandler } from "express";
import { User } from "../models/users.models";

export const list: RequestHandler = async (req, res) => {
    try {
        const users: User[] = await User.findAll()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }
}

export const list1: RequestHandler = async (req, res) => {
    const {id} = req.params
    try {
        const users: User[] = await User.findAll({where: {id}})
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }
}

export const create: RequestHandler = async (req, res) => {
    try {
        await User.create({...req.body})
        return res.status(200).json({"message":"User save"})
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }
}

export const delet: RequestHandler = async (req, res) => {
    const {id} = req.params
    try {
        await User.destroy({where: {id}})
        return res.status(200).json({"message":"User Destroy"})
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }
}