import { combineReducers } from "redux";
import TestReducer from "./TestReducer";

const appReducer = combineReducers({
   test: TestReducer,
});

const rootReducer = (state, action) => {
   console.log(action);
   return appReducer(state, action);
};

export default rootReducer;
