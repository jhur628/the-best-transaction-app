import './App.css';
import TransactionList from './components/transactionsList/TransactionList';
import CreateTransactions from './components/createTransactions/CreateTransactions';
import { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
  const profile = {
    name: "Will",
    accountNumber : 60192890,
    startingBalance: 50000
  }

  const { name, accountNumber, startingBalance} = profile
  
  const [ transactions, setTransactions ] = useState([]);

  const getData = async () => {
    const transactions = await axios('https://the-best-transaction-server.herokuapp.com/');
    const transactionsData = transactions.data
    setTransactions(transactionsData)
  }

  useEffect(() => {
    getData();
  }, []);

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
        <TransactionList transactions={transactions}/>
        <CreateTransactions />
      </div>
    </div>
  );
}

export default App;
