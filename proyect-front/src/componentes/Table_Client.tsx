import React from 'react';
import { Client } from '../models/client_model';

interface Props {
    data: Client[]
}


const Table_Client = ({data}: Props) => {
  return (
    <table className="caption-top table-auto border-collapse border border-slate-500">
        <thead>
            <tr>
                <th className="border border-slate-600 ">ID</th>
                <th className="border border-slate-600 ">ID_NUMBER</th>
                <th className="border border-slate-600 ">NAME</th>
                <th className="border border-slate-600 ">LAST NAME</th>
                <th className="border border-slate-600 ">EMAIL</th>
                <th className="border border-slate-600 ">ADDRESS</th>
                <th className="border border-slate-600 ">PHONE</th>
                <th className="border border-slate-600 ">PHONE #2</th>
            </tr>
        </thead>
        <tbody>
            {data?.map((item) => (
                <tr key={item.id}>
                    <td className="border border-slate-700">{item.id}</td>
                    <td className="border border-slate-700">{item.id_number}</td>
                    <td className="border border-slate-700">{item.name}</td>
                    <td className="border border-slate-700">{item.lastName}</td>
                    <td className="border border-slate-700">{item.email}</td>
                    <td className="border border-slate-700">{item.address}</td>
                    <td className="border border-slate-700">{item.phone}</td>
                    <td className="border border-slate-700">{item.phone2}</td>

                </tr>
            ))}

        </tbody>

</table>
  )
}

export default Table_Client