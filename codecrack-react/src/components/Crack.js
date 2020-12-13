import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export const Crack = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();

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
      <form className={classes.root} noValidate autoComplete='off'>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <TextField
            id='numberOne'
            label='Enter the first number:'
            type='number'
            size='small'
            variant='outlined'
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id='numberTwo'
            label='Enter the second number:'
            type='number'
            size='small'
            variant='outlined'
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id='numberThree'
            label='Enter the third number:'
            type='number'
            size='small'
            variant='outlined'
            InputLabelProps={{ shrink: true }}
          />
          <Button
            variant='outlined'
            onClick={() => {
              // debugger;
            }}
          >
            Enter
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Crack;
