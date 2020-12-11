import React from 'react';
import Box from '@material-ui/core/Box';

export const Code = () => {
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
      <p>There are 3 numbers in the code</p>
      <p>The codes add-up to: 55</p>
      <p>The codes multiply to: 555</p>
    </Box>
  );
};

export default Code;
