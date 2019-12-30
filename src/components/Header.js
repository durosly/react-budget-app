import React, { Component } from 'react';
import TimeDate from './TimeDate'
import Percentage from './Percentage';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Budget App <i className="fas fa-money-bill-wave"></i></h1>
        <TimeDate />
        <p>Keep track of your budget...</p>
        <Percentage />
      </div>
    )
  }
}

export default Header;
