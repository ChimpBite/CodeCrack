import React from 'react';
import Box from '@material-ui/core/Box';

export const Footer = () => {
  return (
    <Box
      boxShadow={5}
      borderRadius={10}
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      marginTop={2}
      marginBottom={2}
      paddingTop={1}
      paddingBottom={2}
    >
      <span>&copy; {new Date().getFullYear()} Chad Parker</span>
    </Box>
  );
};

export default Footer;
