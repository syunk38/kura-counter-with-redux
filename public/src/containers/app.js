import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countActions from '../actions/count';
import Counter from '../components/counter';
import React, { Component, PropTypes } from 'react';

class App extends Component {
  render() {
    const {count, incrementCount, decrementCount, dispatch} = this.props;
    console.log(count);
    return <Counter
      count={count}
      onIncrement={() => {dispatch(incrementCount(count));}}
      onDecrement={() => {dispatch(decrementCount(count));}}
    />
  }
}

function mapStateToProps(state) {
  return {
    count :state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(countActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
