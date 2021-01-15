import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import useGuess from '../hooks/useGuess';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiTypography-root': {
      margin: theme.spacing(0.5),
    },
  },
  button: {
    fontSize: '1.5rem',
    fontFamily: 'atomic-age',
  },
  fontbox: {
    fontSize: '2rem',
  },
}));

const PlayLogic = (props) => {
  const { guess, handlePlayerGuess } = props;
  handlePlayerGuess()
}

const Play = (props) => {
  const classes = useStyles();
    return (
        <Box
        className={classes.root}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        >
      <form className={classes.root}>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
        <Button className={classes.button}>Enter</Button>
        </Box>
      </form>
    </Box>
    )
}

export default Play
