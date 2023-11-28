import React, { useEffect, useState } from 'react'
import Table_Client from '../componentes/Table_Client';
import { Client } from '../models/client_model';
import Api from '../controllers/peticiones';


interface State {
    client: Client | null
    listClient: Client[]
}


const Clients = () => {

    const[state, setState] = useState<State>({
        client: null,
        listClient:[]
    })
 
    useEffect(() => {
        (async function getClients() {
            const api = new Api()
            const response = (await api.getClients()).data
            setState({client:null, listClient:response})
        })();
    },[]);

  return (
    <div>
      <Table_Client data={state.listClient}/>
    </div>
  )
}

export default Clients