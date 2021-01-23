import React from 'react';
import { connect } from 'react-redux';
import {
  setGuess,
  setPlayerCodes,
  setLevel,
} from '../../redux/gameengine/GameEngine.actions';

import PopUpSuccess from '../popupsuccess/popupsuccess';
import PopUpFail from '../popupfail/popupfail';

import './PlayerGuess.scss';

class PlayerGuess extends React.Component {
  //player guess input form
  state = {
    GuessA: '',
    GuessB: '',
    GuessC: '',

    success: false,
    fail: false,
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  playerCondition = () => {
    // Check if guess is correct
    if (
      this.state.CodeSum === this.state.GuessSum &&
      this.state.CodeProduct === this.state.GuessProduct
    ) {
      this.setState({
        success: true,
      });
      this.props.setLevel();
    } else {
      this.state({
        fail: true,
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const newGuess = {
      GuessA: this.state.GuessA,
      GuessB: this.state.GuessB,
      GuessC: this.state.GuessC,
    };

    console.log('NewGuess', newGuess);

    this.props.setGuess(newGuess);
    this.setState({
      GuessA: this.state.GuessA,
      GuessB: this.state.GuessB,
      GuessC: this.state.GuessC,
    });

    this.props.setPlayerCodes();

    this.playerCondition();
  };

  render() {
    return (
      <div className='playerguess-container'>
        <div className='span-box-playerguess'>
          <span>Enter your codes</span>
        </div>
        <div className='player-input'>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                onChange={this.handleChange}
                name='GuessA'
                id='GuessA'
                value={this.state.GuessA}
              />
            </div>
            <div>
              <input
                onChange={this.handleChange}
                name='GuessB'
                id='GuessB'
                value={this.state.GuessB}
              />
            </div>
            <div>
              <input
                onChange={this.handleChange}
                name='GuessC'
                id='GuessC'
                value={this.state.GuessC}
              />
            </div>
            <button onClick={e => this.handleSubmit(e)}>Enter</button>
          </form>
          {this.state.success ? <PopUpSuccess /> : null}
          {this.state.success ? <PopUpFail /> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('Form', state);
  return state;
};

const mapDispatchToProps = { setGuess, setPlayerCodes, setLevel };

export default connect(mapStateToProps, mapDispatchToProps)(PlayerGuess);
