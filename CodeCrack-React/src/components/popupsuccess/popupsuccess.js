import React, { Component } from 'react';
import { connect } from 'react-redux';

class PopUpSuccess extends Component {
  handleClick = () => {
    this.setState({
      success: !this.state.success,
    });
  };

  render() {
    return (
      <div className='modal'>
        <div className='modal_content'>
          <h3>Success!!</h3>
          <span>You are now on level {this.props.LvL}</span>
        </div>
        <button onClick={this.handleClick}>Close</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('PopUpSuccess', state);
  return state;
};

export default connect(mapStateToProps)(PopUpSuccess);
