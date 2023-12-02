import { RequestHandler } from "express";
import { Client } from "../models/client.models";
import connectioDB, {connection1} from "../connection/connection";
import { QueryError } from "mysql2";


export const list: RequestHandler = async (req, res) => {
    try {
        const clients: Client[] = await Client.findAll()
        return res.status(200).json(clients)
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }
}

export const list1: RequestHandler = async (req, res) => {
    const {id} = req.params
    try {
        const clients: Client[] = await Client.findAll({where: {id}})
        return res.status(200).json(clients)
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }
}

export const create: RequestHandler = async (req, res) => {
    try {
        await Client.create({...req.body})
        return res.status(200).json({"message":"Client save"})
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }
}

export const delet: RequestHandler = async (req, res) => {
    const {id} = req.params
    try {
        await Client.destroy({where: {id}})
        return res.status(200).json({"message":"Client Destroy"})
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }
}

export  function ClientsConsult(id:string): Promise<Client[]> {
    
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM clients WHERE id_number LIKE '${id}%'`;
      
      connection1.query(sql, (error: QueryError, results: Client[]) => {
        if (error) {
            reject(error);
          } else {
            resolve(results);
          }
      })
    });
  }