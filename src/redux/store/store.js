import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import artistReducer from "../reducer/artistReducer";
import tablesReducer from "../reducer/tablesReduces";
import bookingReducer from "../reducer/bookingReducer";
import userSeatsReducer from "../reducer/userSeatsReducer";
import cancelBookingReducer from "../reducer/cancelBookingReducer";

const rootReducer = combineReducers({
  tables: tablesReducer,
  artists: artistReducer,
  booking: bookingReducer,
  userSeats: userSeatsReducer,
  bookingCancel: cancelBookingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
