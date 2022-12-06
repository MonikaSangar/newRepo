import types from '../types';

const init_state = {
  newData: [],
};

export const addTask = (state = init_state, action) => {
  console.log("actiondfffffff",action)
  console.log('data',state)
  switch (action.type) {
    
    case types.ADDTODO: {

     
      return {...state, newData: action.payload};
    }

    case types.DELETE:{
      return {...state,newData:action.payload}
   
      // return {...state,newData:state.newData.filter((name) => name !== action.payload)}
    }

    case types.EDIT:{
      return {...state,newData:action.payload}
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
