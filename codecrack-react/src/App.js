import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Code from './components/Code';
import Crack from './components/Crack';
import Winlose from './components/Winlose';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Container maxWidth='sm'>
      <Header />
      <Code />
      <Crack />
      <Winlose />
      <Footer />
    </Container>
  );
}

export default App;
