import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthResponseError } from "../types/types";
import Api from '../controllers/peticiones';




export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState(false)
    
    const auth = useAuth();

    const [errorResponse, setErrorResponse] = useState("");

    const goTo = useNavigate();



   if(auth.isAuthenticated){
      return <Navigate to="/client"/>
    }
    return (

        <DefaultLayout>
            <div className='fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center'>
                <div className='bg-slate-400  rounded flex flex-col items-center gap-5'>
                    <div className="p-8">
                        <form className="grid justify-items-center text-center" >
                            <div className="border-b border-gray-900/10  ">
                            <h1 className=" font-semibold leading-7 text-gray-900 text-3xl">Login</h1>
                            </div>
                            {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
                            <label className="mt-4 block text-sm font-medium leading-6 text-gray-900">Username</label>
                            <input className="text-center mt-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                            type="text"
                            value={username}
                            onChange={(e)=>{setUsername(e.target.value)}}
                            />

                            <label className="mt-4 block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <input className="text-center mt-6 text-center mt-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                            type="text"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            />

                            <button className="mt-4 block rounded-md bg-slate-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                            >Login</button>
                         </form>
                    </div>
                </div>
            </div>
            
        </DefaultLayout>
    
    );
}