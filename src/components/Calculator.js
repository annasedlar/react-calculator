import React, { Component } from 'react';
import Display from './Display';
import ButtonRow from './ButtonRow';
import '../App.css';

class Calculator extends Component {
  
  render() {
    return (
      <div className="calculator">
          <Display/>
          <ButtonRow/>
      </div>
    )
  }
}

export default Calculator;
