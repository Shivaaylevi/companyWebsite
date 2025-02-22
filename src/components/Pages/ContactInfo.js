import React,{useRef} from 'react'
import emailjs from "@emailjs/browser";
import styled from "styled-components";
const ContactInfo = () => {
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7249iii",
        "template_10m9377",
        form.current,
        "_y3nICrsnOYEuhNlr"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm >
    <h1>SEND A MESSAGE</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="to_name" required />
        <label>Email</label>
        <input type="email" name="from_name" required />
        <label>Message</label>
        <textarea name="message"  required/>
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default ContactInfo;

const StyledContactForm = styled.div`
  width: 600px;
  h1{
    text-aline:center
    font-size:3rem;
    padding:4rem;
  }

  form {
    display: flex;
    ${'' /* align-items: flex-start; */}
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    justify-content: center;


    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;