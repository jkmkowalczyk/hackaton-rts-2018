import React, { Component } from "react";
import Categories from "../Categories/Categories";
import "../../index.css";

export default class index extends Component {
  render() {
    return <div className="content">
        <div className="header">
          <div className="header-overlay">
          <p>„Powiedz mi, to zapomnę. Naucz mnie, to może zapamiętam. Zaangażuj mnie, to się nauczę.”- Benjamin Franklin

</p>
          </div>
        </div>
        <div>
          <Categories />
        </div>
      </div>;
  }
}
