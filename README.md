# The Best Transaction App

## Description

I made a simple application that helps manage a client's funds.

The client is greeted with his or her name as well as the client's account number. The client will also be able to see his or her starting balance.

The client is able to view his transactions. Each transaction has a type and amount. These transactions are received through a postgres server that has been deployed on heroku. The transactions data was received through a GET request via axios. These transactions can also be deleted with the "DELETE" button next to each transaction. The delection of transactions are made possible by DELETE request via axios.

The client is also able to create a transaction with the small form provided after the transactions list. The user can enter an amount, and choose the type of the transaction(contribution, distribution, or bill payment). When the client clicks the "Create Transaction" button, a new transaction will be added to the postgres database. The new transaction will then be rendered to the transactions list.

The client is also able to see his or her current balance. For each contribution, the amount of the contribution is added to the starting balance. For each distribution and/or bill payment, the amount of the transaction is subtracted from the starting balance.

THANK YOU!

## Links

GitHub Repository: [https://github.com/jhur628/the-best-transaction-app](https://github.com/jhur628/the-best-transaction-app)

Deployed Application: [https://the-best-transaction-app.herokuapp.com/](https://the-best-transaction-app.herokuapp.com/)