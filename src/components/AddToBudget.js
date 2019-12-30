import React, { Component } from 'react';

export class AddToBudget extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        amt: '', 
         desc: '',
         plan: 1
      }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : [e.target.value]})
    }

    handleSubmit = (e) => {
      e.preventDefault();
      if(this.state.desc.length > 0 && this.state.amt.length > 0){
        this.props.addItem(this.state);
        this.setState({amt: '', desc: ''});
      }
    }

    borderStyle = () => {
      return {
        borderColor: Math.round(this.state.plan) === 0 ? 'red' : 'green'
      }
    }
    
  render() {
    return (
      <div className="add-to-budget">
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="desc" style={this.borderStyle()} onChange={this.handleChange} value={this.state.desc} placeholder="Description..." />
            <input type="text" name="amt" style={this.borderStyle()} onChange={this.handleChange} value={this.state.amt} placeholder="Amount..." />
            <select name="plan" style={this.borderStyle()} value={this.state.plan} onChange={this.handleChange} >
                <option value="1">Income</option>
                <option value="0">Expense</option>
            </select>
            <button style={this.borderStyle()} >ADD <i className="fas fa-plus"></i></button>
        </form>
        
      </div>
    )
  }
}

export default AddToBudget;
