import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Crack = () => {
  return (
    <div className='crack'>
      <span>
        Enter the first number: <br />
        <Form.Control className='formcontrol' placeholder='' />
      </span>
      <span>
        Enter the second number:
        <br />
        <Form.Control className='formcontrol' placeholder='' />
      </span>
      <span>
        Enter the third number:
        <br />
        <Form.Control className='formcontrol' placeholder='' />
      </span>
      <Button variant='dark' className='button'>
        Enter
      </Button>
    </div>
  );
};

export default Crack;
