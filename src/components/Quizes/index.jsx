import React, { Component } from "react";
import { Link } from "react-router-dom";

class Quizes extends Component {
  render() {
    console.log("quizes", this.props.test.name);
    return (
      <Link
        to={{
          pathname: `test/${this.props.test.name}`,
          state: { testId: this.props.test.name }
        }}
      >
        {this.props.test.name}
      </Link>
    );
  }
}

export default Quizes;
