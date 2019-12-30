import React from 'react';
import {BudgetConsumer} from './budgetContext';

function Percentage() {
  return (
    <div className="percentage">
      <div className="expenditure">
        <BudgetConsumer>
          {
            (data) => {
              return (
                <>
                <div className="circle-expenditure">{data.perExp}<i className="fas fa-percent"></i></div><h3>Expenditure</h3>
                </>
              ) 
            }
          }
        </BudgetConsumer>
      </div>
      <div className="savings">
        <BudgetConsumer>
          {
            (data) => {
              return (
                <>
                  <div className="circle-savings">{data.perSave}<i className="fas fa-percent"></i></div><h3>Saving</h3>
                </>
              )
            }
          }
        </BudgetConsumer>
      </div>
    </div>
  )
}

export default Percentage;
