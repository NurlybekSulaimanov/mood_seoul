  // src/redux/reducer.js
  const initialState = {
    data: null,
    loading: true,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  