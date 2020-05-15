import { form } from "../actions";
const { UPDATE_INPUT, CLEAR_FORM } = form;

const initialState = {
  name: "",
  age: "",
  height: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
};
