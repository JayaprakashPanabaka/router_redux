import React from 'react'
import {useSelector} from 'react-redux'


const ReduxAccount = () => {
  const accountDetails = useSelector((state) => {return state})
  console.log(accountDetails);

  return (
    <div>
      <h1 className='text-2xl font-bold my-5 mx-2'>Account Holder Details</h1>
      <table className='border-[1px] border-black m-2'>
        <thead className='border-b-[1px] border-black'>
            <tr>
                <th className='p-2'>Balance</th>
                <th className='p-2'>Account Holder Name</th>
                <th className='p-2'>Contact</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td className='text-center'>{accountDetails.balance}</td>
                <td className='text-center'>{accountDetails.name}</td>
                <td className='text-center'>{accountDetails.contact}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ReduxAccount
