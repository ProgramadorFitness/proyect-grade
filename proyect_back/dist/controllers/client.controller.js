"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsConsult = exports.delet = exports.create = exports.list1 = exports.list = void 0;
const client_models_1 = require("../models/client.models");
const connection_1 = require("../connection/connection");
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield client_models_1.Client.findAll();
        return res.status(200).json(clients);
    }
    catch (error) {
        return res.status(500).json({ "message": "Hubo un error", "error": error });
    }
});
exports.list = list;
const list1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const clients = yield client_models_1.Client.findAll({ where: { id } });
        return res.status(200).json(clients);
    }
    catch (error) {
        return res.status(500).json({ "message": "Hubo un error", "error": error });
    }
});
exports.list1 = list1;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client_models_1.Client.create(Object.assign({}, req.body));
        return res.status(200).json({ "message": "Client save" });
    }
    catch (error) {
        return res.status(500).json({ "message": "Hubo un error", "error": error });
    }
});
exports.create = create;
const delet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield client_models_1.Client.destroy({ where: { id } });
        return res.status(200).json({ "message": "Client Destroy" });
    }
    catch (error) {
        return res.status(500).json({ "message": "Hubo un error", "error": error });
    }
});
exports.delet = delet;
function ClientsConsult(id) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM clients WHERE id_number LIKE '${id}%'`;
        connection_1.connection1.query(sql, (error, results) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
exports.ClientsConsult = ClientsConsult;
