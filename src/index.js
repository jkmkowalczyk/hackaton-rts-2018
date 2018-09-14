import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import reducers from "./reducers";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Auth from "./components/Auth";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={MainPage} />
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Auth} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
