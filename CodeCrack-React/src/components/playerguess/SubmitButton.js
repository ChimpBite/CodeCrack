import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

import './PlayerGuess.scss';

const RemoteSubmitButton = ({ dispatch }) => (
  <button type='button' onClick={() => dispatch(submit('playerguess'))}>
    Submit
  </button>
);
//                                  ^^^^^^^^^^^^ name of the form

export default connect()(RemoteSubmitButton);
