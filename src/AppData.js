import React, { Component } from 'react';
import Header from './components/Header';
import Budget from './components/Budget';
import AddToBudget from './components/AddToBudget';
import {BudgetProvider} from './components/budgetContext';

class AppData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         totalIncome: 0,
         totalExpense: 0,
         savings: 0,
         owing: 0,
         perExp: 0,
         perSave: 0,
         incomes: [],
         expenses: [],
        perSav: ''
      }
    }
    
    stringifyNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    calTotalIncome = () => {
      let totalInc = 0;

      if(this.state.incomes.length > 0){
        this.state.incomes.forEach((income) => {
          totalInc += income.amt;
        })
      }

      this.setState({totalIncome: totalInc}, this.calReturns);
    }

    calTotalExpense = () => {
      let totalExp = 0;

      if(this.state.expenses.length > 0){
        this.state.expenses.forEach((expense) => {
          totalExp += expense.amt;
        })
      }

      this.setState({totalExpense: totalExp}, this.calReturns);
    }

    calReturns = () => {
      if(this.state.totalExpense < this.state.totalIncome){
        const savings = this.state.totalIncome - this.state.totalExpense;
        this.setState({savings: savings, owing: 0}, this.calPercentage);
      } else if(this.state.totalExpense > this.state.totalIncome){
        const owing = this.state.totalExpense - this.state.totalIncome;
        this.setState({savings: 0, owing: owing}, this.calPercentage);
      } else {
        this.setState({savings: 0, owing: 0}, this.calPercentage);
      }
    }

    //percentage expense and saving
    calPercentage = () => {
      if(this.state.totalExpense > 0 && this.state.totalIncome > 0 ){

        const perExp = Math.round((this.state.totalExpense / this.state.totalIncome) * 100);
        this.setState({perExp});
      } else if(this.state.totalExpense === 0 || this.state.totalIncome === 0){
        this.setState({perExp: 0});
      }

      if(this.state.savings > 0 && this.state.totalIncome > 0){
        const perSave = Math.round((this.state.savings / this.state.totalIncome) * 100);
        this.setState({perSave});
      } else if(this.state.savings === 0 || this.state.totalIncome === 0){
        this.setState({perSave: 0});
      }
      //console.log(perExp);
    }

    removeItem = (id, plan) => {
      if(plan === 1){
        this.setState({incomes: this.state.incomes.filter((income) => (income.id !== id))}, this.calTotalIncome);
      } else if(plan === 0){
        this.setState({expenses: this.state.expenses.filter((expense) => (expense.id !== id))}, this.calTotalExpense);
      }
    }

    addItem = (data) => {
      data.plan = Math.round(data.plan);
      if(data.plan === 0){
        let id = 0;
        if(this.state.expenses.length > 0){
          id = this.state.expenses[this.state.expenses.length -1].id + 1;
        }

        const item = {
          id,
          desc: data.desc,
          amt: Math.round(data.amt)
        }

        this.setState({expenses: [...this.state.expenses, item]}, this.calTotalExpense);
      } else if(data.plan === 1){
        let id = 0;
        if(this.state.incomes.length > 0){
          id = this.state.incomes[this.state.incomes.length -1].id + 1;
        }

        const item = {
          id,
          desc: data.desc,
          amt: Math.round(data.amt)
        }

        this.setState({incomes: [...this.state.incomes, item]}, this.calTotalIncome);
      }
    }

    componentDidMount() {
      this.calTotalExpense();
      this.calTotalIncome();
      this.calPercentage();
    }
  render() {
    return (
        <BudgetProvider value={{...this.state, stringifyNumber: this.stringifyNumber, removeItem: this.removeItem, addItem: this.addItem}}>
            <Header />
            <Budget />
            <AddToBudget addItem={this.addItem} />
        </BudgetProvider>
    )
  }
}

export default AppData;
