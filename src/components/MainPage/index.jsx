import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { connect } from "react-redux";
import { fetchTests } from "../../actions";
import Quizes from "../Quizes";
import fire from "../../fire";
import _ from "lodash";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = { tests: [] };
  }

  componentDidMount() {
    fire
      .database()
      .ref("tests")
      .once("value")
      .then(snapshot => {
        this.setState({
          tests: snapshot.val()
        });
      });
  }

  renderTests() {
    return _.map(this.state.tests, obj => {
      return <Quizes tests={obj} />;
    });
  }

  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        <div>{this.renderTests()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tests: state.tests
  };
}

export default connect(
  mapStateToProps,
  { fetchTests }
)(MainPage);
