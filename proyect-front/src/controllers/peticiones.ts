import axios from "axios";

export default class Api {
    public getClients(){
        return axios.get("http://localhost:5001/api/clients/list")
    }
}