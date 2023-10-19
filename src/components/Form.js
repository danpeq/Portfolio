import React from "react";
import "./FormStyle.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_c4xar3o', 
      'template_7q34u7a', 
      form.current, 
      '-htHH8vT45wpBpK3a'
      )
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" type="submit" name="message"/>
        <button className="btn">Submit</button>
      </form>

    </div>
  );
}

export default Form