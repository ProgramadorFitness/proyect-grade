import { Sequelize } from "sequelize-typescript";
import { Client } from "../models/client.models";
import { Loans } from "../models/loans.models";
import { Wallets } from "../models/wallets.models";
import { Collectors } from "../models/collectors.models";
import { Login } from "../models/login.models";

export const connection = new Sequelize ({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "bd_invercreditos",
    logging: false,
    models: [Client, Loans, Wallets, Collectors, Login]
})


export default async function connectioDB(){
    try {
        await connection.sync()
    } catch (error) {
        console.log(error)
    }
}

