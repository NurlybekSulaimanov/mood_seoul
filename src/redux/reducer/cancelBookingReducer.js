import {
    BOOK_CANCEL_REQUEST,
    BOOK_CANCEL_SUCCESS,
    BOOK_CANCEL_FAILURE,
  } from "../actions/bookingCancelAction";
  
  const initialState = {
    bookingStatus: false,
    loading: false,
    error: null,
  };
  
  export default function cancelBookingReducer(state = initialState, action) {
    switch (action.type) {
      case BOOK_CANCEL_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case BOOK_CANCEL_SUCCESS:
        return {
          ...state,
          loading: false,
          bookingStatus: true, // Assuming you want to store the status of the booking
        };
      case BOOK_CANCEL_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  