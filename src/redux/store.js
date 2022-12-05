// import { combineReducers, createStore } from "redux";
// import { AddInc } from "./reducer";

import { create } from "react-test-renderer";

// const rootReducer =AddInc(createStore({
//     count:AddInc
// }))

// export const store = createStore(rootReducer);

import { createStore } from "redux";
import { addTask } from "./reducer/addTodo";




const store=createStore(addTask)

export default store