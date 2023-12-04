import { RequestHandler } from "express";
import { Login } from "../models/login.models";
import connectioDB, {connection1} from "../connection/connection";

import { QueryError } from "mysql2";


export const login: RequestHandler = async (req, res) => {
    try {
        const logins = (await Login.findAll())
        return res.status(200).json(logins)
    } catch (error) {
        return res.status(500).json({"message": "Hubo un error", "error": error})
    }


}

export  function loginConsult(username:string , password:string): Promise<Login[]> {
    return new Promise((resolve, reject) => {
      const sql = `Select * from login where username ='${username}' and password = '${password}'`;
      
      connection1.query(sql, (error: QueryError, results: Login[]) => {
        if (error) {
            reject(error);
          } else {
            resolve(results);
          }
      })
    });
  }
