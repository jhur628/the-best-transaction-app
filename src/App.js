import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ transactions, setTransactions ] = useState([]);

  
    axios.get(`https://the-best-transaction-server.herokuapp.com/`)
      .then(res => setTransactions(res.data));

  console.log(transactions);

  return (
    <div className="App">
      <header>
        The Best Transaction App
      </header>

    </div>
  );
}

export default App;
