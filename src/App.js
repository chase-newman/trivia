import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Header from './HeaderComponent/Header';
import Question from './QuestionComponent/Question'
import ScoreCounter from './ScoreCounter/ScoreCounter';
import Result from './ResultComponent/Result';

class App extends Component {
  state = {
    question: '',
    correctAnswer: '',
    inputText: '',
    userAnswer: null,
    incorrect: '',
    userScore: 0
  }
  
  componentDidMount() {
    axios.get('https://trivalicious.herokuapp.com/any/random')
      .then(response => {
          this.setState({
            question: response.data.question,
            correctAnswer: response.data.answer.toLowerCase()
          })
          console.log(response);
      });
  }  
  
  onChangeHandler = (event) => {
    this.setState({
      inputText: event.target.value
    });
  }
  
  onClickHandler = () => {
    this.setState({
      userAnswer: this.state.inputText.toLowerCase()
    })
    console.log(this.state.inputText.toLowerCase());
    
    if(this.state.correctAnswer.includes(this.state.inputText.toLowerCase())) {
      console.log("YOU SHOULD GET A POINT");
      this.setState((prevState) => {
        return {userScore: prevState.userScore + 1}
      })
    }
    
    if(this.state.inputText !== this.state.userAnswer) {
      this.setState({incorrect: 'Incorrect'})
    }
  }
  
  
  
  nextQuestionHandler = () => {
      axios.get('https://trivalicious.herokuapp.com/any/random')
      .then(response => {
          this.setState({
            question: response.data.question,
            correctAnswer: response.data.answer.toLowerCase(),
            inputText: '',
            userAnswer: null,
            incorrect: ''
          })
          console.log(response);
        }); 
  }
  
  
  render() {
    return (
      <div>
        <Header />
          <div className="container">
            <div className="row">
              <Question 
                question={this.state.question}
                onChangeHandler={this.onChangeHandler}
                value={this.state.inputText}
                onClickHandler={this.onClickHandler}
                nextQuestionHandler={this.nextQuestionHandler}
                />
            </div>
          <div className="row">
              <Result 
                correctAnswer={this.state.correctAnswer}
                userAnswer={this.state.userAnswer}
                incorrect={this.state.incorrect}/>
          </div>
          <div className="row align-center">
            <div className="col-md-4">
              <ScoreCounter userScore={this.state.userScore}/>
            </div>
          </div>
        </div>
      </div>
    );    
  }
}

export default App;
