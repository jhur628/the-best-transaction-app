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
  let currentBalance = startingBalance;
  
  const [ transactions, setTransactions ] = useState([]);

  const getData = async () => {
    const transactions = await axios('https://the-best-transaction-server.herokuapp.com/');
    const transactionsData = transactions.data
    setTransactions(transactionsData)
  }

  useEffect(() => {
    getData();
  }, []);

  transactions.forEach((transaction, i) => {
    transaction.type === "CONTRIBUTION" ? currentBalance += transaction.amount : currentBalance -= transaction.amount
  })

  return (
    <div className="App">
      <header>
        <h1>The Best Transaction App</h1>
      </header>
      <div>
        Welcome back {name} (acct#: {accountNumber})!
      </div>
      <div>
        Starting Balance: {startingBalance}
      </div>
      <div>
        <TransactionList transactions={transactions}/>
        <CreateTransactions />
      </div>
      <h1>Current Balance:</h1>
      <h2>{currentBalance}</h2>
    </div>
  );
}

export default App;
