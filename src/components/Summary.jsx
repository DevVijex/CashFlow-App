// Summary.js
import React from "react";
import '../Summary.css'; // Import the custom CSS file

function Summary({ totalIncome, totalExpenses, balance }) {
  return (
    <div className="summ">
      <h2>Summary</h2>
      <p>Total Income: <span className="income">${totalIncome.toFixed(2)}</span></p>
      <p>Total Expenses: <span className="expense">${totalExpenses.toFixed(2)}</span></p>
      <p>Balance: <span className="balance">${balance.toFixed(2)}</span></p>
    </div>
  );
}

export default Summary;




// function Summary({ totalIncome, totalExpenses, balance }) {
//   return (
//     <div className="summ">
//       <h2 className=" ">Summary</h2>
//       <p>Total Income: <span className="text-green-500">${totalIncome.toFixed(2)}</span></p>
//       <p>Total Expenses: <span className="text-red-500">${totalExpenses.toFixed(2)}</span></p>
//       <p>Balance: <span className="font-bold">${balance.toFixed(2)}</span></p>
//     </div>
//   );
// }

