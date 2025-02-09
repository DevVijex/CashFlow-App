import React, { useState } from "react";

function AddTransactionForm({ addTransaction }) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const categories = {
    income: ["Salary", "Freelance", "Investment", "Other"],
    expense: ["Food", "Transport", "Clothing", "Utility", "Rent", "Other"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category || !description)
      return alert("Please fill all fields");

    const newTransaction = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      category,
      description,
    };

    addTransaction(newTransaction);
    setAmount("");
    setCategory("");
    setDescription("");
  };

  const inputStyles ="w-full p-2 border rounded placeholder-gray-500 text-sm";

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="block mb-1">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-field"
          placeholder="Enter amount"
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1">Type</label>
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setCategory(""); // Reset category when type changes
          }}
          className="select-field"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="block mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select-field"
        >
          <option value="">Select</option>
          {categories[type]?.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-2">
        <label className="block mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-field"
          placeholder="Add a brief description of the transaction"
        ></textarea>
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
 


