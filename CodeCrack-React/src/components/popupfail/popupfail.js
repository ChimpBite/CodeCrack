import React, { Component } from 'react';
import { connect } from 'react-redux';

class PopUpFail extends Component {
  handleClick = () => {
    this.setState({
      success: !this.state.success,
    });
  };

  render() {
    return (
      <div className='modal'>
        <div className='modal_content'>
          <h3>FAIL!!</h3>
          <span>Unable to advance.You will remain on {this.props.lvl}</span>
          <span>
            Your Numbers: {this.props.GuessA},{this.props.GuessB},
            {this.props.GuessC}
          </span>
          <span>
            CodeCrack Numbers: {this.props.CodeA}, {this.props.CodeB},
            {this.props.CodeC}
          </span>
        </div>
        <button onClick={this.handleClick}>Try again</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(PopUpFail);
