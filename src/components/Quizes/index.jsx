import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import fire from "../../fire";
import _ from "lodash";
import Category from "../Categories/Category";
import Navbar from "../Navbar/Navbar";
import "../Categories/Categories.css";
import { Link } from "react-router-dom";

class Quizes extends Component {
  constructor(props) {
    super(props);

    this.state = { quizes: [] };
  }
  componentDidMount() {
    const category = this.props.match.params.id;
    console.log("mounting", category);
    fire
      .database()
      .ref("/tests")
      .orderByChild("category")
      .equalTo(category)
      .once("value")
      .then(snap => this.setState({ quizes: snap.val() }))
      .catch(err => console.log(err.message));
  }

  renderQuizes() {
    let n = 0;
    return _.map(this.state.quizes, (obj, index) => {
      n++;
      return (
        <Link to={`/test/${obj.name}`}>
          <Category name={obj.name} id={index} number={n} />
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="Categories-container">{this.renderQuizes()}</div>
      </div>
    );
  }
}

export default withRouter(Quizes);
