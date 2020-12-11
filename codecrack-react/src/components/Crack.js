import React from 'react';
import Box from '@material-ui/core/Box';

export const Crack = () => {
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
      <span>
        Enter the first number: <br />
      </span>
      <span>
        Enter the second number:
        <br />
      </span>
      <span>
        Enter the third number:
        <br />
      </span>
    </Box>
  );
};

export default Crack;
