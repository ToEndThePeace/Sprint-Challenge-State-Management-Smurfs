import { combineReducers } from "redux";

import { reducer as smurfs } from "./smurfs";
import { reducer as form } from "./form";

export default combineReducers({ smurfs, form });
