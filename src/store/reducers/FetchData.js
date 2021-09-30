import { SET_DATA_FETCH, SET_LOADING } from "../type";

const initialState = {
  loading: false,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_FETCH:
      return { ...state, data: action.data };
    case SET_LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};
