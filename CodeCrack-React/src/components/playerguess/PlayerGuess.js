import React from 'react';
import { connect } from 'react-redux';

import './PlayerGuess.scss';

const PlayerGuess = () => {
  return <div className='playerguess-container'></div>;
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(PlayerGuess);
