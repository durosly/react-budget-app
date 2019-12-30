import React from 'react';

function ExpensesList({expenses, stringifyNumber, removeItem}) {
  return (
    <div>
      <h3>Expenses List</h3>
      <div className="list list-expense">
      <ul>
        {
          expenses.map((expense) => (<li key={expense.id}><span>{expense.desc}</span><span className="amt">{stringifyNumber(expense.amt)}</span><button onClick={() => removeItem(expense.id, 0)}><i className="fas fa-trash"></i></button></li>))
        }
      </ul>
    </div>
    </div>
  )
}

export default ExpensesList;
