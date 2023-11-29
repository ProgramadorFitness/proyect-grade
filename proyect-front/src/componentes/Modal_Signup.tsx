import React from 'react';
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import {  useNavigate } from "react-router-dom";
import { API_URL } from "../auth/constans";
import { AuthResponseError } from "../types/types";

export default function Modal_Signup()  {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    
    const auth = useAuth();

    const [errorResponse, setErrorResponse] = useState("");

    const goTo = useNavigate();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement> ){
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    name,
                    password,
                }),
            });

            if(response.ok){
                console.log("User created Successful");
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

   /* if(auth.isAuthenticated){
      return <Navigate to="/"/>
    }*/
     const [showModal, setShowModal] = React.useState(false)

    return (
      <>
      <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-black bg-slate-300 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-300 dark:hover:bg-slate-400 dark:focus:ring-slate-400" type="button"
      onClick={() => setShowModal(true)}
      >
          Add Loan
      </button>
  
      {showModal ? (
          <>
          <div className=' p-8 fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center '>
               <div className='bg-slate-400  rounded flex flex-col items-center gap-5'>
                    <div className="p-8">

                    <form className="grid justify-items-center text-center" onSubmit={handleSubmit}>
                            <div className="border-b border-gray-900/10  ">
                            <h1 className=" font-semibold leading-7 text-gray-900 text-3xl">Login</h1>
                            </div>
                            {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
                            <label className="mt-4 block text-sm font-medium leading-6 text-gray-900">Username</label>
                            <input className="text-center mt-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>

                            <label className="mt-4 block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <input className="text-center mt-6 text-center mt-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>

                            <label className="mt-4 block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <input className="text-center mt-6 text-center mt-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>

                            <div className='flex'>
                                <div>
                                <button className="mt-4 block rounded-md bg-slate-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                            >Save</button>
                                </div>
                            <div className='px-8'>
                            <button className="mt-4 block rounded-md bg-slate-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                             onClick={() => setShowModal(false)}>Cancel</button>
                            </div>
                            </div>

                         </form>
            
                    </div>
                </div>
            </div>
          </>
      ): null}
      </>
    )
  }


  

