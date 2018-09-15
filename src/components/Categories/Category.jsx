import React, { Component } from "react";
import Button from "antd/lib/button";

class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button
        className={`Categories-tiles tile${this.props.number}`}
        id={this.props.id}
      >
        {this.props.name}
      </Button>
    );
  }
}

export default Category;
