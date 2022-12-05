import store from '../store';
import types from '../types';


export const addTodo = data => {
    store.dispatch({
      type: types.ADDTODO,
      payload: data,
    });
  };
