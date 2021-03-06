import React, { Component } from 'react';
import { displayTotal, equals, clickNumber, clickOperator, clear } from '../store/actions';
import { connect } from 'react-redux';
import '../App.css';

class Button extends Component {

  handleClick(e) {
    e.preventDefault();
    this.props.displayTotal(this.props.value);

    if (typeof(this.props.value) === 'number' ) {
      this.props.clickNumber(this.props.value);
    } else if ( this.props.value  === "=") {
      this.props.equals();
    } else if (this.props.type === "operator") {
      this.props.clickOperator(this.props.value);
    } else if (this.props.type === "clear") {
      this.props.clear();
    }

  }

  render() {
    return ( 
      <div className="button" onClick={(e) => this.handleClick(e)}>
        {this.props.children}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  displayTotal: payload => dispatch(displayTotal(payload)),
  equals: payload => dispatch(equals(payload)),
  clickNumber: payload => dispatch(clickNumber(payload)),
  clickOperator: payload => dispatch(clickOperator(payload)),
  clear: () => dispatch(clear())
});

export default connect(null, mapDispatchToProps)(Button);
