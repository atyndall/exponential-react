import React, { Component } from 'react';
import _ from 'lodash';
import numeral from 'numeral';
import Indicator from './Indicator.js';
import './App.css';

const PERCENTAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];
const YEARS       = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const DOLLARS     = [100];

const calculateAnswer = (percentage, years, dollars) => (Math.round(dollars * Math.pow(1 + (percentage/100), years)));

const generateBlankState = () => ({
  dollars: _.sample(DOLLARS),
  percent: _.sample(PERCENTAGES),
  years: _.sample(YEARS),
  submitted: false,
  answer: numeral(0),
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = generateBlankState();

    this.handleReset  = this.handleReset.bind(this);
    this.handleTry    = this.handleTry.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleReset() {
    this.setState(generateBlankState());
  }

  handleTry() {
    this.setState({submitted: true});
  }

  handleChange(event) {
    this.setState({answer: numeral(event.target.value), submitted: false});
  }

  render() {
    const {dollars, percent, years, answer, submitted} = this.state;

    return (
      <div className="App">
        <h1 className="title">Exponential growth</h1>
        <p className="question">How much will {dollars} become if you let it grow by {percent}% per year for {years} years?</p>
        <div className="answer">
          <div className="text-input">
            Answer: $<input type="text" id="text-input" name="lname" value={answer.format('0,0')} onChange={this.handleChange} /><br/>
          </div>
          <button type="submit" id="enter-button" onClick={this.handleTry} disabled={isNaN(answer.value())}>Try</button>
          <button type="button" id="reset-button" onClick={this.handleReset}>Reset</button>
        </div>
        {submitted && <Indicator correctAnswer={calculateAnswer(percent, years, dollars)} yourAnswer={answer.value()} />}
      </div>
    );
  }
}

export default App;
