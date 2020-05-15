import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./components/App";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./store/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(<App />, document.getElementById("root"));
