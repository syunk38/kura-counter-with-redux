import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countActions from '../actions/count';
import Counter from '../components/counter';
import React, { Component, PropTypes } from 'react';

class App extends Component {
  render() {
    const {count, incrementCount, decrementCount} = this.props;
    return <Counter
      count={count}
      onIncrement={() => {incrementCount(2);}}
      onDecrement={() => {decrementCount();}}
    />
  }
}

function mapStateToProps(state) {
  return {
    count: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(countActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
