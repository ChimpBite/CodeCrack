import React from 'react';
import { connect } from 'react-redux';

import {
  setGeneratedCode,
  setCodeBase,
} from '../../redux/gameengine/GameEngine.actions';

import './Level.scss';

class Level extends React.Component {
  constructor(props) {
    super(props);

    console.log('props', props);
  }

  componentDidMount() {
    this.props.setGeneratedCode();
    this.props.setCodeBase();
  }

  render() {
    return (
      <div className='level-container'>
        <div className='instructions'>Level</div>
        <div className='level'>{this.props.GameEngine.LvL}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('State', state.GameEngine);
  return state;
};

export default connect(mapStateToProps, { setGeneratedCode, setCodeBase })(
  Level
);
