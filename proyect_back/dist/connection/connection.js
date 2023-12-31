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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection1 = exports.connection = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const client_models_1 = require("../models/client.models");
const loans_models_1 = require("../models/loans.models");
const wallets_models_1 = require("../models/wallets.models");
const collectors_models_1 = require("../models/collectors.models");
const login_models_1 = require("../models/login.models");
const users_models_1 = require("../models/users.models");
const mysql2_1 = __importDefault(require("mysql2"));
exports.connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "bd_invercreditos",
    logging: false,
    models: [client_models_1.Client, loans_models_1.Loans, wallets_models_1.Wallets, collectors_models_1.Collectors, login_models_1.Login, users_models_1.User]
});
exports.connection1 = mysql2_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_invercreditos'
});
function connectioDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.connection.sync();
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.default = connectioDB;
