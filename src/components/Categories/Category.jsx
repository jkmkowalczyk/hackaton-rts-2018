import React, { Component } from "react";
import Button from "antd/lib/button";

class Category extends Component {
    render() {
        return (
            <Button  className={`Categories-tiles tile${this.props.number}`} id={this.props.title}>
            {this.props.title}
            </Button > 
        )
    }
}

export default Category;
