import React, { Component } from "react";
import Button from "antd/lib/button";

class Category extends Component {
    render() {
        return (
            <Button  className={`Categories-tiles tile${this.props.number}`}>
            {this.props.title}
            </Button > 
        )
    }
}

export default Category;
