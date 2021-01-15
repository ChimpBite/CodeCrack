import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Difficulty from './components/Difficulty';
import Codes from './components/Codes';
import Guess from './components/Guess';
import useGuess from './hooks/useGuess';
import Play from './components/Play';

function App() {
  const [handlePlayerGuess] = useGuess();
  return (
    <Container maxWidth='sm'>
      <Grid item xs={12}>
        <Paper>
          <Header />
          <Difficulty />
          <Codes />
          <Guess />
          <Play handlePlayerGuess={handlePlayerGuess}/>
        </Paper>
      </Grid>
    </Container>
  );
}

export default App;
