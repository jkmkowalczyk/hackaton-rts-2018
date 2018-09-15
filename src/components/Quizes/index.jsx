import React, {Component} from "react";

class Quizes extends Component {
    render() {
        return <div>{this.props.tests.name}</div>;
    }
}

export default Quizes;
