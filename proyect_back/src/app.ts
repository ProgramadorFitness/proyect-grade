import express, { json, urlencoded } from "express";
import morgan from "morgan";
import cors from 'cors'
import connectioDB from "./connection/connection";

//--Import Routes Clients
import ClientRoutes from './routes/client.routes'

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

export default app;