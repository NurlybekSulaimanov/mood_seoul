export const BOOK_TABLES_REQUEST = "BOOK_TABLES_REQUEST";
export const BOOK_TABLES_SUCCESS = "BOOK_TABLES_SUCCESS";
export const BOOK_TABLES_FAILURE = "BOOK_TABLES_FAILURE";

export const bookTablesRequest = () => ({
  type: BOOK_TABLES_REQUEST,
});

export const bookTablesSuccess = () => ({
  type: BOOK_TABLES_SUCCESS,
});

export const bookTablesFailure = (error) => ({
  type: BOOK_TABLES_FAILURE,
  payload: error,
});

export const bookTables = (
  userId,
  bandId,
  userName,
  phone,
  request,
  time,
  people,
  table
) => {
  return async (dispatch) => {
    dispatch(bookTablesRequest());
    try {
      const response = await fetch("http://localhost:5000/api/bookseats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          bandId: bandId,
          userName: userName,
          phone: phone,
          request: request,
          time: time,
          people: people,
          table: table,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to book seats");
      }

      dispatch(bookTablesSuccess());
      // You can dispatch additional actions if needed, such as fetching updated data or displaying success messages
    } catch (error) {
      dispatch(bookTablesFailure(error.message));
    }
  };
};
