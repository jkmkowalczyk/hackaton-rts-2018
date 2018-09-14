import React, { Component } from "react";
import Button from "antd/lib/button";
import Category from "./Category";
import "./Categories.css"

class Categories extends Component {
    render() {
        return <div>
            <div className="Categories-container">
              <Category title={"Angielski"} number={1} />
              <Category title={"Matematyka"} number={2} />
              <Category title={"Biologia"} number={3} />
              <Category title={"Chemia"} number={4} />
              <Category title={"Geografia"} number={5} />
              <Category title={"Fizyka"} number={6} />
            </div>
            <div className="Categories-container-header">
                <h2>KATEGORIE</h2>
            </div>
          </div>;
    }
}

export default Categories;
