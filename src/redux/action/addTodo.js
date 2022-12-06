import store from '../store';
import types from '../types';


export const addTodo = data => {
    store.dispatch({
      type: types.ADDTODO,
      payload: data,
    });
  };

  export const deleteData =(data) =>{
    store.dispatch({
      type:types.DELETE,
      payload:data,
    })
  }

  export const edit =data=>{
    store.dispatch({
      type:types.EDIT,
      payload:data
    })
  }
