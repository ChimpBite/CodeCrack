import React from 'react';
import Box from '@material-ui/core/Box';

export const Winlose = () => {
  let codeSum = 4;
  let guessSum = 4;
  let codeProduct = 4;
  let guessProduct = 4;

  if (codeSum === guessSum && codeProduct === guessProduct) {
    return (
      <Box
        boxShadow={5}
        borderRadius={10}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        marginTop={2}
        paddingTop={1}
        paddingBottom={2}
      >
        <h4>You Win! You are now on level: 2</h4>
      </Box>
    );
  } else {
    return (
      <Box
        boxShadow={5}
        borderRadius={10}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        marginTop={2}
        paddingTop={1}
        paddingBottom={2}
      >
        <h4>You Lose! You will need to retry level: 1</h4>
      </Box>
    );
  }
};

export default Winlose;
