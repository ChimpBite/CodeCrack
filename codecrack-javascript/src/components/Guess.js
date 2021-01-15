import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';


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

const Guess = () => {
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
          <TextField
            id='outlined-number'
            label='Guess #1'
            type='number'
            name='guess1'
            InputLabelProps={{ shrink: true }}
            variant='outlined'
            size='small'
          />
          <TextField
            id='outlined-number'
            label='Guess #2'
            name='guess1'
            type='number'
            InputLabelProps={{ shrink: true }}
            variant='outlined'
            size='small'
          />
          <TextField
            id='outlined-number'
            label='Guess #3'
            name='guess1'
            type='number'
            InputLabelProps={{ shrink: true }}
            variant='outlined'
            size='small'
          />
        </Box>
      </form>
    </Box>
    )
}

export default Guess;
