import React from 'react';
import numeral from 'numeral';

const Indicator = (props) => {
  const {correctAnswer, yourAnswer} = props;

  const difference      = Math.abs(yourAnswer - correctAnswer);
  const formattedAnswer = numeral(correctAnswer).format('0,0');

  let color, status;

  if (difference < (0.01 * correctAnswer)) {
    color  = 'green';
    status = 'Correct';
  } else if (difference < (0.2 * correctAnswer)) {
    color  = 'green';
    status = 'Close enough';
  } else {
    color  = 'red';
    status = 'Incorrect';
  }

  return (
    <p id="indicator" style={{color: color}}>{status}, the answer is ${formattedAnswer}</p>
  );
}

export default Indicator;