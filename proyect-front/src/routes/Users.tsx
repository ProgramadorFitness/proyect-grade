import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Modal_Signup from '../componentes/Modal_Signup'

const Users = () => {
  return (
    <DefaultLayout>
        <div className='pt-6'>
        <Modal_Signup/>
        </div>
    </DefaultLayout>
  )
}

export default Users