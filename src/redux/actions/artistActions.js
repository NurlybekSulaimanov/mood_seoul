// actions/artistActions.js
export const FETCH_ARTISTS_REQUEST = 'FETCH_ARTISTS_REQUEST';
export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ARTISTS_FAILURE = 'FETCH_ARTISTS_FAILURE';

export const fetchArtistsRequest = () => ({
  type: FETCH_ARTISTS_REQUEST,
});

export const fetchArtistsSuccess = (artists) => ({
  type: FETCH_ARTISTS_SUCCESS,
  payload: artists,
});

export const fetchArtistsFailure = (error) => ({
  type: FETCH_ARTISTS_FAILURE,
  payload: error,
});

export const fetchArtists = () => {
  return async (dispatch) => {
    dispatch(fetchArtistsRequest());
    try {
      const response = await fetch('http://localhost:5000/api/bands');
      const data = await response.json();
      dispatch(fetchArtistsSuccess(data));
    } catch (error) {
      dispatch(fetchArtistsFailure(error.message));
    }
  };
};
