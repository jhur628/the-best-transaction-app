import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const profile = {
    name: "Will",
    accountNumber : 60192890,
    startingBalance: 50000
  }

  const { name, accountNumber, startingBalance} = profile
 
  const [ transactions, setTransactions ] = useState();

  useEffect(() => {
    axios.get(`https://the-best-transaction-server.herokuapp.com/`)
      .then(res => {
        setTransactions(res.data);
      });
  }, [])

  

  return (
    <div className="App">
      <header>
        The Best Transaction App
      </header>
      <div>
        Welcome back {name} ({accountNumber})!
      </div>
      <div>
        Starting Balance: {startingBalance}
      </div>
      <div>
        
      </div>

    </div>
  );
}

export default App;
