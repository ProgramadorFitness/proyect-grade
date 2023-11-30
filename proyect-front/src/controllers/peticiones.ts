import axios, { AxiosResponse } from "axios";
import { User } from "../types/types";

export default class Api {
    public getClients(){
        return axios.get("http://localhost:5001/api/clients/list")
    }

    public getLogin(username: string, password:string){

        return axios.post('http://localhost:5001/api/login/login', {username: username, password: password})
        /*.then((response: AxiosResponse<{ token: string}>) => {
            console.log("Respuesta exitosa", response.data);
        })*/

        /*const userData: User = {
            username: username,
            password: password
        }
        return axios.post<User, AxiosResponse<{token: string}>>("http://localhost:5001/api/login/login", userData)
        .then((response: AxiosResponse<{ token: string}>) => {
            console.log("Respuesta exitosa", response.data);
        })
        .catch((error: AxiosError) => {
            console.error('Error al iniciar sesión:', error.response);
        })*/
    }

    public getLoans(){
        return axios.get("http://localhost:5001/api/loans/list")
    }

    public getUsers(){
        return axios.get("http://localhost:5001/api/users/list")
    }
}