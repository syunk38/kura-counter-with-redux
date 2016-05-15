import counter from '../reducers/counter';
import { createStore } from 'redux';

export default function configureStore() {
  return createStore(counter);
}
