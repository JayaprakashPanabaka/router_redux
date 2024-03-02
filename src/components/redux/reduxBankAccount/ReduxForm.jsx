import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {ACTIONS} from './reduxBankAccountStore.js'

const ReduxForm = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState("");
  const [contact, setContact] = useState(null);

  const dispatch = useDispatch()

  const handleDeposit = () => {
    dispatch({type: ACTIONS.DEPOSIT, payload: Number(amount)});
    setAmount('');
  }

  return (
    <div>
      <h1 className="text-2xl font-bold my-5 mx-2">User Form</h1>

      <div className="mx-2 my-2 flex gap-5">
        <input
          type="text"
          className="border-[1px] border-black rounded px-2 py-1"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleDeposit} className="border-[1px] border-black rounded py-1 px-2">
          Deposit
        </button>
        <button className="border-[1px] border-black rounded py-1 px-2">
          Withdrawal
        </button>
      </div>

      <div className="mx-2 my-2 flex gap-5">
        <input
          type="text"
          className="border-[1px] border-black rounded px-2 py-1"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="border-[1px] border-black rounded py-1 px-2">
          Update Name
        </button>
      </div>

      <div className="mx-2 my-2 flex gap-5">
        <input
          type="text"
          className="border-[1px] border-black rounded px-2 py-1"
          placeholder="Enter Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button className="border-[1px] border-black rounded py-1 px-2">
          Update Contact
        </button>
      </div>
    </div>
  );
};

export default ReduxForm;
