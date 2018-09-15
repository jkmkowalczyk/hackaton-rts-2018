import React, { Component } from "react";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";

class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={`category/${this.props.id}`}>
        <Button
          className={`Categories-tiles tile${this.props.number}`}
          id={this.props.id}
        >
          {this.props.name}
        </Button>
      </Link>
    );
  }
}

export default Category;
