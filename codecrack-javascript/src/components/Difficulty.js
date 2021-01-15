import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useDifficulty from '../hooks/useDifficulty';

let level = 1;

const useStyles = makeStyles((theme) => ({
    typmargin:{
        marginBottom: '1%',
    },
    fontbox: {
      fontSize: '2rem',
    },
  }));

const Level = () => {
    const [difficulty, setDifficulty] = useDifficulty(level)

        

    return [difficulty]
}

const Difficulty = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'>
            <Typography varient='p' component='p' className={classes.typmargin}>
                There are 3 numbers in the code:
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
        </Box>
    )
}

export default Difficulty;
