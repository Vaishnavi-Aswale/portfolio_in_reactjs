import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
// import {SERVICE,TEMPLATE,KEY} from '../apiKey';
require('dotenv').config();

// const service=process.env.SERVICE;
// const template=process.env.TEMPLATE;
// const key=process.env.KEY;
const service= "service_rtgwvtd";
const template= "template_3qzrc6b";
const key= "user_6HbqoSD05X7P7UYpyYuea";

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.sendForm(service,template , e.target, key)
    .then((result) => {
    alert("Message Sent, I will get back to you shortly", result.text);
    },
    (error) => {
    alert("An error occurred, Please try again", error.text);
    });
    e.target.reset();
    };
    
  return (
    <>
      <FormStyle onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" >Send</button>
      </FormStyle>
    </>
  );
}
