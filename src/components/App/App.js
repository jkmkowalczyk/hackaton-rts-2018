import React, { Component } from "react";
import QuestionsList from '../QuestionsList/QuestionsList'

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuestionsList/>
      </div>
    );
  }
}

export default App;
