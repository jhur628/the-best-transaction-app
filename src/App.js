import './App.css';
import TransactionList from './components/transactionsList/TransactionList';
import { useState, useEffect } from 'react';

function App() {
  const profile = {
    name: "Will",
    accountNumber : 60192890,
    startingBalance: 50000
  }

  const { name, accountNumber, startingBalance} = profile
  
  const [ transactions, setTransactions ] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch('https://the-best-transaction-server.herokuapp.com/');
        const body = await result.json();
        setTransactions(body);
      } catch (err) {
        console.log(err)
      };
    }

    getData();
  }, [])

  console.log(transactions);

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
      <TransactionList transactions={transactions}/>
    </div>
  );
}

export default App;
