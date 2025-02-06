
// TransactionList.js
import React from "react";
import '../App.css';


function TransactionList({ transactions }) {
  return (
    <div className="background">
    <div className="transcon">
      <h2 className="trans">Transactions</h2>
      {transactions.length > 0 ? (
        <ul className="list">
          {transactions.map((t) => (
<li key={t.id} className={`list-item ${t.type === "income" ? "bg-income" : "bg-expense"}`}>
  <span>{t.category}</span> {/* Assuming you have a description field */}
  <span>{t.type === "income" ? "+" : "-"}${t.amount.toFixed(2)}</span> </li> ))}
        </ul>
      ) : (
        <p>No transactions yet.</p>
      )}
    </div>
    </div>
  );
}

export default TransactionList;