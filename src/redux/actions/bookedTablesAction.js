// actions/artistActions.js
export const FETCH_TABLES_REQUEST = 'FETCH_TABLES_REQUEST';
export const FETCH_TABLES_SUCCESS = 'FETCH_TABLES_SUCCESS';
export const FETCH_TABLES_FAILURE = 'FETCH_TABLES_FAILURE';

export const fetchTablesRequest = () => ({
  type: FETCH_TABLES_REQUEST,
});

export const fetchTablesSuccess = (tables) => ({
  type: FETCH_TABLES_SUCCESS,
  payload: tables,
});

export const fetchTablesFailure = (error) => ({
  type: FETCH_TABLES_FAILURE,
  payload: error,
});

export const fetchTables = (userId) => {
  return async (dispatch) => {
    dispatch(fetchTablesRequest());
    try {
      const response = await fetch(`http://localhost:5000/api/bookedseats?userId=${userId}`);
      const data = await response.json();
      dispatch(fetchTablesSuccess(data));
    } catch (error) {
      dispatch(fetchTablesFailure(error.message));
    }
  };
};
