import axios from "axios";

export default class Api {
    public getClients(){
        return axios.get("http://localhost:5001/api/clients/list")
    }

    public getLogin(username: string, password: string){
        return axios.get("http://localhost:5001/api/login/login"+ "/" + username + "/" + password)
    }

    public getLoans(){
        return axios.get("http://localhost:5001/api/loans/list")
    }
}