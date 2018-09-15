import React, { Component } from "react";
import CategoryList from "./CategoryList";
import QuestionsItem from "./QuestionsItem";
import fire from "../../fire";

import "./QuestionsList.css";

export default class QuestionsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: <QuestionsItem key={"question0"} Key={0} />,
      array: [],
      i: 1,
      it: 0
    };
  }

  BtnClick(e) {
    this.state.it = 0;
    let temp = document.getElementById("pyt" + (this.state.i - 1).toString())
      .value;
    let temp2 = document.getElementById("odpa" + (this.state.i - 1).toString())
      .value;
    let temp3 = document.getElementById("odpb" + (this.state.i - 1).toString())
      .value;
    let temp4 = document.getElementById("odpc" + (this.state.i - 1).toString())
      .value;
    let temp5 = document.getElementById("odpd" + (this.state.i - 1).toString())
      .value;
    let temp6 = document.getElementById("odp" + (this.state.i - 1).toString())
      .innerText;
    if (
      temp !== "" &&
      temp2 !== "" &&
      temp3 !== "" &&
      temp4 !== "" &&
      temp5 !== "" &&
      temp6 !== ""
    ) {
      document.getElementById("sub-container").style.height = 430 + "px";
      document.getElementById("add-btn").disabled = false;
      document.getElementById("add-btn").style.backgroundColor =
        "rgb(241, 244, 247)";
      document.getElementById("add-btn").style.cursor = "pointer";
      this.state.array.push({
        pyt: temp,
        odpa: temp2,
        odpb: temp3,
        odpc: temp4,
        odpd: temp5,
        odp: document.getElementById("odp" + (this.state.i - 1).toString())
          .value
      });
      this.setState({
        questions: (
          <QuestionsItem key={"question" + this.state.i} Key={this.state.i} />
        )
      });
      this.state.i = this.state.i + 1;
    } else {
      if (temp === "") {
        document.getElementById(
          "pyt" + (this.state.i - 1).toString()
        ).style.borderColor = "red";
      }
      if (temp2 === "") {
        document.getElementById(
          "odpa" + (this.state.i - 1).toString()
        ).style.borderColor = "red";
      }
      if (temp3 === "") {
        document.getElementById(
          "odpb" + (this.state.i - 1).toString()
        ).style.borderColor = "red";
      }
      if (temp4 === "") {
        document.getElementById(
          "odpc" + (this.state.i - 1).toString()
        ).style.borderColor = "red";
      }
      if (temp5 === "") {
        document.getElementById(
          "odpd" + (this.state.i - 1).toString()
        ).style.borderColor = "red";
      }
      if (temp6 === "") {
        document.getElementById("hide").style.display = "inline";
        document.getElementById("hide").style.top = e.pageY - 160 + "px";
        document.getElementById("hide").style.left = 550 + "px";
      }
    }
  }

  writeToFirebase(e) {
    console.log("click");
    if (
      this.state.array.length > 0 &&
      document.getElementById("name-input").value !== "" &&
      document.querySelector(".category-select").selectedIndex !== 0
    ) {
      const test = {
        category: document.querySelector(".category-select").value,
        name: document.getElementById("name-input").value,
        tests: this.state.array
      };

      fire
        .database()
        .ref("tests")
        .push(test)
        .then(() => console.log("Addition successfull"))
        .catch(err => err.message);
    } else {
      if (document.getElementById("name-input").value === "")
        document.getElementById("name-input").style.borderColor = "red";
      if (document.querySelector(".category-select").selectedIndex === 0)
        document.querySelector(".category-select").style.borderColor = "red";
    }
  }

  CheckInput(e) {
    if (e.target.value !== "") e.target.style.borderColor = "#dddddd";
    else e.target.style.borderColor = "red";
  }

  render() {
    return (
      <div className="wrapper">
        <div>
          <CategoryList />
          <input
            id="name-input"
            onFocus={e => {
              e.target.placeholder = "";
            }}
            onBlur={e => {
              e.target.placeholder = "Podaj nazwę...";
              this.CheckInput(e);
            }}
            placeholder="Podaj nazwę..."
          />
          <div className="bar" />
          <div id="sub-container">
            {this.state.array.map(i => {
              if (i)
                return (
                  <div
                    key={"qs" + this.state.it}
                    className="questions-submited"
                  >
                    <div key={"op" + this.state.it} className="q-submited">
                      Pytanie: <p>{i.pyt}</p>
                    </div>
                    <div key={"oa" + this.state.it} className="q-submited">
                      Odpowiedź A: <p>{i.odpa}</p>
                    </div>
                    <div key={"ob" + this.state.it} className="q-submited">
                      Odpowiedź B: <p>{i.odpb}</p>
                    </div>
                    <div key={"oc" + this.state.it} className="q-submited">
                      Odpowiedź C: <p>{i.odpc}</p>
                    </div>
                    <div key={"od" + this.state.it} className="q-submited">
                      Odpowiedź D: <p>{i.odpd}</p>
                    </div>
                    <div key={"a" + this.state.it++} className="q-submited">
                      Prawidłowa odpowiedź: <p>{i.odp}</p>
                    </div>
                  </div>
                );
            })}
          </div>
          <div className="questions-container">
            <div>{this.state.questions}</div>
          </div>
          <div className="q-submited">
            Liczba wczytanych pytań: {this.state.i - 1}
          </div>
          <div className="bar" />
          <button id="next-btn" onClick={this.BtnClick.bind(this)}>
            Następny
          </button>
          <button
            id="add-btn"
            onClick={this.writeToFirebase.bind(this)}
            disabled
          >
            Wyślij!
          </button>
          <div id="hide">Zaznacz prawidłową odpowiedź!</div>
        </div>
      </div>
    );
  }
}
