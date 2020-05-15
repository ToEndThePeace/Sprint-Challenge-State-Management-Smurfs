import { smurfs } from "../actions";
const {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
} = smurfs;
const initialState = {
  smurfs: null,
  isFetching: false,
  isPosting: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };
    case ADD_SMURF_START:
      return {
        ...state,
        isPosting: true,
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        isPosting: false,
        smurfs: action.payload,
      };
    default:
      return state;
  }
};
