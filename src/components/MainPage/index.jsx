import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { connect } from "react-redux";
import { fetchTests } from "../../actions";
import Quizes from "../Quizes";
import fire from "../../fire";
import _ from "lodash";
import Categories from "../Categories/Categories";
import "../../index.css";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = { tests: [] };
  }

  render() {
    return (
      <div className="content">
        <div className="nav">
          <Navbar history={this.props.history} />
        </div>
        <div className="main-header">
          <div className="header-overlay">
            <p>
              „Powiedz mi, to zapomnę. Naucz mnie, to może zapamiętam. Zaangażuj
              mnie, to się nauczę.”
              <br />- Benjamin Franklin
            </p>
          </div>
        </div>
        <div>
          <Categories />
        </div>
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
