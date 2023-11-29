import React from 'react'

const Modal_Loan = () => {

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
        </>
    ): null}
    </>
  )
}

export default Modal_Loan