import axios from 'axios';
import { useState } from 'react';

export default function CreateTransactions() {
  const [ amount, setAmount ] = useState(0);
  const [ type, setType ] = useState("contribution")

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleTypeSelect = (e) => {
    setType(e.target.value)
  };

  const createTransaction = async () => {
    await axios.post(`https://the-best-transaction-server.herokuapp.com/${type}`, {
      amount: amount
    });
    window.location.reload();
  };

  console.log(amount)
  console.log(type)

  return (
    <div>
      <h1>Make a transaction:</h1>
      <input type='number' placeholder='Enter amount...' onChange={handleAmountChange} required/>
      <select value={type} onChange={handleTypeSelect}>
        <option value='contribution'>Contribution</option>
        <option value='distribution'>Distribution</option>
        <option value='bill-payment'>Bill Payment</option>
      </select>
      <button onClick={() => createTransaction()}>Create Transaction</button>
    </div>
  )
}