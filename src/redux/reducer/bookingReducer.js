import {
    BOOK_TABLES_REQUEST,
    BOOK_TABLES_SUCCESS,
    BOOK_TABLES_FAILURE,
  } from "../actions/bookingAction";
  
  const initialState = {
    bookingStatus: false,
    loading: false,
    error: null,
  };
  
  export default function bookingReducer(state = initialState, action) {
    switch (action.type) {
      case BOOK_TABLES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case BOOK_TABLES_SUCCESS:
        return {
          ...state,
          loading: false,
          bookingStatus: true, // Assuming you want to store the status of the booking
        };
      case BOOK_TABLES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  