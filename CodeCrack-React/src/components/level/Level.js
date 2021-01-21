import React from 'react';
import { connect } from 'react-redux';

import './Level.scss';

const Level = props => {
  return (
    <div className='level-container'>
      <div className='instructions'>Level</div>
      <div className='level'>{props.LvL}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Level);
