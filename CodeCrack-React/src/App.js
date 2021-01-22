import Header from './components/header/Header';
import Level from './components/level/Level';
import RandomEngine from './components/randomengine/RandomEngine';
import PlayerGuess from './components/playerguess/PlayerGuess';
import Footer from './components/footer/Footer';
import SubmitButton from './components/playerguess/SubmitButton';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Level />
      <RandomEngine />
      <PlayerGuess />
      <SubmitButton />
      <Footer />
    </div>
  );
}

export default App;
