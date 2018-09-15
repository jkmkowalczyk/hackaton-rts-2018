import { AutoComplete } from "antd";
import React, { Component } from "react";
import "antd/dist/antd.css";
import "./Navbar.css";
import fire from "../../fire";
import { withRouter } from "react-router-dom";

class Searchbar extends Component {
  state = {
    testList: []
  };

  onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  getTests = () => {
    let list = [];
    fire
      .database()
      .ref("tests")
      .on("value", snapshot => {
        let obj = snapshot.val();
        Object.keys(obj).forEach(key => {
          list.push(obj[key].name);
        });
        let uniqueList = list.filter(this.onlyUnique);
        this.setState({ testList: uniqueList });
      });
  };

  componentWillMount() {
    this.getTests();
  }

  onSelect = value => {
    console.log("on select", value);
    this.props.history.push(`test/${value}`);
  };

  render() {
    return (
      <div className="searchbar-container">
        <AutoComplete
          style={{ width: 300 }}
          dataSource={this.state.testList}
          placeholder="wyszukaj test"
          filterOption={(inputValue, option) =>
            option.props.children
              .toUpperCase()
              .indexOf(inputValue.toUpperCase()) !== -1
          }
          autoFocus={true}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default withRouter(Searchbar);
