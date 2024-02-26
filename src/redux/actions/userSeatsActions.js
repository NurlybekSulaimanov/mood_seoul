export const BOOK_USER_SEATS_REQUEST = "BOOK_USER_SEATS_REQUEST";
export const BOOK_USER_SEATS_SUCCESS = "BOOK_USER_SEATS_SUCCESS";
export const BOOK_USER_SEATS_FAILURE = "BOOK_USER_SEATS_FAILURE";

export const bookUserSeatsRequest = () => ({
  type: BOOK_USER_SEATS_REQUEST,
});

export const bookUserSeatsSuccess = (userSeats) => ({
  type: BOOK_USER_SEATS_SUCCESS,
  payload: userSeats,
});

export const bookUserSeatsFailure = (error) => ({
  type: BOOK_USER_SEATS_FAILURE,
  payload: error,
});

export const getUserSeats = (userId, bandId) => {
  return async (dispatch) => {
    dispatch(bookUserSeatsRequest());
    try {
      const response = await fetch(
        `http://localhost:5000/api/usersSeats?userId=${userId}&bandId=${bandId}`
      );

      if (!response.ok) {
        throw new Error("Failed to get user seats");
      }

      const data = await response.json();

      dispatch(bookUserSeatsSuccess(data));
      // You can dispatch additional actions if needed, such as fetching updated data or displaying success messages
    } catch (error) {
      dispatch(bookUserSeatsFailure(error.message));
    }
  };
};
