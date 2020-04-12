import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    question: "",
    correctAnswer: "",
    inputText: "",
    userAnswer: null,
    incorrect: ""
  };

  componentDidMount() {
    axios
      .get("https://trivalicious.herokuapp.com/any/random")
      .then(response => {
        this.setState({
          question: response.data.question,
          correctAnswer: response.data.answer.toLowerCase()
        });
        console.log(response);
      });
  }

  onChangeHandler = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  onClickHandler = () => {
    const { inputText, userAnswer } = this.state;
    this.setState({
      userAnswer: inputText.toLowerCase()
    });
    if (inputText !== userAnswer) {
      this.setState({ incorrect: "Incorrect" });
    }
  };

  nextQuestionHandler = () => {
    axios
      .get("https://trivalicious.herokuapp.com/any/random")
      .then(response => {
        this.setState({
          question: response.data.question,
          correctAnswer: response.data.answer.toLowerCase(),
          inputText: "",
          userAnswer: null,
          incorrect: ""
        });
        console.log(response);
      });
  };

  render() {
    const {
      question,
      inputText,
      userAnswer,
      correctAnswer,
      incorrect
    } = this.state;
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">Trivalicious</span>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p id="question">{question}</p>
              <div className="input-group mb-3">
                <input
                  onChange={this.onChangeHandler}
                  type="text"
                  className="form-control"
                  placeholder="answer..."
                  aria-label="answer"
                  aria-describedby="basic-addon2"
                  value={inputText}
                />
                <div className="input-group-append">
                  <button
                    onClick={this.onClickHandler}
                    className="btn btn-outline-success"
                    type="button"
                  >
                    Submit
                  </button>
                  <button
                    onClick={this.nextQuestionHandler}
                    className="btn btn-block btn-outline-danger"
                  >
                    Next Question
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              {correctAnswer.includes(userAnswer) ? (
                <h1 id="green">Correct</h1>
              ) : (
                <h1 id="red">{incorrect}</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
