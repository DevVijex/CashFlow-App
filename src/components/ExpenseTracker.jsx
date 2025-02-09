// ExpenseTracker.js
import React, { useState } from "react";
import AddTransactionForm from "./AddTransactionForm";
import TransactionList from "./TransactionList";
import Summary from "./Summary";

function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="container">
      <h1 className="content">CashFlow</h1>
      <p className = "sim"> <i>...Track, Save, Succeed!</i></p>
      <AddTransactionForm addTransaction={addTransaction} />
      <Summary totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default ExpenseTracker;

