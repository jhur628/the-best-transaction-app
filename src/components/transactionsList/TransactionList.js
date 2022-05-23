

export default function TransactionList({transactions}) {

    
  const mappedTransactions = transactions.map((transaction, i) => {
    return <div>
      {transaction.type} {transaction.amount}
    </div>
  })

  return (
    <div>
      {mappedTransactions}
    </div>
  );
}