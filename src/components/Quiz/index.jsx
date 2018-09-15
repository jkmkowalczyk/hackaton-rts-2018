import React, { Component } from "react";
import fire from "../../fire";
import { Button } from "semantic-ui-react";
import _ from "lodash";
import "./styles.css";
import { Link } from "react-router-dom";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = { quiz: [] };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const name = this.props.match.params.id;
    fire
      .database()
      .ref("tests")
      .orderByChild("name")
      .equalTo(name)
      .once("value")
      .then(snapshot => {
        console.log("quiz did mount", snapshot.val());
        this.setState({
          quiz: snapshot.val()
        });
      });
  }

  renderQuestion(question) {
    console.log("question", question);
    return (
      <div className="question">
        <div className="quiz-card-group">
          <p className="question-single">{question.pyt}</p>
          <button className="answer-single">
            Odpowiedz A: {question.odpa}
          </button>
          <button className="answer-single">
            Odpowiedz B: {question.odpb}
          </button>
          <button className="answer-single">
            Odpowiedz C: {question.odpc}
          </button>
          <button className="answer-single">
            Odpowiedz D: {question.odpd}
          </button>
        </div>
      </div>
    );
  }

  renderTest() {
    if (!Array.isArray(this.state.quiz)) {
      const test = this.state.quiz[Object.keys(this.state.quiz)[0]];
      return _.map(test.pytania, obj => {
        return this.renderQuestion(obj);
      });
    }
  }
  render() {
    return (
      <div>
        <div className="bg">
          <div className="background-question">
            {this.renderTest()}
            <div className="button-container">
              <Link to="/dashboard">
                <Button className="back">Wyjdź</Button>
              </Link>
              <Button className="submit">Sprawdź mnie</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
