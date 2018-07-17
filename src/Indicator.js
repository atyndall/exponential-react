import React from 'react';
import numeral from 'numeral';

const Indicator = (props) => {
  const {correctAnswer, yourAnswer} = props;
  const difference = Math.abs(yourAnswer - correctAnswer);
  const formattedAnswer = numeral(correctAnswer).format('0,0');

  if (difference < (0.01 * correctAnswer)) {
    return (
      <p id="indicator" style={{color: 'green'}}>Correct, the answer is {formattedAnswer}</p>
    );

  } else if (difference < (0.2 * correctAnswer)) {
    return (
      <p id="indicator" style={{color: 'green'}}>Close enough, the answer is {formattedAnswer}</p>
    );

  } else {
    return (
      <p id="indicator" style={{color: 'red'}}>Incorrect, the answer is {formattedAnswer}</p>
    )
  }
}

export default Indicator;