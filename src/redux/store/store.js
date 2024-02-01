import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import artistReducer from "../reducer/artistReducer";
import authReducer from "../reducer/authReduces";

const rootReducer = combineReducers({
    artists: artistReducer,
    auth: authReducer,
  });
  
  const store = createStore(rootReducer, applyMiddleware(thunk));
  
  export default store;
