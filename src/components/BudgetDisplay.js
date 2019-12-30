import React from 'react';
import IncomeList from './IncomeList';
import ExpensesList from './ExpensesList';
import {BudgetConsumer} from './budgetContext';

function BudgetDisplay() {
  return (
    <div>
      <div className="budget-container">
        <div className="grid">
          <BudgetConsumer>
            {
              (data) => {
                return <IncomeList incomes={data.incomes} stringifyNumber={data.stringifyNumber} removeItem={data.removeItem}/>
              }
            }
          </BudgetConsumer>
          
        </div>
        <div className="grid">
        <BudgetConsumer>
            {
              (data) => {
                return <ExpensesList expenses={data.expenses} stringifyNumber={data.stringifyNumber} removeItem={data.removeItem}/>
              }
            }
        </BudgetConsumer>
        </div>
      </div>
      <BudgetConsumer>
        {
          (data) => {
            return (
              <>
              <div className="total">
                <div className="grid">
                    <h3>Total income: {data.stringifyNumber(data.totalIncome)}</h3>
                </div>
                <div className="grid">
                    <h3>Total expense: {data.stringifyNumber(data.totalExpense)}</h3>
                </div>
              </div>
              {
                (data.savings > 0 || data.owing === 0) ? <h3>Saving: {data.stringifyNumber(data.savings)}</h3> : <h3>Owing: {data.stringifyNumber(data.owing)}</h3>
              }
              
              
              </>
            )
          }
        }
      </BudgetConsumer>
    </div>
    
  )
}

export default BudgetDisplay;
