import React from 'react';
import Box from '@material-ui/core/Box';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const Header = (props) => {
  let { Difficulty } = props;

  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  theme.typography.h4 = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    '@media (max-width:600px)': {
      fontSize: '.75rem',
    },
  };

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
      paddingLeft={2}
      paddingRight={2}
    >
      <ThemeProvider theme={theme}>
        <Typography variant='h1'>CodeCrack</Typography>
        <Typography variant='h4'>
          Enter the correct code to continue...
        </Typography>
        <Typography variant='h4'>Level Difficulty: 2</Typography>
      </ThemeProvider>
    </Box>
  );
};

export default Header;
