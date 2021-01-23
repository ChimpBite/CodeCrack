import React from 'react';
import { connect } from 'react-redux';

import {
  setGeneratedCode,
  setCodeBase,
} from '../../redux/gameengine/GameEngine.actions'; //importing in random number actions

import './Level.scss';

class Level extends React.Component {
  // setting random codes on mounting(game start)
  componentDidMount() {
    this.props.setGeneratedCode();
    this.props.setCodeBase();
  }

  render() {
    return (
      <div className='level-container'>
        <div className='instructions'>Level</div>
        <div className='level'>{this.props.LvL}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { setGeneratedCode, setCodeBase })(
  Level
);
