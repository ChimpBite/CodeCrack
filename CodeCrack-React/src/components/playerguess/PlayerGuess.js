import React from 'react';
import { Field, reduxForm } from 'redux-form';
import submit from './submit';

import './PlayerGuess.scss';

let PlayerGuess = props => {
  const { handleSubmit } = props;
  return (
    <div className='playerguess-container'>
      <div className='span-box-playerguess'>
        <span>Enter your codes</span>
      </div>
      <div className='player-input'>
        <form onSubmit={handleSubmit}>
          <div>
            <Field name='GuessA' component='input' type='text' />
          </div>
          <div>
            <Field name='GuessB' component='input' type='text' />
          </div>
          <div>
            <Field name='GuessC' component='input' type='text' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'playerguess', // a unique identifier for this form
  onSubmit: submit, // submit function must be passed to onSubmit
})(PlayerGuess);
