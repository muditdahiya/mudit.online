import fb from "./fb.png";
import insta from "./insta.png";
import linkedin from "./linkedin.png";
import youtube from "./youtube.png";
import twitter from "./twitter.png";
import emailjs from "@emailjs/browser";

import { useRef } from "react";

function Contact() {
  const outputMessage = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    outputMessage.current.style.display = "block";
    const templateObject = {
      from_name: data.get("from_name"),
      reply_to: data.get("reply_to"),
      message: data.get("message"),
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_KEY,
        process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
        templateObject,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          outputMessage.current.style.color = "green";
          outputMessage.current.innerHTML = "Email sent successfully!";
          e.target.reset();
        },
        (error) => {
          outputMessage.current.style.color = "red";
          outputMessage.current.innerHTML = "Email could not send!";
        }
      );
    setTimeout(() => {
      outputMessage.current.innerHTML = "";
      outputMessage.current.style.display = "none";
    }, "5000");
  };
  return (
    <div className="Contact page">
      <h2 className="pageHeading">Contact</h2>
      <h3>Email me at</h3>
      <strong>
        <a href="mailto: contact@muditdahiya.com">contact@muditdahiya.com</a>
      </strong>
      <h3>Or connect with me on these platforms</h3>
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/muditdahiya/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin"></img>
        </a>
        <a
          href="https://www.instagram.com/mudit.music/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="Instagram"></img>
        </a>
        <a
          href="https://www.youtube.com/muditdahiya"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="Youtube"></img>
        </a>
        <a
          href="https://www.facebook.com/MuditDahiya"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fb} alt="Facebook"></img>
        </a>
        <a
          href="https://twitter.com/muditdahiya"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Twitter"></img>
        </a>
      </div>
      <h3>Or contact me using this form!</h3>
      <div className="contactForm">
        <form onSubmit={submitForm}>
          <div className="cardWrap">
            <div className="cardLeft">
              <label htmlFor="name">Name: </label>
              <br />
              <input
                type="text"
                name="from_name"
                placeholder="What do I call you?"
                required
              />
            </div>
            <div className="cardRight">
              <label htmlFor="email">Email: </label>
              <br />
              <input
                type="email"
                name="reply_to"
                placeholder="No spam, I promise!"
              />
            </div>
          </div>
          <label htmlFor="message">Message: </label>
          <br />
          <textarea
            type="text"
            name="message"
            placeholder="What do you want to say?"
            required
          />
          <br />
          <div className="submitWrap">
            <input className="submitButton" type="submit" value="Submit" />
            <p id="outputMessage" ref={outputMessage}></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
