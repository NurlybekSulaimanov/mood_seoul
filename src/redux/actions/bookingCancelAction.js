export const BOOK_CANCEL_REQUEST = "BOOK_CANCEL_REQUEST";
export const BOOK_CANCEL_SUCCESS = "BOOK_CANCEL_SUCCESS";
export const BOOK_CANCEL_FAILURE = "BOOK_CANCEL_FAILURE";

export const bookCancelRequest = () => ({
  type: BOOK_CANCEL_REQUEST,
});

export const bookCancelSuccess = () => ({
  type: BOOK_CANCEL_SUCCESS,
});

export const bookCancelFailure = (error) => ({
  type: BOOK_CANCEL_FAILURE,
  payload: error,
});

export const cancelBooking = (userId, bandId) => {
  return async (dispatch) => {
    dispatch(bookCancelRequest());
    try {
      const response = await fetch("http://localhost:5000/api/cancelBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          bandId: bandId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to book seats");
      }

      dispatch(bookCancelSuccess());
      // You can dispatch additional actions if needed, such as fetching updated data or displaying success messages
    } catch (error) {
      dispatch(bookCancelFailure(error.message));
    }
  };
};
