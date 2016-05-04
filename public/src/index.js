import React from 'react';
// import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counter from './reducers/counter';
import Counter from './components/counter';

const store = createStore(counter);

function render() {
  React.render(
    <Counter
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      count={store.getState()}
    />,
    document.getElementById('content')
  );
}

render();
store.subscribe(render)
