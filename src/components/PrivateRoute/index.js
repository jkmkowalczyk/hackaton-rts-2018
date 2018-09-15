import React from "react";
import { Route, Redirect } from "react-router";

export default ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return localStorage.getItem("isAuthenticated") === "true" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};
