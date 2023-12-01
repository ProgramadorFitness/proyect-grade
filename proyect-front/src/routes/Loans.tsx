import { useEffect, useState } from 'react'
import Modal_Loan from '../componentes/Modal_Loan'
import Table_Loan from '../componentes/Table_Loan'
import Api from '../controllers/peticiones'
import DefaultLayout from '../layout/DefaultLayout'
import { Loan } from '../models/models'


interface State {
  loans: Loan | null
  listLoans: Loan[]
}

const Loans = () => {

  const[state, setState] = useState<State>({
    loans: null,
    listLoans:[]
})

useEffect(() => {
    (async function getLoans() {
        const api = new Api()
        const response = (await api.getLoansjoin()).data
        setState({loans:null, listLoans:response})
    })();
},[]);

  return (
    <DefaultLayout>
        <div className='pt-6'>
        <Modal_Loan/>
        </div>
        <div className='py-8'>
        <Table_Loan data={state.listLoans}/>
        </div>
    </DefaultLayout>
  )
}

export default Loans