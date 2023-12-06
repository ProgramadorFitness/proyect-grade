import express,{ Router } from "express";
import { list, create, delet, list1, savePdf } from "../controllers/client.controller";
import { connection1 } from "../connection/connection";

const ClientRoutes = Router()
const ClientRoutes1 = express()

//--List
ClientRoutes.get("/list", list)

//--List1
ClientRoutes.get("/list1/:id", list1)

//--Create
ClientRoutes.post("/create", create)

//--delete
ClientRoutes.delete("/delete/:id", delet)

//--list-identication
ClientRoutes.get("/ident/:id")

//--Save Pdf
/*ClientRoutes1.post('/savePdf', savePdf().single('archivo'), async (req, res) => {
    const nombreArchivo = req.file?.filename;
    const rutaArchivo = req.file?.path;

    const [result] = await connection1.execute(
        'INSERT INTO archive (name, route) VALUES (?, ?)',
        [nombreArchivo, rutaArchivo]
      );

      res.send('Archive ok');
})*/

export default ClientRoutes