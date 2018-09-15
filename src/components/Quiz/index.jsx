import React, { Component } from "react";
import fire from "../../fire";

class Quiz extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("quiz");
    return <div>{this.props.test.name}</div>;
  }
}

export default Quiz;
