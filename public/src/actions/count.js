export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const incrementCount = (count = 1) => {
  return {
    type: INCREMENT,
    count
  };
}

export const decrementCount = (count = 1) => {
  return {
    type: DECREMENT,
    count
  };
}
