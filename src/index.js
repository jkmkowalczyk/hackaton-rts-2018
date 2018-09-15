import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import reducers from "./reducers";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Auth from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";
import Quiz from "./components/Quiz";
import Quizes from "./components/Quizes";

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
        <Route path="/login" component={Login} />
        <PrivateRoute path="/category/:id" component={Quizes} />
        <PrivateRoute path="/test/:id" component={Quiz} />
        <PrivateRoute path="/dashboard" component={MainPage} />
        <Route exact path="/" component={Auth} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
