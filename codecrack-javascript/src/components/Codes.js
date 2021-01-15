import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiTypography-root': {
      margin: theme.spacing(0.5),
    },
  },
  fontbox: {
    fontSize: '2rem',
  },
}));

const Codes = () => {
    const classes = useStyles();
    return (
        <Box
            className={classes.root}
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
        >
            <Typography varient='p' component='p'>
                The codes add-up to:
                <Typography
                className={classes.fontbox}
                varient='p'
                component='p'
                align='center'
                >
                <Box border={1} borderColor='grey.300'>
                    500
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
                    500
                </Box>
                </Typography>
            </Typography>
        </Box>
    )
}

export default Codes;
