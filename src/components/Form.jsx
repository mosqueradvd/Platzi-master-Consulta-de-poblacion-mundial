/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import "../assets/styles/components/Form.scss";

const Form = () => {
  return (
    <>
      <form id='#contact'>
        <h2>Contact Us</h2>
        <input type='text' name='name' placeholder='Name' />
        <input type='email' name='email' placeholder='Email' />
        <textarea name='msg' id='msg' cols='30' rows='10' placeholder='Message' />
        <button type='submit'>Send</button>
      </form>
    </>
  );
};

export default Form;
