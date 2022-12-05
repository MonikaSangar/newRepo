import store from '../store';
import types from '../types';

export const incrementNumber = data => {
  store.dispatch({
    type: types.INCREMENT,
    payload: data,
  });
};

export const decrementNumber = data => {
  store.dispatch({
    type: types.DECREMENT,
    payload: data,
  });
};

