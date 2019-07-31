import React, { Component } from 'react';
import Button from './Button';
import '../App.css';

class ButtonRow extends Component {
  render() {
    return (
      <>
      <div className="button-row">
        <Button key={7} value={7}>7</Button>
        <Button key={8} value={8}>8</Button>
        <Button key={9} value={9}>9</Button>
        <Button key={"%"} value={"%"} type={"operator"}>%</Button>
      </div>
      <div className="button-row">
        <Button key={4} value={4}>4</Button>
        <Button key={5} value={5}>5</Button>
        <Button key={6} value={6}>6</Button>
        <Button key={"x"} value={"x"} type={"operator"}>x</Button>
      </div>
      <div className="button-row">
        <Button key={1} value={1}>1</Button>
        <Button key={2} value={2}>2</Button>
        <Button key={3} value={3}>3</Button>
        <Button key={"+"} value={"+"} type={"operator"}>+</Button>

      </div>
      <div className="button-row">
        <Button key={0} value={0}>0</Button>
        <Button key={"."} value={"."}>.</Button>
        <Button key={"-"} value={"-"} type={"operator"}>-</Button>
      </div>
      <div className="button-row">
        <Button key={"="} value={"="} type={"operator"}>=</Button>
      </div>
      </>
    )
  }
}

export default ButtonRow;
