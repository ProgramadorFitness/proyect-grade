import express, { json, urlencoded } from "express";
import morgan from "morgan";
import cors from 'cors'
import connectioDB from "./connection/connection";

//--Import Routes Clients
import ClientRoutes from './routes/client.routes';
import WalletsRoutes from "./routes/wallets.routes";
import LoansRoutes from "./routes/loans.routes";
import CollectorsRoutes from "./routes/collectors.routes";
import LoginRoutes from "./routes/login.routes";
import UsersRoutes from "./routes/users.routes";



const app = express()

//--config
app.set("port", process.env.PORT || 5001)

//--middlleswares
app.use(morgan("dev"))
app.use(json())
app.use(cors())
app.use(urlencoded({extended: false}))

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

//--Login MOngoose
require("dotenv").config();

export default app;