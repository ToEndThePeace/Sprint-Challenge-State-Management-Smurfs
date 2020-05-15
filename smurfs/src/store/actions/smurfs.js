export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const fetchSmurfsStart = (smurfs) => (dispatch) => {
  dispatch({ type: FETCH_SMURFS_START });
};
export const fetchSmurfsSuccess = (smurfs) => (dispatch) => {
  dispatch({ type: FETCH_SMURFS_SUCCESS, payload: smurfs });
};

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const addSmurfStart = () => (dispatch) => {
  dispatch({ type: ADD_SMURF_START });
};
export const addSmurfSuccess = (newList) => (dispatch) => {
  dispatch({ type: ADD_SMURF_SUCCESS, payload: newList });
};
