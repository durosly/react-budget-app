import React from 'react';

function IncomeList({incomes, stringifyNumber, removeItem}) {
  return (
    <div className="list list-income">
      <h3>Income list</h3>
      <ul>
        {
          incomes.map((income) => (<li key={income.id}><span>{income.desc}</span><span className="amt">{stringifyNumber(income.amt)}</span><button onClick={() => removeItem(income.id, 1)}><i className="fas fa-trash"></i></button></li>))
        }
      </ul>
    </div>
  )
}

export default IncomeList;
