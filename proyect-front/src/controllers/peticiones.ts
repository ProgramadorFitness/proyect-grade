import axios from "axios";
import { User } from "../types/types";

export default class Api {
    public getClients(){
        return axios.get("http://localhost:5001/api/clients/list")
    }

    public getClientsIdent(id:string){
        return axios.get(`http://localhost:5001/api/clients/ident/${id}`)
    }

    public getLogin(username: string, password:string){

        return axios.post('http://localhost:5001/api/login/login', {username: username, password: password})
    }

    public getLoans(){
        return axios.get("http://localhost:5001/api/loans/list")
    }

    public getUsers(){
        return axios.get("http://localhost:5001/api/users/list")
    }

    public getWallets(){
        return axios.get("http://localhost:5001/api/wallets/list")
    }

    public getWalletsjoin(id:number){
        return axios.get(`http://localhost:5001/api/wallets/listjoin/${id}`)
    }

    public getLoansjoin(){
        return axios.get("http://localhost:5001/api/loans/listjoin")
    }

    public getLoginSQL(username: string, password:string){
        return axios.get(`http://localhost:5001/api/login/login/${username},${password}`)
    }
}