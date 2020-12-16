import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  h1: {
    background: 'linear-gradient(to right, #9fa8da, #283593)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: 'atomic-age',
    fontSize: '4rem',
    '@media (max-width:600px)': {
      fontSize: '3.5rem',
    },
    padding: 5,
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Typography className={classes.h1} varient='h1' component='h1'>
        CodeCrack
      </Typography>
      <Divider />
    </Box>
  );
};

export default Header;
