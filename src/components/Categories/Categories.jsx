import React, { Component } from "react";
import Category from "./Category";
import "./Categories.css";
import fire from "../../fire";
import _ from "lodash";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = { categories: [] };
  }

  componentDidMount() {
    fire
      .database()
      .ref("categories")
      .once("value")
      .then(snap => this.setState({ categories: snap.val() }));
  }

  renderCategories() {
    let n = 0;
    return _.map(this.state.categories, (obj, index) => {
      n++;
      return <Category name={obj.name} id={index} number={n} />;
    });
  }

  render() {
    return (
      <div>
        <div className="Categories-container">{this.renderCategories()}</div>
        <div className="Categories-container-header">
          <h2>KATEGORIE</h2>
        </div>
      </div>
    );
  }
}

export default Categories;
