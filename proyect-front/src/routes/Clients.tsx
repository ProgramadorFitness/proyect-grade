import React, { useEffect, useState } from 'react'
import Table_Client from '../componentes/Table_Client';
import { Client } from '../models/client_model';
import Api from '../controllers/peticiones';
import Modal_Client from '../componentes/Modal_Client';
import DefaultLayout from '../layout/DefaultLayout';


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
      <DefaultLayout>
        
        <div className='pt-6'>
        <Modal_Client/>
        </div>
        <div className='py-8'>
          <Table_Client data={state.listClient}/>
        </div>
      </DefaultLayout>
      
    </div>
  )
}

export default Clients