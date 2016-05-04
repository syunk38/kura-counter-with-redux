import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  render() {
    const { count, onIncrement, onDecrement } = this.props
    return (
      <div className="counter">
        <p>Count is {count}</p>
        <button className="increment" onClick={onIncrement}>+</button>
        <button className="decrement" onClick={onDecrement}>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}
