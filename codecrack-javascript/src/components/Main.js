import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

export const Main = () => {
  const classes = useStyles();
  const [CodeSum, setCodeSum] = useState(!!null);
  const [CodeProduct, setCodeProduct] = useState(!!null);
  const [CodeA, setCodeA] = useState(!!null);
  const [CodeB, setCodeB] = useState(!!null);
  const [CodeC, setCodeC] = useState(!!null);

  let [Difficulty, setDifficulty] = useState(!!null);

  const RandomNum = () => {
    const CodeA = Math.floor(Math.random() * 10 + 1);
    console.log('Logged Output -> randomNum -> CodeA', CodeA);
    setCodeA(CodeA);
    const CodeB = Math.floor(Math.random() * 10 + 1);
    console.log('Logged Output -> randomNum -> CodeB', CodeB);
    setCodeB(CodeB);
    const CodeC = Math.floor(Math.random() * 10 + 1);
    console.log('Logged Output -> randomNum -> CodeC', CodeC);
    setCodeC(CodeC);

    const CodeSum = CodeA + CodeB + CodeC;
    console.log('Logged Output -> randomNum -> CodeSum', CodeSum);
    setCodeSum(CodeSum);
    const CodeProduct = CodeA * CodeB * CodeC;
    console.log('Logged Output -> randomNum -> CodeProduct', CodeProduct);
    setCodeProduct(CodeProduct);
  };

  document.getElementById('frame').onload = function () {
    RandomNum();
  };
  return (
    <Box
      className={classes.root}
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Typography varient='p' component='p'>
        There are 3 numbers in the code
      </Typography>
      <Typography varient='p' component='p'>
        Level Difficulty:
        <Typography
          className={classes.fontbox}
          varient='p'
          component='p'
          align='center'
        >
          <Box border={1} borderColor='grey.300'>
            1
          </Box>
        </Typography>
      </Typography>
      <Typography varient='p' component='p'>
        The codes add-up to:
        <Typography
          className={classes.fontbox}
          varient='p'
          component='p'
          align='center'
        >
          <Box border={1} borderColor='grey.300'>
            {CodeSum}
          </Box>
        </Typography>
      </Typography>
      <Typography varient='p' component='p'>
        The codes multiply to:
        <Typography
          className={classes.fontbox}
          varient='p'
          component='p'
          align='center'
        >
          <Box border={1} borderColor='grey.300'>
            {CodeProduct}
          </Box>
        </Typography>
      </Typography>

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
            InputLabelProps={{ shrink: true }}
            variant='outlined'
            size='small'
          />
          <TextField
            id='outlined-number'
            label='Guess #2'
            type='number'
            InputLabelProps={{ shrink: true }}
            variant='outlined'
            size='small'
          />
          <TextField
            id='outlined-number'
            label='Guess #3'
            type='number'
            InputLabelProps={{ shrink: true }}
            variant='outlined'
            size='small'
          />
          <Button className={classes.button}>Enter</Button>
        </Box>
      </form>
    </Box>
  );
};

export default Main;
