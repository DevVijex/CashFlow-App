// AddTransactionForm.js
import React, { useState } from "react";

function AddTransactionForm({ addTransaction }) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) return alert("Please fill all fields");

    const newTransaction = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      category,
    };

    addTransaction(newTransaction);
    setAmount("");
    setCategory("");
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="block mb-1">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="block mb-1">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded mt-2"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default AddTransactionForm;