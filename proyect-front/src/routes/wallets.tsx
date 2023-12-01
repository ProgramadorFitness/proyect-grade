import { useEffect, useState } from 'react'
import Table_Wallets from '../componentes/Table_Wallets'
import DefaultLayout from '../layout/DefaultLayout'
import {  Wallet } from '../models/models'
import Api from '../controllers/peticiones'
import Tabs_Table_Wallets from '../componentes/Tabs_Table_Wallets'

/*interface State {
  wallet: Wallet | null
  listWallet: Wallet[]
}*/

interface State1 {
  wallet1: Wallet | null
  listWallet1: Wallet[]
}



export const Wallets = () => {
    
  /*const[state, setState] = useState<State>({
    wallet: null,
    listWallet:[]
})*/

const[state1, setState1] = useState<State1>({
  wallet1: null,
  listWallet1:[]
})

useEffect(() => {
  (async function getWallets() {
      const api = new Api()
      const response2 = (await api.getWallets()).data
      setState1({wallet1:null, listWallet1:response2})
      const lsit1 = response2
      console.log(lsit1.length)

      /*const response = (await api.getWalletsjoin(lsit1.length)).data
      setState({wallet:null, listWallet:response})*/
  })();
},[]);

  return (
    <DefaultLayout>
      <Tabs_Table_Wallets data={state1.listWallet1}/>
    </DefaultLayout>  )
}

export default Wallets