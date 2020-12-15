import React from 'react';
import Divider from '@material-ui/core/Divider';

export const Header = () => {
  return (
    <>
      <h1>CodeCrack</h1>
      <h4>You need to enter the correct code to continue...</h4>
      <h4>Level Difficulty: </h4>
      <Divider />
    </>
  );
};

export default Header;
