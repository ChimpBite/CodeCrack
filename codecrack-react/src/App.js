import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Code from './components/Code';
import Crack from './components/Crack';
import Winlose from './components/Winlose';
import Footer from './components/Footer';
import { RandomNumberProvider } from '../context/RandomNumberState';

import './App.css';

function App() {
  return (
    <RandomNumberProvider>
      <Container maxWidth='sm'>
        <Header />
        <Code />
        <Crack />
        <Winlose />
        <Footer />
      </Container>
    </RandomNumberProvider>
  );
}

export default App;
