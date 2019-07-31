import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Display extends Component {
  render() {
    const { total } = this.props;
    console.log(this.props);
    return (
      <div className="display">
        { total }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  total: state.total,
});

export default connect(mapStateToProps, null)(Display);
