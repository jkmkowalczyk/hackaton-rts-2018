import React, {Component} from "react";
import Navbar from "../Navbar/Navbar";
import Test from "../Test";

export default class index extends Component {


    render() {
        return (
            <div>
                <Navbar history={this.props.history}/>
                <Test/>
            </div>
        )
    }
}
