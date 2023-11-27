import { Sequelize } from "sequelize-typescript";
import { Client } from "../models/client.models";

export const connection = new Sequelize ({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "bd_invercreditos",
    logging: false,
    models: [Client]
})

export default async function connectioDB(){
    try {
        await connection.sync()
    } catch (error) {
        console.log(error)
    }
}