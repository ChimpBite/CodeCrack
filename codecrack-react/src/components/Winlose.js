import React from 'react';

export const Winlose = () => {
  let codeSum = 4;
  let guessSum = 4;
  let codeProduct = 4;
  let guessProduct = 4;

  if (codeSum === guessSum && codeProduct === guessProduct) {
    return (
      <div className='winlose'>
        <h4>You Win! You are now on level: 2</h4>
      </div>
    );
  } else {
    return (
      <div className='winlose'>
        <h4>You Lose! You will need to retry level: 1</h4>
      </div>
    );
  }
};

export default Winlose;
