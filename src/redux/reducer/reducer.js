import types from '../types';

const init_state = {
  count: 0,
};

export const AddInc = (state = init_state, action) => {

  switch (action.type) {
    case types.INCREMENT:{
      let data = action.payload;
      return {...state, count: data + 1};
    }
    case types.DECREMENT:{
      let data=action.payload
      return {...state ,count: data - 1};
    }

    default:
      return {...state};
  }
};
