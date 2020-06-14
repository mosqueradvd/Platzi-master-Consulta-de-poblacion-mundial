/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Form = () => {
  return (
    <>
      <form>
        <h2>Contact Us</h2>
        <label>
          Name:
          <input type='text' name='name' placeholder='Type your name' />
        </label>

        <label>
          Name:
          <input type='email' name='email' placeholder='Type your email' />
        </label>

        <textarea name='subject' id='sbj' cols='30' rows='10' placeholder='Subject' />
        <textarea name='msg' id='msg' cols='30' rows='10' placeholder='Write your message' />

        <button type='submit'>Send Mesage</button>
      </form>
    </>
  );
};

export default Form;
