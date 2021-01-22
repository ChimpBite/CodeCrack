import React from 'react';
import { connect } from 'react-redux';

import './RandomEngine.scss';

const RandomEngine = props => {
  return (
    <div className='randomengine-container'>
      <p className='paragraph'>Enter the correct code to advance level</p>
      <p className='paragraph'>There are 3 numbers in the code</p>
      <div className='span-box-randomengine spanOne'>
        <span>The codes sum is:</span>
      </div>
      <div className='code-box'>{props.GameEngine.CodeSum}</div>
      <div className='span-box-randomengine spanTwo'>
        <span>The codes product is:</span>
      </div>
      <div className='code-box'>{props.GameEngine.CodeProduct}</div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('Random', state.GameEngine);
  return state;
};

export default connect(mapStateToProps)(RandomEngine);
