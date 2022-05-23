import axios from 'axios';
import { useState } from 'react';

export default function CreateTransactions() {
  const [ input, setInput ] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  console.log(input)

  return (
    <div>
      <form>
        <input type='number' onChange={handleChange} />
        <button type='submit' >Create Contribution</button>
      </form>
      <form>
        <input type='number' onChange={handleChange} />
        <button>Create Distribution</button>
      </form>
      <form>
        <input type='number' onChange={handleChange} />
        <button>Create Bill Payment</button>
      </form>
    </div>
  )
}