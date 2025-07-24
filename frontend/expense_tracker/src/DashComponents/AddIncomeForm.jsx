import React, { useState } from "react";

const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncome((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddIncome(income);
    setIncome({ source: "", amount: "", date: "", icon: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Source
        </label>
        <input
          type="text"
          name="source"
          value={income.source}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          type="number"
          name="amount"
          value={income.amount}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          name="date"
          value={income.date}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        Add Income
      </button>
    </form>
  );
};

export default AddIncomeForm;
