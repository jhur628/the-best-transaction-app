import axios from "axios";

export default function TransactionList({transactions}) {
  const deleteTransaction = async (id) => {
    await axios.delete(`https://the-best-transaction-server.herokuapp.com/${id}`);
    window.location.reload();
  }
    
  const mappedTransactions = transactions.map((transaction, i) => {
    return <div>
      {transaction.type} {transaction.amount} <button onClick={() => deleteTransaction(transaction.id)}>DELETE</button>
    </div>
  })

  return (
    <div>
      <h1>Transactions:</h1>
      {mappedTransactions}
    </div>
  );
}