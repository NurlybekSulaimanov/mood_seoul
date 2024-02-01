// authActions.js

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (credentials) => async (dispatch) => {
  try {
    // Simulate a loading state while waiting for the API call
    dispatch({ type: LOGIN_SUCCESS, payload: { loading: true } });

    // Perform the login API call
    const response = await fetch('http://localhost:8081/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Invalid credentials'); // or handle specific errors returned by the server
    }

    // Parse the response as JSON
    const user = await response.json();

    // Dispatch success action
    dispatch({ type: LOGIN_SUCCESS, payload: { user } });
  } catch (error) {
    // Dispatch failure action
    dispatch({ type: LOGIN_FAILURE, payload: { error: error.message } });
  }
};
