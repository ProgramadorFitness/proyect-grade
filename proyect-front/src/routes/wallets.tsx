import Table_Wallets from '../componentes/Table_Wallets'
import DefaultLayout from '../layout/DefaultLayout'

export const wallets = () => {
  return (
    <DefaultLayout>
      <div className='py-8'>
        <Table_Wallets/>
      </div>
    </DefaultLayout>  )
}

export default wallets