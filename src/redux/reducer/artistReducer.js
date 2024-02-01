// reducers/artistReducer.js
import {
  FETCH_ARTISTS_REQUEST,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILURE,
} from "../actions/artistActions";

const initialState = {
  bands: [],
  artists: [],
  loading: false,
  error: null,
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTISTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ARTISTS_SUCCESS:
      const teamList = action.payload.filter((obj) => obj.usertype === "TEAM");
      const artistList = action.payload.filter(
        (obj) => obj.usertype === "ARTIST"
      );
      return {
        ...state,
        loading: false,
        bands: teamList,
        artists: artistList,
        error: null,
      };
    case FETCH_ARTISTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default artistReducer;
