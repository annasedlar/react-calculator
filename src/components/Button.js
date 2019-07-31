import React, { Component } from 'react';
import { displayTotal } from '../store/actions';
import { connect } from 'react-redux';
import '../App.css';

class Button extends Component {

  handleClick(e) {
    e.preventDefault();
    this.props.displayTotal(this.props.value); 
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
});

export default connect( null, mapDispatchToProps)(Button);
