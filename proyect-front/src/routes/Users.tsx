import React, { useEffect, useState } from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Modal_Signup from '../componentes/Modal_Signup'
import { User } from '../models/models'
import Table_User from '../componentes/Table_User'
import Api from '../controllers/peticiones'
import Modal_Add_Users from '../componentes/Modal_Add_User'

interface State {
  user: User | null
  listUser: User[]
}

const Users = () => {

  const[state, setState] = useState<State>({
    user: null,
    listUser:[]
  })

  useEffect(() => {
    (async function getClients() {
        const api = new Api()
        const response = (await api.getUsers()).data
        setState({user:null, listUser:response})
    })();
},[]);

  return (
    <DefaultLayout>
      <div className='flex pt-6'>
      <div className='ps-6'>
        <Modal_Signup/>
        </div>
        <div className='ps-8'>
        <Modal_Add_Users/>
        </div>
      </div>
        <div className='py-8'>
          <Table_User data={state.listUser}/>
        </div>
    </DefaultLayout>
  )
}

export default Users