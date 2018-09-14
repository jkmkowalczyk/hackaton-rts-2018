import React, { Component, Fragment } from "react";

export default class index extends Component {
  componentDidMount() {
    if (localStorage.getItem("isAuthenticated") === "true") {
      return this.props.history.replace("/dashboard");
    }
    this.props.history.replace("/login");
  }
  render() {
    return <Fragment />;
  }
}
