import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <Container maxWidth='sm'>
      <Grid item xs={12}>
        <Paper>
          <Header />
          <Main />
        </Paper>
      </Grid>
    </Container>
  );
}

export default App;
