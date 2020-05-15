export const UPDATE_INPUT = "UPDATE_INPUT";
export const updateInput = (e) => (dispatch) => {
  const { name, value } = e.target;
  const field = { name, value };
  dispatch({ type: UPDATE_INPUT, payload: field });
};

export const CLEAR_FORM = "CLEAR_FORM";
export const clearForm = () => (dispatch) => {
  dispatch({ type: CLEAR_FORM });
};
