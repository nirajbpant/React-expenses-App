import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
    setIsEditing(false);
  };

  const startEditingHanlder = () => {
    setIsEditing(true);
  };

  const stopEditingHanlder = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHanlder}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          onCancel={stopEditingHanlder}
        />
      )}
    </div>
  );
};

export default NewExpense;
