import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import rootReducer from "./redux/reducers/index";
import thunk from "redux-thunk";
import "./assets/styles/styles.scss";
import App from "./routes/App";

import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
