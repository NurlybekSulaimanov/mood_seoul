// reducers/artistReducer.js
import {
  FETCH_TABLES_REQUEST,
  FETCH_TABLES_SUCCESS,
  FETCH_TABLES_FAILURE,
} from "../actions/bookedTablesAction";

const initialState = {
  bookedTables: [],
  status: { loading: false, error: null, ok: false },
};

export default function tablesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TABLES_REQUEST:
      return {
        ...state,
        status: { loading: true, error: null, ok: false }, // Modify status
      };
    case FETCH_TABLES_SUCCESS:
      return {
        ...state,
        status: { loading: false, error: null, ok: true }, // Modify status
        bookedTables: action.payload,
      };
    case FETCH_TABLES_FAILURE:
      return {
        ...state,
        status: { loading: false, error: action.payload, ok: false }, // Modify status
      };
    default:
      return state;
  }
}
