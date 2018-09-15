import React, { Component } from "react";
import fire from "../../fire";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = { quiz: [] };
  }

  componentDidMount() {
    const name = this.props.location.state.testId;
    fire
      .database()
      .ref("tests")
      .orderByChild("name")
      .equalTo(name)
      .once("value")
      .then(snapshot => {
        console.log(" quiz ", snapshot.val());
        this.setState({
          quiz: snapshot.val()
        });
      });
  }

  render() {
    console.log("quiz", this.state.quiz);
    return <div>{this.state.quiz}</div>;
  }
}

export default Quiz;
