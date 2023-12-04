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
exports.loginConsult = exports.login = void 0;
const login_models_1 = require("../models/login.models");
const connection_1 = require("../connection/connection");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logins = (yield login_models_1.Login.findAll());
        return res.status(200).json(logins);
    }
    catch (error) {
        return res.status(500).json({ "message": "Hubo un error", "error": error });
    }
});
exports.login = login;
function loginConsult(username, password) {
    return new Promise((resolve, reject) => {
        const sql = `Select * from login where username ='${username}' and password = '${password}'`;
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
exports.loginConsult = loginConsult;
