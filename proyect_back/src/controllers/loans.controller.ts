import { RequestHandler } from "express";
import { Loans} from "../models/loans.models";

export const list: RequestHandler = async (req, res) => {
    try {
        const loans: Loans[] = await Loans.findAll()
        return res.status(200).json(loans)
    } catch (error) {
        return res.status(500).json({"message":"Hubo un error", "error": error})
    }
}

export const create: RequestHandler = async (req, res) => {
    try {
        await Loans.create({...req.body})
        return res.status(200).json({"message":"Client save"})
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }
}

export const delet: RequestHandler = async (req, res) => {
    const {id} = req.params
    try {
        await Loans.destroy({where: {id}})
        return res.status(200).json({"message":"Client Destroy"})
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }
}