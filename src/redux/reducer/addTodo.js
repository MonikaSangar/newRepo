import types from '../types';

const init_state = {
  newData: [],
};

export const addTask = (state = init_state, action) => {
  switch (action.type) {
    
    case types.ADDTODO: {
      return {...state, newData: action.payload};
    }
    default:
      return {...state};
  }
};

// switch(action.type) {

//   case types.ADDTODO: {
//     return {...state,newData:action.payload }
//   }
//   default:
//       return {...state};
// }
