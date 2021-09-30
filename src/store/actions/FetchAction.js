import { SET_DATA_FETCH, SET_LOADING } from "../type";

export const fetchDataAction = () => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, loading: true });
    try {
      fetch(`http://jsonplaceholder.typicode.com/posts`, { method: "GET" })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          dispatch({ type: SET_LOADING, loading: false });
          dispatch({ type: SET_DATA_FETCH, data: result });
        })
        .catch((error) => {
          console.log("error", error);
          dispatch({ type: SET_LOADING, loading: false });
        });
    } catch (error) {
      console.error(error);
      dispatch({ type: SET_LOADING, loading: false });
    }
  };
};
