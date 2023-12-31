import { Sequelize } from "sequelize-typescript";
import { Client } from "../models/client.models";
import { Loans } from "../models/loans.models";
import { Wallets } from "../models/wallets.models";
import { Collectors } from "../models/collectors.models";
import { Login } from "../models/login.models";
import { User } from "../models/users.models";
import mysql, { Connection } from "mysql2";

export const connection = new Sequelize ({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "bd_invercreditos",
    logging: false,
    models: [Client, Loans, Wallets, Collectors, Login, User]
})

export const connection1: Connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bd_invercreditos'
  });


export default async function connectioDB(){
    try {
        await connection.sync()
    } catch (error) {
        console.log(error)
    }
}

