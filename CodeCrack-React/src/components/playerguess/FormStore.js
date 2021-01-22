import React, { Component } from 'react';
import PlayerGuess from './PlayerGuess';

export class FormStore extends Component {
  submit = values => {
    console.log('Submit', values);
  };
  render() {
    return <PlayerGuess onSubmit={this.submit} />;
  }
}

export default FormStore;
