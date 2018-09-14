import React, { Component } from "react";
import Button from "antd/lib/button";
import Category from "./Category";

class Categories extends Component {
    render() {
        return (
            <div className="Categories-container">
            <Category title={"Język Angielski"}
                number={1}
            />
            <Category title={"Matematyka"}
                number={2}
            />
            <Category title={"Biologia"}
                number={3}
            />
            <Category title={"Chemia"}
                number={4}
            />
            <Category title={"Geografia"}
                number={5}
            />
            <Category title={"Fizyka"}
                number={6}
            />
            </div>
        )
    }
}

export default Categories;
