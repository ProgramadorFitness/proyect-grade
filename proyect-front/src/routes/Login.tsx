import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../auth/constans";
import { AuthResponseError } from "../types/types";



export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const auth = useAuth();

    const [errorResponse, setErrorResponse] = useState("");

    const goTo = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement> ){
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if(response.ok){
                console.log("Login Successful");
                setErrorResponse("");

                goTo("/");
            }else {
                console.log("Something went wrong");
                const json = await response.json() as AuthResponseError;
                setErrorResponse(json.body.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    if(auth.isAuthenticated){
      return <Navigate to="/dashboard"/>
    }
    return (

        <DefaultLayout>
            <form className="grid justify-items-center text-center" onSubmit={handleSubmit}>
                <h1 className="mt-6 text-base font-semibold leading-7 text-gray-900 text-4xl">Login</h1>
                {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
                <label className="mt-9 block text-sm font-medium leading-6 text-gray-900">Username</label>
                <input className="text-center mt-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>

                <label className="mt-6 block text-sm font-medium leading-6 text-gray-900">Password</label>
                <input className="text-center mt-6 text-center mt-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>

                <button className="mt-6 block rounded-md bg-slate-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400">Login</button>
            </form>
        </DefaultLayout>
    
    );
}