import React, { Component } from "react";
import fire from "../../fire";

class Quiz extends Component {
  render() {
    return <div>{this.props.test.name}</div>;
  }
}

export default Quiz;
