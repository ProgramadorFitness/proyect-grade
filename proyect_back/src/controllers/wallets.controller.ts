import { RequestHandler } from "express";
import { Wallets} from "../models/wallets.models";

export const list: RequestHandler = async (req, res) => {
    try {
        const loans: Wallets[] = await Wallets.findAll()
        return res.status(200).json(loans)
    } catch (error) {
        return res.status(500).json({"message":"Hubo un error", "error": error})
    }
}

export const create: RequestHandler = async (req, res) => {
    try {
        await Wallets.create({...req.body})
        return res.status(200).json({"message":"wallet save"})
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }
}

export const delet: RequestHandler = async (req, res) => {
    const {id} = req.params
    try {
        await Wallets.destroy({where: {id}})
        return res.status(200).json({"message":"wallet Destroy"})
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }
}