// reducers/artistReducer.js
import {
    BOOK_USER_SEATS_REQUEST,
    BOOK_USER_SEATS_SUCCESS,
    BOOK_USER_SEATS_FAILURE,
  } from "../actions/userSeatsActions";

  
  const initialState = {
    userSeats: [],
    loading: false,
    error: null,
  };
  
  export default function userSeatsReducer(state = initialState, action) {
    switch (action.type) {
      case BOOK_USER_SEATS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case BOOK_USER_SEATS_SUCCESS:
        return {
          ...state,
          loading: false,
          userSeats: action.payload,
        };
      case BOOK_USER_SEATS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }