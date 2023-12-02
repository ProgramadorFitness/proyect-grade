import express, { json, urlencoded, Request, Response } from "express";
import morgan from "morgan";
import cors from 'cors'
import connectioDB,{connection} from "./connection/connection";
import mysql, { Connection, QueryError } from 'mysql2';

//--Import Routes Clients
import ClientRoutes from './routes/client.routes';
import WalletsRoutes from "./routes/wallets.routes";
import LoansRoutes from "./routes/loans.routes";
import CollectorsRoutes from "./routes/collectors.routes";
import LoginRoutes from "./routes/login.routes";
import UsersRoutes from "./routes/users.routes";
import { Wallets } from "./models/wallets.models";
import bodyParser from "body-parser";
import { walletsConsult } from "./controllers/wallets.controller";
import { Loans } from "./models/loans.models";
import { loansConsult } from "./controllers/loans.controller";
import { ClientsConsult } from "./controllers/client.controller";
import { Client } from "./models/client.models";



export const app = express()

//--config
app.set("port", process.env.PORT || 5001)

//--middlleswares
app.use(morgan("dev"))
app.use(json())
app.use(cors())
app.use(urlencoded({extended: false}))
app.use(express.json())
//app.use(bodyParser.json())

//--conexion
connectioDB()

//--routes
app.get("/api", (req, res) => {
    res.json("client active")
})

app.use("/api/clients", ClientRoutes )
app.use("/api/wallets", WalletsRoutes )
app.use("/api/loans", LoansRoutes )
app.use("/api/collectors", CollectorsRoutes )
app.use("/api/login", LoginRoutes)
app.use("/api/users", UsersRoutes)
//app.use("/api/wallets/listjoin", WalletsRoutes )

//--Join
const connection1: Connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bd_invercreditos'
  });

//--Walltes-Sql
app.get("/api/wallets/listjoin/:id", async (req: Request, res: Response, any) => {
    const id = req.params.id
    try {
        const results: Wallets[] = await walletsConsult(id);
        res.json(results)
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
        
    }
} )



//--Login-Sql
app.get("/api/loans/listjoin", async (req: Request, res: Response, any) => {
    try {
        const results: Loans[] = await loansConsult();
        res.json(results)
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
        
    }
} )

//--Client-Sql
app.get("/api/clients/ident/:id", async (req: Request, res: Response, any) => {
    const id = req.params.id
    try {
        const results: Client[] = await ClientsConsult(id);
        res.json(results)
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
        
    }
} )

export default app;